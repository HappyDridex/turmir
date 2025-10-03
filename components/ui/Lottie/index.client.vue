<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';

defineOptions({
  name: 'UiLottie',
});

const { data } = defineProps<{
  data: Record<string, any>;
}>();
</script>

<template>
  <Vue3Lottie
    v-if="data"
    class="lottie"
    :animation-data="data"
  />
</template>

<style scoped lang="scss">
.lottie {
  flex-shrink: 0;

  height: auto;
}
</style>
