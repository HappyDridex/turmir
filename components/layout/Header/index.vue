<script setup lang="ts">
import { PHONE, SOCIALS } from '@/utils/dictionary/address';

defineOptions({
  name: 'LayoutHeader',
});

const [isMenuOpen, setMenuOpen, unsetMenuOpen] = useFlag();
const { setTourRequestOpen } = useTourRequestPopup();
</script>

<template>
  <header class="header">
    <div class="header__bg">
      <div class="header__bg-inner">
        <div class="header__bg-cloud header__bg-cloud--1" />
        <div class="header__bg-cloud header__bg-cloud--2" />
        <div class="header__bg-cloud header__bg-cloud--3" />
      </div>
    </div>

    <div class="header__inner">
      <NuxtLink
        class="header__logo"
        to="/"
      >
        <NuxtImg
          class="header__logo-pic"
          width="200"
          src="/_static/images/logo.png"
        />
      </NuxtLink>

      <div class="header__main">
        <div class="header__contacts">
          <NuxtLink
            :to="`tel:${PHONE.value}`"
            class="header__contacts-link"
            external
            target="_blank"
          >
            {{ PHONE.label }}
          </NuxtLink>

          <span class="header__contacts-address">
            Офис в г.Ялта: ул. Большевистская, 10,
            <br />
            ТЦ «Конфетти», 5 этаж
          </span>
        </div>

        <div class="header__socials">
          <ul class="header__socials-list">
            <li
              v-for="item in SOCIALS"
              :key="item.name"
              class="header__socials-list-item"
            >
              <NuxtLink
                :to="item.link"
                external
                target="_blank"
              >
                <UiIcon :name="item.icon" />
              </NuxtLink>
            </li>
          </ul>
        </div>

        <UiButton
          class="header__bid"
          text="Заявка на тур"
          theme="secondary"
          bold="semibold"
          @click="setTourRequestOpen"
        />

        <div class="header__phone">
          <NuxtLink
            :to="`tel:${PHONE.value}`"
            class="header__phone-link"
            external
            target="_blank"
          >
            <UiButtonNative class="header__phone-button">
              <UiIcon
                name="phone"
                size="small"
              />
            </UiButtonNative>
          </NuxtLink>
        </div>

        <UiButtonNative
          class="header__burger"
          @click="setMenuOpen"
        >
          <UiIcon
            name="burger-menu"
            size="big"
          />
        </UiButtonNative>
      </div>
    </div>

    <LayoutSidebar
      v-model="isMenuOpen"
      class="header__menu"
      @link:click="unsetMenuOpen"
    />
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    width: 100%;
    height: 656px;

    overflow: hidden;

    &-inner {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      border-radius: 0px 0px 50px 50px;
      background-color: $primary;
    }

    &-cloud {
      position: absolute;
      background-size: cover;
      pointer-events: none;

      &--1 {
        background-image: url('/_static/images/cloud-1.png');
        width: 300px;
        height: 76px;
        top: 36px;
        left: 25%;
      }

      &--2 {
        background-image: url('/_static/images/cloud-2.png');
        width: 333px;
        height: 116px;
        top: 151px;
        left: 0;
        transform: translateX(-50%);
      }

      &--3 {
        background-image: url('/_static/images/cloud-3.png');
        width: 342px;
        max-width: 100%;
        height: 117px;
        top: 159px;
        right: 0;
        transform: translateX(50%);
      }
    }
  }

  &__logo {
    width: rem(200px);
    height: auto;

    @include sm {
      width: rem(140px);
    }

    &-pic {
      filter: invert(1);
    }
  }

  &__inner {
    @include container;
    @include flex-space-between;

    position: relative;
    z-index: 1;
  }

  &__main {
    @include flex-space-between;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @include md {
      display: none;
    }

    &-link {
      font-size: rem(18px);
      font-weight: $fw-bold;
    }

    &-address {
      font-size: 15px;
      text-align: end;

      opacity: 0.5;
    }
  }

  &__socials {
    margin-left: rem(20px);

    @include md {
      display: none;
    }

    &-list {
      display: flex;
      align-items: center;
      column-gap: rem(20px);

      &-item {
        @include base-transition(transform);

        @include mouse-hover {
          transform: scale(1.2);
        }
      }
    }
  }

  &__bid {
    margin-left: rem(24px);

    @include md {
      display: none;
    }
  }

  &__phone {
    display: none;

    @include md {
      display: block;
    }

    &-button {
      padding: 10px;

      color: $txt-col-secondary;
      background-color: $bg-color-secondary;
      border-radius: 50%;
    }
  }

  &__burger {
    margin-left: rem(24px);
  }
}
</style>
