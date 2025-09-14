<script setup lang="ts">
defineOptions({
  name: 'UiFormRow',
});

type TSpacing = 'small' | 'medium';

const { spacing = 'small' } = defineProps<{
  spacing?: TSpacing;
}>();

const classes = [spacing];
</script>

<template>
  <div
    class="form-row"
    :class="classes"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.form-row {
  display: flex;
  align-items: center;
  column-gap: rem(8px);

  &.small {
    @include y-margin-items(18px);

    @include md {
      @include y-margin-items(12px);
    }

    @include sm {
      @include y-margin-items(8px);
    }
  }

  &.medium {
    @include y-margin-items(18px);

    @include md {
      @include y-margin-items(18px);
    }

    @include sm {
      @include y-margin-items(12px);
    }
  }
}
</style>
