<script setup lang="ts">
import filtersJson from '@/public/lottie/filters.json';
import beachJson from '@/public/lottie/beach.json';

defineOptions({
  name: 'ViewAboutAgent',
});

const { setTourRequestOpen } = useTourRequestPopup();

const agentServices = [
  {
    lottie: beachJson,
    text: 'Уже несколько лет я помогаю людям находить лучшие путешествия по всему миру. Для меня важно, чтобы каждый клиент чувствовал себя уверенно и спокойно на всех этапах поездки.',
  },
  {
    lottie: filtersJson,
    text: 'Я подберу тур именно под ваши интересы: будь то пляжный отдых, активные экскурсии или романтическое путешествие. Учитываю бюджет, предпочтения и даже самые мелкие детали — от удобного перелёта до уютного отеля.',
  },
];
</script>

<template>
  <section class="agent">
    <ViewCommonHeroTitle class="agent__title">
      <h2>Доверьте свой отдых нам</h2>
    </ViewCommonHeroTitle>

    <div class="agent__content">
      <div class="agent__pictures">
        <img src="/_static/images/agent.jpg" />
      </div>

      <div class="agent__description">
        <h2 class="agent__description-title">Привет! Я Мишель 👋</h2>

        <ul class="agent__description-list">
          <li
            v-for="service in agentServices"
            class="agent__description-list-item"
          >
            <ClientOnly>
              <UiLottie
                class="agent__description-list-item-img"
                :data="service.lottie"
              />
            </ClientOnly>

            <p>
              {{ service.text }}
            </p>
          </li>
        </ul>

        <UiButton
          class="agent__description-btn"
          text="Подобрать тур"
          @click="setTourRequestOpen"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.agent {
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: rem(48px);

  &__content {
    display: flex;
    align-items: center;

    column-gap: rem(20px);

    @include md {
    }
  }

  &__pictures {
    position: relative;

    width: 50%;

    padding-bottom: 47%;

    border-radius: rem(32px);

    overflow: hidden;

    @include md {
      display: none;
    }

    img {
      position: absolute;

      left: 0;
      top: 0;

      width: 100%;
      height: 100%;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;

    width: 50%;

    padding: rem(56px);

    row-gap: rem(40px);

    border-radius: 50px;
    background-color: #e4f6fd;

    @include md {
      width: 100%;
    }

    &-title {
      text-align: center;

      font-size: 32px;
      font-weight: $fw-extrabold;
    }

    &-list {
      display: flex;
      flex-direction: column;

      gap: rem(18px);

      &-item {
        display: flex;
        align-items: center;

        gap: rem(16px);

        font-weight: $fw-regular;
        font-size: rem(22px);

        @include sm {
          flex-direction: column;
        }

        &-img {
          max-width: rem(38px);
          max-height: rem(38px);
        }
      }
    }

    &-detail {
      font-weight: $fw-regular;
      font-size: rem(18px);
    }

    &-btn {
      margin-top: auto;

      align-self: flex-start;
      justify-self: flex-end;

      @include sm {
        width: 100%;
      }
    }
  }
}
</style>
