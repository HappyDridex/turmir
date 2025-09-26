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

      <ViewCommonHeroTitle class="footer__subscription">
        <div class="footer__subscription-inner">
          <h2 class="footer__subscription-title">
            Подпишитесь на нашу рассылку
          </h2>

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
        </div>
      </ViewCommonHeroTitle>

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
    &-inner {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 0 rem(180px);

      gap: rem(15px);
    }

    &-title {
      max-width: rem(500px);
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
