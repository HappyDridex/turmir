<script setup lang="ts">
import { TG_FEED_CHANNEL_LINK } from '@/utils/dictionary/address';
import planeJson from '@/public/lottie/plane.json';

defineOptions({
  name: 'ViewHomeSubscribe',
});
</script>

<template>
  <section class="home-subscribe">
    <div class="home-subscribe__inner">
      <div class="home-subscribe__image">
        <img
          class="home-subscribe__image-pic"
          src="/_static/images/palms-and-sun.png"
          alt="Пальмы и солнце"
        />
      </div>

      <div class="home-subscribe__main">
        <div class="home-subscribe__main-inner">
          <div class="home-subscribe__main-info">
            <h2 class="home-subscribe__main-info-title">
              Подключись к ленте горящих туров
            </h2>

            <NuxtLink
              :to="TG_FEED_CHANNEL_LINK"
              external
              target="_blank"
            >
              <UiButton
                class="home-subscribe__main-info-button"
                tag="div"
                text="Telegram"
                theme="secondary"
              >
                <template #pre>
                  <UiIcon
                    name="tg-circled"
                    size="big"
                  />
                </template>
              </UiButton>
            </NuxtLink>
          </div>

          <div class="home-subscribe__main-mocks">
            <div
              v-for="item in 2"
              :key="item"
              class="home-subscribe__main-mocks-item"
            >
              <div class="home-subscribe__main-mocks-item-company">
                <NuxtImg
                  class="home-subscribe__main-mocks-item-company-pic"
                  src="/_static/images/logo.png"
                />

                <UiLottie
                  class="home-subscribe__main-mocks-item-lottie"
                  :class="`home-subscribe__main-mocks-item-lottie--${item}`"
                  :data="planeJson"
                />
              </div>

              <NuxtImg
                class="home-subscribe__main-mocks-item-pic"
                src="/_static/images/mockup.png"
                alt="Мокап телефона"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-subscribe {
  &__image {
    display: flex;
    justify-content: center;
    height: 540px;

    @include md {
      height: 440px;
    }

    &-pic {
      width: 997px;
      height: 665px;

      object-fit: contain;

      @include md {
        width: 552px;
        height: auto;
      }
    }
  }

  &__main {
    position: relative;
    z-index: 1;

    min-height: 310px;

    border-radius: 50px;
    background-color: $primary;

    @include sm {
      margin-left: -$container-padding-x-tablet;
      margin-right: -$container-padding-x-tablet;

      border-radius: 36px;
    }

    &-inner {
      padding: rem(64px) rem(60px);

      @include md {
        padding: rem(50px) rem(20px) 0;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: rem(32px);

      padding-right: calc(50% + 60px);

      @include md {
        row-gap: rem(20px);
        align-items: center;

        padding-right: 0;
      }

      &-title {
        font-weight: 800;
        font-size: 42px;

        text-align: center;

        @include md {
          font-size: 28px;
        }
      }

      &-button {
        min-width: 178px;

        @include sm {
          padding-top: rem(12px) !important;
          padding-bottom: rem(12px) !important;
        }

        &:deep(.base-button__text) {
          font-size: 20px;
          font-weight: $fw-medium;
        }
      }
    }

    &-mocks {
      overflow: hidden;
      position: absolute;
      bottom: 0;
      right: 60px;

      display: flex;

      height: 500px;

      @include md {
        position: static;

        display: flex;

        max-width: 320px;
        height: fit-content;
        margin-left: auto;
        margin-right: auto;
      }

      &-item {
        position: relative;

        @include md {
          flex: 1;

          height: fit-content;
        }

        &:first-child {
          z-index: 2;

          transform: translate(30px, 140px);

          @include md {
            transform: translate(10px, 130px);
          }
        }

        &:last-child {
          z-index: 3;

          transform: translateY(60px);

          @include md {
            transform: translate(-10px, 40px);
          }
        }

        &-pic {
          @include object-contain-full;

          position: relative;
        }

        &-company {
          @include flex-col-center;
          justify-content: center;

          position: absolute;
          inset: 10px;
          border-radius: 32px;

          background-color: $bg-color-primary;

          @include md {
            border-radius: 18px;
            inset: 4px;
          }

          &-pic {
            width: 80%;
            height: auto;

            transform: translateY(-20px);

            filter: invert(1);
          }
        }

        &-lottie {
          position: absolute;
          bottom: 20%;

          &--2 {
            bottom: 10%;
          }
        }
      }
    }
  }
}
</style>
