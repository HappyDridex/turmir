<script setup lang="ts">
defineOptions({
  name: "UiButtonScrollToTop",
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <UiButtonNative
    class="scroll-to-top"
    @click="scrollToTop"
  >
    <div class="scroll-to-top__inner">
      <UiIcon
        class="scroll-to-top__icon"
        name="arrow-top"
      />
    </div>
  </UiButtonNative>
</template>

<style lang="scss" scoped>
.scroll-to-top {
  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
  }

  &__icon {
    width: rem(36px);
    height: rem(36px);
  }
}
</style>
