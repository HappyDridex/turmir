<script setup lang="ts">
defineOptions({
  name: 'ViewCommonHeroTitle',
});
</script>

<template>
  <div class="hero-title">
    <div class="hero-title__icon">
      <UiIconPlane class="hero-title__icon-pic" />
    </div>

    <div class="hero-title__text">
      <slot />
    </div>

    <div class="hero-title__icon">
      <UiIconPlane class="hero-title__icon-pic rotate" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-title {
  display: flex;
  align-items: center;

  &__icon {
    &-pic {
      width: rem(100px);
      height: rem(100px);

      &.rotate {
        transform: rotate(270deg);
      }
    }
  }

  :slotted(h2) {
    font-size: 44px;
    font-weight: $fw-extrabold;

    text-align: center;
  }
}
</style>
