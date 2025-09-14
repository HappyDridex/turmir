<script setup lang="ts">
defineOptions({
  name: 'UiButton',
});

const {
  text,
  theme = 'primary',
  tag = undefined,
  bold = 'regular',
} = defineProps<{
  text: string;
  theme?: 'primary' | 'secondary' | 'transparent';
  full?: boolean;
  tag?: string;
  loading?: boolean;
  bold?: 'regular' | 'medium' | 'semibold' | 'bold';
}>();

const UiButtonNative = resolveComponent('UiButtonNative');

const buttonTag = tag ?? UiButtonNative;
</script>

<template>
  <component
    :is="buttonTag"
    class="base-button"
    :class="[theme, { full, loading }]"
  >
    <slot name="pre" />

    <span
      class="base-button__text"
      :class="bold"
    >
      {{ text }}
    </span>

    <slot name="post" />
  </component>
</template>

<style scoped lang="scss">
.base-button {
  @include base-transition;

  line-height: 1;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: rem(12px);

  padding: rem(14px) rem(20px);

  text-align: center;

  border-radius: rem(36px);

  &:active {
    transform: scale(0.95);
  }

  @include sm {
    padding: rem(24px);
  }

  &.primary {
    color: $txt-col-primary;
    background-color: $primary;

    @include mouse-hover {
      color: $txt-col-primary;
      background-color: $primary;
    }

    &:active {
      color: $txt-col-primary;
      background-color: $primary;
    }
  }

  &.secondary {
    color: $txt-col-secondary;
    background-color: $bg-color-secondary;

    @include mouse-hover {
      color: $txt-col-secondary;
      background-color: $bg-color-secondary;
    }

    &:active {
      color: $txt-col-secondary;
      background-color: $bg-color-secondary;
    }
  }

  &.transparent {
    @include border(1px, $border-col-primary);

    color: $txt-col-primary;
    background-color: transparent;

    @include mouse-hover {
      color: $txt-col-primary;
      background-color: transparent;
    }

    &:active {
      color: $txt-col-primary;
      background-color: transparent;
    }
  }

  &.loading {
    @include loader;
  }

  &.loading & {
    &__text {
      opacity: 0;
    }
  }

  &.full {
    width: 100%;
  }

  &__text {
    font-size: rem(18px);

    @include md {
      font-size: rem(18px);
    }

    @include sm {
      font-size: rem(18px);
    }

    &.regular {
      font-weight: $fw-regular;
    }

    &.medium {
      font-weight: $fw-medium;
    }

    &.semibold {
      font-weight: $fw-semibold;
    }

    &.bold {
      font-weight: $fw-bold;
    }
  }
}
</style>
