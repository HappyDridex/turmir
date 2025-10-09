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
      <div class="home-intro__header-icon">
        <UiIconPlane class="home-intro__header-icon-pic" />
      </div>

      <div class="home-intro__header-text">
        <h1 class="home-intro__header-text-title">
          Все
          <span class="home-intro__header-text-title--accent">
            путешествия
          </span>

          <br class="home-intro__header-text-title-br" />

          на одном сайте
        </h1>

        <p class="home-intro__header-text-comment">
          Онлайн поиск туров по 80 туроператорам
        </p>
      </div>

      <div class="home-intro__header-icon">
        <UiIconPlane class="home-intro__header-icon-pic rotate" />
      </div>
    </header>

    <ClientOnly>
      <div class="home-intro__module">
        <div
          style="width: 100%"
          data-sletat-module-id="b941e824-130a-4e3f-88aa-3ed1af929b82"
        />
      </div>
    </ClientOnly>

    <div class="home-intro__main">
      <ul class="home-intro__steps">
        <li
          v-for="step in STEPS"
          :key="step.img"
          class="home-intro__steps-item"
        >
          <div class="home-intro__steps-item-inner">
            <UiLottie
              class="home-intro__steps-item-img"
              :data="step.lottie"
            />

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
    @include flex-space-between;

    width: 100%;

    &-icon {
      &-pic {
        width: rem(100px);
        height: rem(100px);

        @include md {
          width: rem(75px);
          height: rem(75px);
        }

        @include sm {
          width: 10vw;
          height: auto;
        }

        &.rotate {
          transform: rotate(270deg);
        }
      }
    }

    &-text {
      &-title {
        font-size: rem(48px);
        font-weight: $fw-extrabold;

        text-align: center;

        @include md {
          font-size: rem(32px);
        }

        &--accent {
          display: inline-flex;
          justify-content: center;
          align-items: center;

          padding: 0 10px;

          background: rgba(255, 255, 255, 0.7);
          border-radius: 50px;
        }

        &-br {
          display: none;

          @include sm {
            display: block;
          }
        }
      }

      &-comment {
        font-size: rem(20px);

        width: fit-content;
        margin: rem(12px) auto 0;

        text-align: center;

        @include md {
          font-size: rem(18px);
        }
      }
    }
  }

  &__module {
    width: 100%;

    @include sm {
      overflow-x: hidden;
    }
  }

  &__main {
    $y-offset: 114px;

    width: 100%;
    padding-top: calc($y-offset + 46px);
    margin-top: (-$y-offset);

    border-radius: 50px 50px 0 0;
    background-color: $bg-color-primary;

    @include md {
      align-self: stretch;

      width: auto;
      padding-top: calc($y-offset + 20px);
      margin-left: -$container-padding-x-tablet;
      margin-right: -$container-padding-x-tablet;
    }
  }

  &__steps {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 846px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 50px;

    @include md {
      flex-direction: column;
      align-items: flex-start;
      row-gap: rem(10px);

      max-width: unset;
      width: auto;
      margin: 0;
      margin-left: 20px;
      margin-right: 20px;
      padding: rem(34px) rem(24px);

      box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.12);
      border-radius: 36px;
    }

    &-item {
      position: relative;

      width: 25%;

      @include md {
        width: auto;
      }

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

        @include md {
          content: none;
        }
      }

      &-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        @include md {
          flex-direction: row;
        }
      }

      &-img {
        width: 52px;
        height: 52px;

        @include md {
          width: 46px;
          height: 46px;
        }
      }

      &-text {
        font-size: rem(18px);
        text-align: center;

        @include md {
          text-align: initial;
        }
      }
    }
  }
}
</style>
