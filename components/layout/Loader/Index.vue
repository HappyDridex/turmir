<script setup lang="ts">
defineOptions({
  name: 'LayoutLoader',
});

const [isLoading, _, unsetLoading] = useFlag(true);

onMounted(unsetLoading);
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="loader"
    >
      <div class="loader__content">
        <video
          class="loader__video"
          autoplay
          loop
          muted
          playsinline
        >
          <source
            src="/_static/webm/plane-transparent.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.loader {
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 999;

  background-color: $primary;

  &__content {
    max-width: rem(300px);

    overflow: hidden;
    position: relative;
  }

  &__video {
    width: 100%;
    height: 100%;

    transform: scale(1.2);
  }
}
</style>
