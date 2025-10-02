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
  justify-content: space-between;

  width: 100%;

  &__icon {
    &-pic {
      width: rem(100px);
      height: rem(100px);

      @include md {
        width: rem(75px);
        height: rem(75px);
      }

      @include sm {
        width: rem(50px);
        height: rem(50px);
      }

      &.rotate {
        transform: rotate(270deg);
      }
    }
  }

  :slotted(h2) {
    font-size: 44px;
    font-weight: $fw-extrabold;

    text-align: center;

    @include md {
      font-size: 32px;
    }
  }
}
</style>
