<script setup lang="ts">
defineOptions({
  name: 'LayoutFooter',
});

const cols = [
  [
    {
      text: 'Подбор тура',
      bold: true,
      link: '/',
    },
    {
      text: 'Горящие туры',
      bold: true,
      link: '/',
    },
  ],

  [
    {
      text: 'О компании',
      bold: true,
    },
    {
      text: 'О нас',
      link: '/',
    },
  ],
  [
    {
      text: 'Контакты',
      bold: true,
    },
    {
      text: 'Офис в г.Ялта: ул. Большевистская, 10, ТЦ «Конфетти», 5 этаж',
    },
    {
      text: '+7 (978) 316-85-30',
      link: 'tel:+79783168530',
    },
  ],
];
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__main">
        <UiIconPlane class="footer__main-icon footer__main-icon--left" />
        <UiIconPlane class="footer__main-icon footer__main-icon--right" />

        <h2 class="footer__title">
          Подпишитесь на нашу <br />
          рассылку
        </h2>

        <div class="footer__subscribe">
          <UiButton
            class="footer__subscribe-btn"
            text="Подписаться"
            theme="secondary"
          />
        </div>
      </div>

      <nav class="footer__nav">
        <div
          v-for="(col, idx) in cols"
          :key="idx"
          class="footer__nav-col"
        >
          <div
            v-for="({ bold, link, text }, idx) in col"
            :key="idx"
            class="footer__nav-row"
          >
            <NuxtLink
              v-if="link"
              class="footer__nav-row-item"
              :to="link"
              :class="{ bold }"
            >
              {{ text }}
            </NuxtLink>

            <span
              v-else
              class="footer__nav-row-item"
              :class="{ bold: bold }"
            >
              {{ text }}
            </span>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  border-radius: 50px 50px 0px 0px;
  background-color: $primary;

  &__inner {
    @include container;

    padding-top: rem(164px);
  }

  &__main {
    position: relative;

    &-icon {
      position: absolute;
      top: 0;

      width: rem(100px);
      height: rem(100px);

      &--left {
        left: 0;
      }

      &--right {
        right: 0;
      }
    }
  }

  &__title {
    font-size: 44px;
    font-weight: 800;

    text-align: center;
  }

  &__subscribe {
    width: fit-content;
    margin: 30px auto 0;

    &-btn {
      padding: rem(16px) rem(24px) !important;

      &:deep(.base-button__text) {
        font-size: 18px !important;
        font-weight: 500;
      }
    }
  }

  &__nav {
    display: flex;
    justify-content: space-between;

    margin-top: rem(90px);

    &-col {
      display: flex;
      flex-direction: column;
      flex: 1;
      row-gap: 40px;

      padding-left: 20px;
      padding-right: 20px;
    }

    &-row {
      &-item {
        font-size: 22px !important;

        &.bold {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
