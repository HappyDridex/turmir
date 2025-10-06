<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

defineOptions({
  name: 'ViewCommonCookieNotification',
});

const isCookieAccepted = useLocalStorage('cookie-accept', false);

function onCookieAccept() {
  isCookieAccepted.value = true;
}
</script>

<template>
  <Transition name="fade">
    <div
      v-show="!isCookieAccepted"
      class="cookie-notification"
    >
      <div class="cookie-notification__inner">
        <div class="cookie-notification__info">
          <UiIcon
            class="cookie-notification__icon"
            name="cookie"
          />

          <p class="cookie-notification__text">
            Мы используем cookie-файлы для лучшей работы сайта.
          </p>
        </div>

        <UiButton
          class="cookie-notification__action"
          text="Хорошо"
          theme="transparent"
          @click="onCookieAccept"
        />
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.cookie-notification {
  @include container;

  position: fixed;
  left: 0;
  right: 0;
  bottom: rem(12px);
  z-index: $z-index-cookie-notification;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    column-gap: rem(22px);

    margin: 0 rem(12px);
    padding: rem(24px);

    background-color: $primary;

    border-radius: rem(12px);

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);

    @include md {
      padding: rem(18px);
    }

    @include sm {
      padding: rem(14px);
    }
  }

  &__info {
    display: flex;
    align-items: center;

    column-gap: rem(12px);
  }

  &__icon {
    width: rem(32px);
    height: rem(32px);

    @include sm {
      width: rem(24px);
      height: rem(24px);
    }
  }

  &__text {
    font-size: rem(22px);

    @include md {
      font-size: rem(18px);
    }

    @include sm {
      font-size: rem(14px);
    }
  }

  &__action {
    padding: rem(16px);

    border-radius: 1rem;

    &:deep(.base-button__text) {
      font-size: rem(22px);

      @include md {
        font-size: rem(18px);
      }

      @include sm {
        font-size: rem(14px);
      }
    }
  }
}
</style>
