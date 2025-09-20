<script setup lang="ts">
import type { JSX } from 'vue/jsx-runtime';
import type { RouteLocationRaw } from 'vue-router';

type NavbarItem = {
  text: string;
  to?: RouteLocationRaw;
  title?: boolean;
  bold?: boolean;
  attrs?: JSX.IntrinsicElements['a'];
};

interface Props {
  items: NavbarItem[];
  expandable?: boolean;
}

defineOptions({
  name: 'LayoutNavbarList',
});

const { items = [], expandable } = defineProps<Props>();

const emit = defineEmits<{
  'link:click': [];
}>();

const [isExpand, _, __, toggleExpand] = useFlag();

const header = computed(() => items.find(item => item.title));

const resolvedItems = computed(() => {
  if (!expandable) {
    return items;
  }

  return items.filter(item => !item.title);
});
</script>

<template>
  <div class="navbar-list">
    <ul class="navbar-list__inner">
      <li
        v-if="expandable"
        class="navbar-list__header"
      >
        <p
          class="navbar-list__header-title"
          :class="{
            bold: header?.bold,
          }"
          @click="toggleExpand"
        >
          {{ header?.text }}
        </p>

        <UiButtonNative
          class="navbar-list__header-expand"
          @click="toggleExpand"
        >
          <UiIcon
            class="navbar-list__header-expand-icon"
            :name="!isExpand ? 'chevron-down' : 'chevron-up'"
          />
        </UiButtonNative>
      </li>

      <template v-if="!expandable ? true : isExpand">
        <ul class="navbar-list__submenu">
          <li
            v-for="{ text, to, bold, attrs } in resolvedItems"
            :key="text"
            class="navbar-list__submenu-item"
          >
            <NuxtLink
              class="navbar-list__link"
              :class="{
                bold,
              }"
              :to="to"
              v-bind="attrs"
              @click="emit('link:click')"
            >
              {{ text }}
            </NuxtLink>
          </li>
        </ul>
      </template>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.navbar-list {
  &__inner {
    display: flex;
    flex-direction: column;
  }

  &__header {
    display: flex;

    column-gap: rem(10px);

    &-title {
      cursor: pointer;
    }

    &-expand {
      &-icon {
        width: rem(12px);
      }
    }
  }

  &__submenu {
    display: flex;
    flex-direction: column;

    row-gap: rem(40px);
  }

  &__link {
    font-size: rem(20px);
    line-height: rem(30px);

    opacity: 0.8;

    &.bold {
      font-size: rem(22px);
      font-weight: 600;
    }
  }
}
</style>
