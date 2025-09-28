<script setup lang="ts">
import { YA_IFRAME_SRC } from '@/utils/dictionary/yandex-map';

defineOptions({
  name: 'ViewHomeMap',
});
</script>

<template>
  <div class="ya-map">
    <iframe
      class="ya-map__frame"
      frameborder="0"
      title="Яндекс карты"
      :src="YA_IFRAME_SRC"
    />
  </div>
</template>

<style scoped lang="scss">
.ya-map {
  overflow: hidden;

  height: 500px;

  border: 1px solid rgba(10, 11, 30, 0.5);
  border-radius: 50px;

  @include md {
    height: 400px;
  }

  &__frame {
    width: 100%;
    height: 100%;
  }
}
</style>
