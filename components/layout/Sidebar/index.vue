<script setup lang="ts">
defineOptions({
  name: 'LayoutSidebar',
});

const emit = defineEmits<{
  'link:click': [];
}>();
</script>

<template>
  <aside class="sidebar">123</aside>
</template>

<style lang="scss" scoped>
.sidebar {
}
</style>
