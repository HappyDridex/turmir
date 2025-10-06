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

const about = computed(() => [
  {
    text: 'О нас',
    to: {
      name: 'about',
    },
    bold: true,
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
    key: 'about',
    routes: about.value,
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
      justify-content: space-evenly;

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
