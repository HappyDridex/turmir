<script setup lang="ts">
import {
  ADDRESS,
  PHONE,
  COMPANY,
  TG_FEED_CHANNEL_LINK,
} from '~/utils/dictionary/address';

defineOptions({
  name: 'LayoutFooter',
});

const NuxtLink = resolveComponent('NuxtLink');

const contacts = [
  {
    icon: 'phone',
    label: 'Телефон для связи',
    valueLabel: PHONE.label,
    value: `tel:${PHONE.value}`,
    isLink: true,
  },
  {
    icon: 'email',
    label: 'Электронная почта',
    isLink: true,
    valueLabel: COMPANY.mail,
    value: `mailto:${COMPANY.mail}`,
  },
  {
    icon: 'geo',
    label: 'Адрес',
    valueLabel: ADDRESS.full(),
  },
];
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__contacts">
        <div class="footer__contacts-inner">
          <div
            v-for="{ icon, label, valueLabel, value, isLink } in contacts"
            :key="label"
            class="footer__contacts-item"
          >
            <div class="footer__contacts-item-icon">
              <div class="footer__contacts-item-icon-inner">
                <UiIcon :name="icon" />
              </div>
            </div>

            <div class="footer__contacts-item-text">
              <component
                :is="isLink ? NuxtLink : 'span'"
                class="footer__contacts-item-value"
                :to="value"
                external
                target="_blank"
              >
                {{ valueLabel }}
              </component>

              <p class="footer__contacts-item-label">
                {{ label }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__subscription">
        <UiIconPlane
          class="footer__subscription-icon footer__subscription-icon--before"
        />

        <h2 class="footer__subscription-title">Подпишитесь на нашу рассылку</h2>

        <NuxtLink
          :to="TG_FEED_CHANNEL_LINK"
          external
          target="_blank"
        >
          <UiButton
            class="footer__subscription-button"
            text="Подписаться"
            theme="secondary"
          />
        </NuxtLink>

        <UiIconPlane
          class="footer__subscription-icon footer__subscription-icon--after"
        />
      </div>

      <div class="footer__menu">
        <LayoutNavbar />
      </div>

      <div class="footer__copyright">
        ©{{ new Date().getFullYear() }} ООО "СПКА". Все права защищены.
      </div>

      <div class="footer__org">
        <p class="footer__org-personal">
          Положение об обработке персональных данных
        </p>

        <p class="footer__org-politics">Политика конфиденциальности</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  border-radius: rem(100px) rem(100px) 0 0;

  background-color: $primary;

  &__inner {
    @include container;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
    padding: rem(160px) rem(20px) rem(35px);
  }

  &__contacts {
    position: absolute;
    top: 0;
    transform: translateY(-50%);

    max-width: rem(1100px);
    padding: 0 rem(20px);

    @include md {
      max-width: unset;
      width: 100%;
    }

    &-inner {
      display: flex;
      align-items: center;

      padding: rem(38px) rem(48px);

      column-gap: rem(25px);

      box-shadow: 0px 6px 45px rgba(0, 0, 0, 0.06);
      border-radius: 36px;
      border: 1px solid #e6e6e6;

      background-color: #ffffff;

      @include md {
        flex-direction: column;
        align-items: flex-start;

        width: 100%;
        padding: 22px;
      }
    }

    &-item {
      position: relative;

      display: flex;
      align-items: center;
      flex: 1;

      padding-left: rem(25px);

      column-gap: rem(16px);

      &-icon {
        flex-shrink: 0;

        width: rem(64px);
        height: rem(64px);
        padding: 10px;

        &-inner {
          @include flex-all-center;

          width: 100%;
          height: 100%;

          border-radius: 50%;
          background-color: $primary;
        }
      }

      &-value {
        font-size: rem(18px);
        font-weight: 600;
        line-height: rem(25px);
      }

      &-label {
        margin-top: rem(2px);

        font-size: rem(16px);
        line-height: rem(20px);

        opacity: 0.6;
      }

      &:not(:first-child)::before {
        position: absolute;
        left: 0;

        content: '';

        width: 1px;
        height: 30px;

        background-color: black;
        opacity: 0.1;

        @include md {
          content: none;
        }
      }
    }
  }

  &__subscription {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: rem(1160px);

    row-gap: rem(30px);

    @include md {
      row-gap: rem(16px);
    }

    &-title {
      font-size: rem(44px);
      font-weight: 800;
      line-height: rem(48px);

      max-width: rem(500px);

      text-align: center;

      @include md {
        font-size: rem(24px);
      }

      @include sm {
        font-size: rem(20px);
      }
    }

    &-icon {
      position: absolute;

      width: rem(100px);
      height: rem(100px);

      @include md {
        width: rem(75px);
        height: rem(75px);
      }

      &--before {
        left: 0;
      }

      &--after {
        right: 0;
        transform: rotate(270deg);
      }
    }

    &-button {
      @include sm {
        padding-top: 14px !important;
        padding-bottom: 14px !important;
      }
    }
  }

  &__menu {
    width: 100%;

    margin-top: rem(90px);

    @include md {
      margin-top: rem(30px);

      &:deep(.navbar__inner) {
        flex-wrap: wrap;
        gap: (30px);
      }

      &:deep(.navbar-list) {
        width: calc(50% - 30px / 2);
      }

      &:deep(.navbar-list__submenu) {
        row-gap: rem(16px);
      }

      &:deep(.navbar-list__link) {
        font-size: rem(16px);
      }
    }
  }

  &__copyright {
    margin-top: rem(90px);

    text-align: center;
    font-size: rem(18px);
    line-height: rem(30px);
    opacity: 0.6;

    @include md {
      font-size: 14px;

      width: 100%;
      margin-top: rem(30px);
    }
  }

  &__org {
    font-size: rem(18px);
    line-height: rem(30px);

    margin-top: rem(16px);

    opacity: 0.6;
    text-align: center;
  }
}
</style>
