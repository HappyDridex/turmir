<script setup lang="ts">
defineOptions({
  name: 'LayoutPageSection',
});
</script>

<template>
  <section class="page-layout-section">
    <h2 class="page-layout-section__title">
      <slot name="title" />
    </h2>

    <p class="page-layout-section__description">
      <slot name="description" />
    </p>

    <slot />
  </section>
</template>

<style scoped lang="scss">
.page-layout-section {
  &__title {
    position: relative;

    font-size: 44px;
    font-weight: $fw-extrabold;

    text-align: center;
  }

  &__description {
    font-size: 20px;
    line-height: 1.4;

    margin-top: rem(20px);
    margin-bottom: rem(20px);

    text-align: center;
  }
}
</style>
