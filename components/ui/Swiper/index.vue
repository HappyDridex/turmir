<script setup lang="ts" generic="T">
defineOptions({
  name: 'UiSwiper',
});

const { modules = [], direction = 'horizontal' } = defineProps<{
  slides: T[];
  slidesPerView: number | 'auto';
  spaceBetween: number;
  direction?: 'horizontal' | 'vertical';
  modules?: unknown[];
}>();

const Swiper = resolveComponent('Swiper');
const SwiperSlide = resolveComponent('SwiperSlide');

const isClient = import.meta.client;

const wrapperTag = isClient ? Swiper : 'ul';
const listTag = isClient ? SwiperSlide : 'li';
</script>

<template>
  <component
    :is="wrapperTag"
    :key="slidesPerView"
    class="ui-swiper"
    :class="{ client: isClient }"
    :space-between="spaceBetween"
    :slides-per-view="slidesPerView"
    :direction="direction"
    :modules="[SwiperA11y, ...modules]"
    data-allow-mismatch
  >
    <component
      :is="listTag"
      v-for="(slide, idx) in slides"
      :key="idx"
      class="ui-swiper__slide"
    >
      <slot
        name="slide"
        :slide="slide"
        :idx="idx"
      />
    </component>

    <slot name="meta" />
  </component>
</template>

<style scoped lang="scss">
.ui-swiper {
  --swiper-navigation-size: 36px;
  --swiper-navigation-color: #{$primary};

  @include md {
    --swiper-navigation-size: 46px;
  }

  &:deep(.swiper-button-disabled) {
    opacity: 0.2;
  }

  @at-root ul#{&} {
    overflow: hidden;

    display: flex;
    column-gap: rem(24px);
  }

  li {
    max-height: rem(200px);
  }

  &__slide {
    width: auto;
    height: auto;
  }
}
</style>
