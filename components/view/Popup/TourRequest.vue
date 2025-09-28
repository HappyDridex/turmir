<script setup lang="ts">
defineOptions({
  name: 'ViewPopupTourRequest',
});

const show = defineModel<boolean>({
  required: false,
  default: false,
});

const { callAndHandle } = useRequest();

const form = reactive({
  name: '',
  phone: '',
  target: '',
  comment: '',
});

const options = [
  { name: 'Telegram', label: 'Telegram' },
  { name: 'Whatsapp', label: 'Whatsapp' },
];

function submitForm() {
  callAndHandle({
    req: () => {
      return $fetch('/form', {
        method: 'POST',
        body: form,
      });
    },
  });
}
</script>

<template>
  <UiPopup
    v-model="show"
    class="tour-request"
  >
    <div class="tour-request__body">
      <div class="tour-request__header">
        <h2 class="tour-request__header-title">Заявка на подбор тура</h2>
      </div>

      <UiForm class="tour-request__form">
        <UiFormItem
          v-model="form.name"
          class="tour-request__form-field"
          placeholder="Ваше имя"
          size="large"
        />

        <UiFormItem class="tour-request__form-field">
          <ElSelect
            v-model="form.target"
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
          v-model="form.phone"
          class="tour-request__form-field"
          placeholder="Моб. телефон"
          size="large"
        />

        <UiFormItem
          v-model="form.comment"
          class="tour-request__form-field"
          placeholder="Комментарий"
          :input-props="{
            type: 'textarea',
            autosize: {
              minRows: 4,
              maxRows: 4,
            },
          }"
        />

        <UiButton
          class="tour-request__form-submit"
          text="Отправить"
          theme="secondary"
          full
          @click="submitForm"
        />

        <div class="tour-request__form-politics">
          <p>
            Отправляя запрос, я выражаю согласие на обработку персональных
            данных и подтверждаю, что ознакомлен с политикой обработки
            персональных данных.
          </p>
        </div>
      </UiForm>
    </div>
  </UiPopup>
</template>

<style lang="scss" scoped>
:global(.tour-request.popup) {
  --el-dialog-margin-top: 10vh;
  --el-dialog-padding-primary: 0;
  --el-dialog-border-radius: 24px;
  --el-color-primary: #0a0b1e;

  padding: rem(50px);
  width: rem(500px);

  @include sm {
    width: calc(100vw - 24px);
    padding: rem(36px);
  }
}

.tour-request {
  &__header {
    text-align: center;

    letter-spacing: -0.02em;

    &-title {
      font-size: rem(28px);
      font-weight: $fw-bold;
      line-height: rem(34px);

      color: #2b3f5a;
    }

    &-description {
      font-size: rem(15px);
      font-weight: $fw-medium;
      line-height: rem(22px);

      color: #808c9c;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;

    row-gap: rem(30px);
  }

  &__form {
    display: flex;
    flex-direction: column;

    row-gap: rem(12px);

    &-field {
      margin: 0;
    }
  }
}
</style>
