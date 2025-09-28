<script setup lang="ts">
defineOptions({
  name: 'UiIcon',
});

const {
  name,
  title = undefined,
  desc = undefined,
  viewBox = undefined,
  size = 'medium',
} = defineProps<{
  name: string;
  desc?: string;
  title?: string;
  viewBox?: string;
  size?: 'small' | 'medium' | 'big' | 'full';
}>();

const classes = computed(() => `icon--${size}`);
</script>

<template>
  <svg-icon
    :class="classes"
    v-bind="{
      name,
      desc,
      title,
      viewBox,
    }"
  />
</template>

<style scoped lang="scss">
.icon {
  // 14
  &--small {
    width: rem($icon-size-small);
    height: rem($icon-size-small);
  }

  &--medium {
    //22
    width: rem($icon-size-medium);
    height: rem($icon-size-medium);
  }

  &--big {
    //30
    width: rem($icon-size-big);
    height: rem($icon-size-big);
  }

  &--full {
    width: 100%;
    height: 100%;
  }
}
</style>
