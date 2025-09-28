<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import type { AnchorHTMLAttributes } from 'vue';

type NavbarItem = {
  text: string;
  to?: RouteLocationRaw;
  title?: boolean;
  bold?: boolean;
  attrs?: AnchorHTMLAttributes;
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

const NuxtLink = resolveComponent('NuxtLink');

const [isExpand, _, __, toggleExpand] = useFlag();

const header = computed(() => items.find(item => item.title));

const resolvedItems = computed(() => {
  if (!expandable) {
    return items;
  }

  return items.filter(({ title }) => !title);
});
</script>

<template>
  <div class="navbar-list">
    <ul class="navbar-list__inner">
      <li
        v-if="expandable"
        class="navbar-list__header"
        tabindex="0"
        @click="toggleExpand"
      >
        <p
          class="navbar-list__header-title"
          :class="{
            bold: header?.bold,
          }"
        >
          {{ header?.text }}
        </p>

        <UiButtonNative class="navbar-list__header-expand">
          <UiIcon
            class="navbar-list__header-expand-icon"
            :name="!isExpand ? 'chevron-down' : 'chevron-up'"
          />
        </UiButtonNative>
      </li>

      <Transition name="height-grow">
        <li
          v-show="!expandable || isExpand"
          class="navbar-list__wrap"
        >
          <ul class="navbar-list__submenu">
            <li
              v-for="{ text, to, bold, attrs } in resolvedItems"
              :key="text"
              class="navbar-list__submenu-item"
            >
              <component
                :is="to || attrs?.href ? NuxtLink : 'p'"
                class="navbar-list__link"
                :class="{
                  bold,
                }"
                :to="to"
                v-bind="attrs"
                @click="emit('link:click')"
              >
                {{ text }}
              </component>
            </li>
          </ul>
        </li>
      </Transition>
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

    user-select: none;

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

    white-space: pre-line;

    opacity: 0.8;

    &.bold {
      font-size: rem(22px);
      font-weight: 600;
    }
  }
}
</style>
