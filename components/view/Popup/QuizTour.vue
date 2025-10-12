<script setup lang="ts">
defineOptions({
  name: 'ViewPopupQuizTour',
});

const show = defineModel<boolean>({
  required: false,
  default: false,
});

const { $appFetch } = useNuxtApp();

const quizData = [
  {
    id: 'q1',
    text: 'Сколько человек планируют поездку?',
    answers: [
      { id: 'a1', text: '1' },
      { id: 'a2', text: '2' },
      { id: 'a3', text: '3 – 4' },
      { id: 'a4', text: '5 и больше' },
    ],
  },
  {
    id: 'q2',
    text: 'Укажите ваш ориентировочный бюджет на одного человека',
    note: 'Бюджет указан для примерного расчета на стандартный тур 7–10 ночей.',
    answers: [
      { id: 'a1', text: 'Эконом (до 60 000 руб.)' },
      { id: 'a2', text: 'Комфорт (60 000 — 120 000 руб.)' },
      { id: 'a3', text: 'Премиум (120 000 — 200 000 руб.)' },
      { id: 'a4', text: 'Без четкого ограничения' },
    ],
  },
  {
    id: 'q3',
    text: 'Будут ли в поездке дети? Если да, то какого возраста?',
    answers: [
      { id: 'a1', text: 'Нет, только взрослые' },
      { id: 'a2', text: 'Да, с грудничком (до 2 лет)' },
      { id: 'a3', text: 'Да, с детьми дошкольного возраста (3–6 лет)' },
      { id: 'a4', text: 'Да, с детьми школьного возраста (7–12 лет)' },
      { id: 'a5', text: 'Да, с подростками (13+ лет)' },
    ],
  },
  {
    id: 'q4',
    text: 'Какое направление вас интересует?',
    answers: [
      { id: 'a1', text: 'Турция (Анталья, Кемер, Бодрум)' },
      { id: 'a2', text: 'Египет (Хургада, Шарм-эль-Шейх)' },
      { id: 'a3', text: 'ОАЭ (Дубай, Абу-Даби)' },
      { id: 'a4', text: 'Таиланд (Пхукет, Паттайя, Самуи)' },
      { id: 'a5', text: 'Европа (Испания, Италия, Франция, Греция)' },
      { id: 'a6', text: 'Азия (Вьетнам, Индонезия (Бали), Япония)' },
      { id: 'a7', text: 'Россия (Краснодарский край, Крым, Алтай)' },
      { id: 'a8', text: 'Нужна помощь в подборе' },
    ],
  },
  {
    id: 'q5',
    text: 'Какая категория отеля?',
    answers: [
      {
        id: 'a1',
        text: 'Эконом (3 звезды)',
        description: 'Главное — удобное расположение и чистота.',
      },
      {
        id: 'a2',
        text: 'Комфорт (4 звезды)',
        description:
          'Хороший сервис, собственный бассейн, питание "все включено".',
      },
      {
        id: 'a3',
        text: 'Премиум (5 звезд)',
        description:
          'Высокий уровень сервиса, просторные номера, высокий рейтинг.',
      },
      {
        id: 'a4',
        text: 'Роскошный отдых (5+ звезд / Luxury)',
        description: 'Виллы, бутик-отели, эксклюзивность.',
      },
      {
        id: 'a5',
        text: 'Апартаменты / Вилла',
        description: 'Самостоятельность, своя кухня и много пространства.',
      },
    ],
  },
];

const options = [
  { name: 'Telegram', label: 'Telegram' },
  { name: 'Whatsapp', label: 'Whatsapp' },
];

const { callAndHandle } = useRequest();

const currentQuestion = ref(0);

const contactData = ref({
  name: '',
  phone: '',
  target: '',
});

const questionAnswers = ref<Record<string, string>>({});

const currentQuestionInfo = computed(() => ({
  text: quizData[currentQuestion.value].text,
  note: quizData[currentQuestion.value].note,
}));

const currentQuestionId = computed(() => quizData[currentQuestion.value].id);

const currentQuestionAnswers = computed(
  () => quizData[currentQuestion.value].answers
);

const [isQuizCompleted, setQuizCompleted, unsetQuizCompleted] = useFlag();

const isCurrentQuestionAnswered = computed(
  () => !!questionAnswers.value[currentQuestionId.value]
);

const isFirstQuestion = computed(() => currentQuestion.value === 0);

const isLastQuestion = computed(
  () => currentQuestion.value === quizData.length - 1
);

const setAnswerQuestion = (id: string, value: string) => {
  questionAnswers.value[id] = value;
};

const nextQuestion = () => {
  currentQuestion.value++;
};

const prevQuestion = () => {
  if (isQuizCompleted.value) {
    unsetQuizCompleted();

    return;
  }

  currentQuestion.value--;
};

const submit = () => {
  const prepareAnswers = quizData
    .map((q, index) => {
      const answerId = questionAnswers.value[q.id];
      const answerText = q.answers.find(a => a.id === answerId)?.text;

      return `${index + 1}. ${q.text}: ${answerText}`;
    })
    .join('\n');

  const body = {
    ...contactData.value,
    comment: prepareAnswers,
  };

  callAndHandle({
    req: () => {
      return $appFetch('/form', {
        method: 'POST',
        body,
      });
    },
  });
};

const onNext = () => {
  if (isQuizCompleted.value) {
    submit();
  } else if (isLastQuestion.value) {
    setQuizCompleted();
  } else {
    nextQuestion();
  }
};
</script>

<template>
  <UiPopup
    v-model="show"
    class="quiz-tour"
  >
    <div class="quiz-tour__body">
      <div class="quiz-tour__header">
        <h2 class="quiz-tour__header-title">Привет, это Мишель из Турмир!</h2>

        <p class="quiz-tour__header-description">
          Ответьте на несколько вопросов, и я пришлю вам список лучших горящих
          туров в мессенджер!
        </p>
      </div>

      <div class="quiz-tour__quiz">
        <div class="quiz-tour__quiz-header">
          <template v-if="!isQuizCompleted">
            <h2 class="quiz-tour__quiz-header-title">
              {{ currentQuestionInfo.text }}
            </h2>

            <p class="quiz-tour__quiz-header-description">
              {{ currentQuestionInfo.note }}
            </p>
          </template>

          <template v-else>
            <h2 class="quiz-tour__quiz-header-title">Контактная информация</h2>
          </template>
        </div>

        <div class="quiz-tour__quiz-answers">
          <UiRadioGroup
            v-if="!isQuizCompleted"
            class="quiz-tour__quiz-answers-list"
            :model-value="questionAnswers[currentQuestionId]"
            :props="{
              value: 'id',
              label: 'text',
            }"
            :options="currentQuestionAnswers"
            @update:model-value="(v)=> setAnswerQuestion(currentQuestionId, v as string)"
          />

          <div
            v-else
            class="quiz-tour__quiz-submit"
          >
            <UiForm class="quiz-tour__quiz-form">
              <UiFormItem
                v-model="contactData.name"
                class="quiz-tour__quiz-form-field"
                placeholder="Ваше имя"
                size="large"
              />

              <UiFormItem class="quiz-tour__quiz-form-field">
                <ElSelect
                  v-model="contactData.target"
                  placeholder="Мессенджер для обратной связи"
                  size="large"
                  value-key="name"
                >
                  <ElOption
                    v-for="item in options"
                    :key="item.name"
                    :label="item.label"
                    :value="item.name"
                  />
                </ElSelect>
              </UiFormItem>

              <UiFormItem
                v-model="contactData.phone"
                class="quiz-tour__quiz-form-field"
                placeholder="Ваш телефон"
                size="large"
                type="tel"
                :input-props="{}"
              />
            </UiForm>
          </div>
        </div>

        <div class="quiz-tour__quiz-actions">
          <UiButton
            class="quiz-tour__quiz-actions-btn"
            text="Назад"
            theme="secondary"
            :disabled="isFirstQuestion"
            @click="prevQuestion"
          />

          <p
            v-if="!isQuizCompleted"
            class="quiz-tour__quiz__progress"
          >
            {{ currentQuestion + 1 }}/{{ quizData.length }}
          </p>

          <UiButton
            class="quiz-tour__quiz-actions-btn"
            :text="isQuizCompleted ? 'Отправить' : 'Далее'"
            :disabled="!isCurrentQuestionAnswered"
            @click="onNext"
          />
        </div>
      </div>
    </div>
  </UiPopup>
</template>

<style lang="scss" scoped>
:global(.quiz-tour.popup) {
  --el-dialog-margin-top: 10vh;
  --el-dialog-padding-primary: 0;
  --el-dialog-border-radius: 24px;
  --el-color-primary: #0a0b1e;

  padding: rem(50px);
  width: rem(700px);

  @include sm {
    width: calc(100vw - 24px);
    padding: rem(24px) rem(18px);
  }
}

.quiz-tour {
  &__body {
    display: flex;
    flex-direction: column;

    row-gap: rem(20px);
  }

  &__header {
    display: flex;
    flex-direction: column;

    row-gap: rem(12px);

    text-align: center;

    &-title {
      font-size: rem(28px);
      font-weight: $fw-bold;

      color: #2b3f5a;

      @include sm {
        font-size: rem(20px);

        margin-top: rem(16px);
      }
    }

    &-description {
      font-size: rem(20px);
      font-weight: $fw-medium;

      color: #808c9c;

      @include sm {
        font-size: rem(16px);
      }
    }
  }

  &__quiz {
    display: flex;
    flex-direction: column;

    row-gap: rem(20px);

    padding: rem(16px);

    border: rem(1px) solid #bbe9fb;
    border-radius: rem(18px);
    background-color: #e4f6fd;

    &-header {
      &-title {
        font-size: rem(20px);
        font-weight: $fw-bold;

        text-align: center;

        color: #2b3f5a;

        @include sm {
          font-size: rem(16px);
        }
      }
    }

    &-answers {
      &-list {
        display: flex;
        flex-direction: column;

        row-gap: rem(8px);

        &:deep(.el-radio) {
          --el-radio-font-size: #{rem(16px)};

          padding: rem(16px);

          border: rem(1px) solid #{$primary};
          border-radius: rem(8px);

          @include sm {
            --el-radio-font-size: #{rem(12px)};

            padding: rem(8px);
          }
        }
      }
    }

    &-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-btn {
        @include sm {
          padding: 10px 12px !important;
        }
      }
    }
  }
}
</style>
