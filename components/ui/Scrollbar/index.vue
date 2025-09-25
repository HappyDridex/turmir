<script setup lang="ts">
defineOptions({
  name: 'UiScrollbar',
});
</script>

<template>
  <ElScrollbar class="scrollbar">
    <slot />
  </ElScrollbar>
</template>
