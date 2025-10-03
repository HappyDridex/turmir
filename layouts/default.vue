<script setup lang="ts">
defineOptions({
  name: 'LayoutDefault',
});

const { isTourRequestOpen } = useTourRequestPopup();
</script>

<template>
  <div class="layout-default">
    <LayoutLoader class="layout-default__loader" />

    <LayoutHeader class="layout-default__header" />

    <div class="layout-default__page">
      <NuxtPage />
    </div>

    <LayoutFooter class="layout-default__footer" />

    <ViewPopupTourRequest
      v-model="isTourRequestOpen"
      class="header__tour-request"
    />
  </div>
</template>

<style lang="scss">
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
    margin-top: rem(130px);
  }
}
</style>
