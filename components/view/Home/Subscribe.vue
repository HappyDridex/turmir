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
                  src="/_static\images\logo.png"
                />

                <ClientOnly>
                  <UiLottie
                    class="home-subscribe__main-mocks-item-lottie"
                    :class="`home-subscribe__main-mocks-item-lottie--${item}`"
                    :data="planeJson"
                  />
                </ClientOnly>
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
  &__inner {
    overflow: hidden;
  }

  &__image {
    display: flex;
    justify-content: center;
    height: 540px;

    &-pic {
      width: 997px;
      height: 665px;
    }
  }

  &__main {
    position: relative;
    z-index: 1;

    min-height: 309px;

    border-radius: 50px;
    background-color: $primary;

    &-inner {
      padding: rem(64px) rem(60px);
    }

    &-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: rem(32px);

      padding-right: calc(50% + 60px);

      &-title {
        font-weight: 800;
        font-size: 42px;
      }

      &-button {
        min-width: 178px;

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

      width: calc(40%);
      height: 500px;

      &-item {
        position: relative;

        &:first-child {
          z-index: 2;

          transform: translate(30px, 140px);
        }

        &:last-child {
          z-index: 3;
          transform: translateY(60px);
        }

        &-pic {
          @include object-contain-full;
        }

        &-company {
          @include flex-col-center;
          justify-content: center;

          position: absolute;
          inset: 10px;
          border-radius: 32px;

          background-color: $bg-color-primary;

          &-pic {
            width: 80%;
            height: auto;

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
