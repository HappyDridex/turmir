<script setup lang="ts">
defineOptions({
  name: 'LayoutDefault',
});
</script>

<template>
  <div class="layout-default">
    <LayoutHeader />

    <div class="layout-default__page">
      <NuxtPage />
    </div>

    <LayoutFooter class="layout-default__footer" />
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  display: flex;
  flex-direction: column;

  min-height: 100lvh;

  &__page {
    @include container;

    position: relative;
    z-index: 1;

    flex-grow: 1;
  }

  &__footer {
    margin-top: 122px;
  }
}
</style>
