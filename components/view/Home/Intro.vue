<script setup lang="ts">
import filtersJson from '@/public/lottie/filters.json';
import cardJson from '@/public/lottie/card.json';
import clockJson from '@/public/lottie/clock.json';
import beachJson from '@/public/lottie/beach.json';

defineOptions({
  name: 'ViewHomeIntro',
});

const STEPS = [
  {
    text: 'Выбрать параметры тура и оформить заказ',
    img: '/_static/images/guide-1.png',
    lottie: filtersJson,
  },
  {
    text: 'Оплатить онлайн или в агентстве',
    img: '/_static/images/guide-2.png',
    lottie: cardJson,
  },
  {
    text: 'Получить подтверждение и комплект документов',
    img: '/_static/images/guide-3.png',
    lottie: clockJson,
  },
  {
    text: 'Собрать чемодан и насладиться отдыхом',
    img: '/_static/images/guide-4.png',
    lottie: beachJson,
  },
];
</script>

<template>
  <section class="home-intro">
    <header class="home-intro__header">
      <ViewCommonHeroTitle>
        <div class="home-intro__header-text">
          <h1 class="home-intro__header-text-title">
            Все
            <span class="home-intro__header-text-title--accent">
              путешествия
            </span>

            на одном сайте
          </h1>

          <p class="home-intro__header-text-comment">
            Онлайн поиск туров по 80 туроператорам
          </p>
        </div>
      </ViewCommonHeroTitle>
    </header>

    <ClientOnly>
      <div
        style="width: 100%"
        data-sletat-module-id="b941e824-130a-4e3f-88aa-3ed1af929b82"
      />
    </ClientOnly>

    <div class="home-intro__main">
      <ul class="home-intro__steps">
        <li
          v-for="step in STEPS"
          :key="step.img"
          class="home-intro__steps-item"
        >
          <div class="home-intro__steps-item-inner">
            <ClientOnly>
              <UiLottie
                class="home-intro__steps-item-img"
                :data="step.lottie"
              />
            </ClientOnly>
            <!-- <NuxtImg
              class="home-intro__steps-item-img"
              :src="step.img"
            /> -->

            <span class="home-intro__steps-item-text">
              {{ step.text }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-intro {
  @include flex-col-center;

  &__header {
    display: flex;
    align-items: center;

    &-text {
      &-title {
        font-size: rem(48px);
        font-weight: $fw-extrabold;

        text-align: center;

        &--accent {
          display: inline-flex;
          justify-content: center;
          align-items: center;

          padding: 0 10px;

          background: rgba(255, 255, 255, 0.7);
          border-radius: 50px;
        }
      }

      &-comment {
        font-size: rem(20px);

        width: fit-content;
        margin: rem(12px) auto 0;
      }
    }
  }

  &__main {
    $y-offset: 114px;

    width: 100%;
    padding-top: calc($y-offset + 46px);

    margin-top: (-$y-offset);

    border-radius: 50px 50px 0 0;
    background-color: $bg-color-primary;
  }

  &__steps {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 846px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 50px;

    &-item {
      position: relative;

      width: 25%;

      &:not(:first-child)::before {
        content: '';
        display: block;
        width: 1px;
        height: 30px;
        background-color: #0a0b1e;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.14;
      }

      &-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 16px;
      }

      &-img {
        width: 52px;
        height: 52px;
      }

      &-text {
        text-align: center;
      }
    }
  }
}
</style>
