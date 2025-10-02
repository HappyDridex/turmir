<script setup lang="ts">
import { ADDRESS, PHONE, COMPANY } from '~/utils/dictionary/address';

defineOptions({
  name: 'LayoutNavbar',
});

const { type = 'horizontal' } = defineProps<{
  type?: 'horizontal' | 'vertical';
}>();

const emit = defineEmits<{
  'link:click': [];
}>();

const isVertical = computed(() => type === 'vertical');

const main = [
  {
    text: 'Подбор тура',
    bold: true,
  },
  {
    text: 'Горящие туры',
    bold: true,
  },
  {
    text: 'Минимальные цены',
    bold: true,
  },
  {
    text: 'Страны',
    bold: true,
  },
  {
    text: 'Календарь туров',
    bold: true,
  },
];

const services = computed(() => [
  {
    text: 'Наши услуги',
    bold: true,
    title: isVertical.value,
  },
  {
    text: 'Авиабилеты',
  },
  {
    text: 'Визы',
  },
  {
    text: 'Круизы',
  },
  {
    text: 'Подбор отеля',
  },
]);

const about = computed(() => [
  {
    text: 'О компании',
    bold: true,
    title: isVertical.value,
  },
  {
    text: 'О нас',
    to: {
      name: 'about',
    },
  },
  {
    text: 'Команда',
  },
]);

const contacts = [
  {
    text: 'Контакты',
    bold: true,
  },
  {
    text: ADDRESS.full(),
  },
  {
    text: PHONE.label,
    bold: false,
    attrs: {
      href: `tel:${PHONE.value}`,
    },
  },
  {
    text: COMPANY.mail,
    attrs: {
      href: `mailto:${COMPANY.mail}`,
    },
  },
];

const allSection = computed(() => [
  {
    key: 'main',
    routes: main,
  },
  {
    key: 'services',
    routes: services.value,
    expandable: isVertical.value,
  },
  {
    key: 'about',
    routes: about.value,
    expandable: isVertical.value,
  },
  {
    key: 'contacts',
    routes: contacts,
  },
]);
</script>

<template>
  <div class="navbar">
    <nav
      class="navbar__inner"
      :class="[type]"
    >
      <LayoutNavbarList
        v-for="section in allSection"
        :key="section.key"
        class="navbar__section"
        :class="[section.key]"
        :items="section.routes"
        :expandable="section.expandable"
        @link:click="emit('link:click')"
      />
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: column;

  min-height: 0;

  &__inner {
    display: flex;
    overflow-y: auto;
    padding: 2px;

    &.horizontal {
      flex-wrap: wrap;
      justify-content: space-between;

      .navbar__section {
        padding: 0 rem(20px);
      }
    }

    &.vertical {
      flex-wrap: nowrap;
      flex-direction: column;

      row-gap: rem(25px);

      :deep(.navbar__section) {
        .navbar-list {
          &__inner {
            row-gap: rem(15px);
          }

          &__header {
            &-title {
              font-size: rem(18px);
              font-weight: 600;
              line-height: rem(25px);
            }
          }

          &__submenu {
            row-gap: rem(15px);
          }

          &__link {
            opacity: 1;
            font-size: rem(18px);
            line-height: rem(25px);
          }
        }
      }

      :deep(.navbar__section.main) {
        .navbar-list {
          &__submenu {
            row-gap: rem(25px);
          }
        }
      }
    }
  }
}
</style>
