<script setup lang="ts">
import { ADDRESS, PHONE, COMPANY } from '~/utils/dictionary/address';

defineOptions({
  name: 'LayoutFooter',
});

const contacts = [
  {
    icon: 'icon',
    label: 'Телефон для связи',
    value: PHONE.label,
  },
  {
    icon: 'icon',
    label: 'Электронная почта',
    value: COMPANY.mail,
  },
  {
    icon: 'icon',
    label: 'Адрес',
    value: ADDRESS.full(),
  },
];
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__contacts">
        <div class="footer__contacts-inner">
          <div
            v-for="{ icon, label, value } in contacts"
            class="footer__contacts-item"
          >
            <div class="footer__contacts-item-icon">
              {{ icon }}
            </div>

            <div class="footer__contacts-item-text">
              <p class="footer__contacts-item-value">
                {{ value }}
              </p>

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

        <UiButton
          class="footer__subscription-button"
          text="Подписаться"
          theme="secondary"
        />

        <UiIconPlane
          class="footer__subscription-icon footer__subscription-icon--after"
        />
      </div>

      <div class="footer__menu">
        <LayoutNavbar />
      </div>

      <div class="footer__copyright">
        ©{{ new Date().getFullYear() }} Travel Company. Все права защищены.
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

    &-inner {
      display: flex;
      align-items: center;

      padding: rem(38px) rem(48px);

      column-gap: rem(25px);

      box-shadow: 0px 6px 45px rgba(0, 0, 0, 0.06);
      border-radius: 36px;
      border: 1px solid #e6e6e6;

      background-color: #ffffff;
    }

    &-item {
      position: relative;

      display: flex;
      align-items: center;

      padding-left: rem(25px);

      column-gap: rem(16px);

      &-icon {
        width: rem(64px);
        height: rem(64px);
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
        content: '';
        width: 1px;
        height: 30px;
        background-color: black;
        opacity: 0.1;
        position: absolute;
        left: 0;
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

    &-title {
      max-width: rem(500px);

      text-align: center;
      font-size: rem(44px);
      font-weight: 800;
      line-height: rem(48px);
    }

    &-icon {
      position: absolute;

      width: rem(100px);
      height: rem(100px);

      &--before {
        left: 0;
      }

      &--after {
        right: 0;
        transform: rotate(270deg);
      }
    }
  }

  &__menu {
    width: 100%;

    margin-top: rem(90px);
  }

  &__copyright {
    margin-top: rem(90px);

    text-align: center;
    font-size: rem(18px);
    line-height: rem(30px);
    opacity: 0.6;
  }

  &__org {
    text-align: center;

    font-size: rem(18px);
    line-height: rem(30px);
    opacity: 0.6;
  }
}
</style>
