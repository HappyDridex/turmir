<script setup lang="ts">
defineOptions({
  name: 'LayoutSidebar',
});

const modelValue = defineModel<boolean>();

const emit = defineEmits<{
  'link:click': [];
}>();
</script>

<template>
  <aside class="sidebar">
    <ElDrawer
      v-model="modelValue"
      class="sidebar__drawer"
      header-class="sidebar__header"
      body-class="sidebar__body"
      size="max-content"
    >
      <LayoutNavbar
        class="sidebar__navbar"
        type="vertical"
        @link:click="emit('link:click')"
      />
    </ElDrawer>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  :deep(.sidebar__drawer) {
    --el-drawer-bg-color: rgba(247, 247, 249, 0.95);

    height: max-content;

    border-radius: rem(30px) 0 0 rem(30px);
    backdrop-filter: blur(2px);
  }

  :deep(.sidebar__body) {
    padding: rem(40px) rem(20px) rem(30px) rem(30px);

    overflow: hidden;
  }

  :deep(.sidebar__header) {
    position: absolute;
    top: 30px;
    right: 25px;

    margin: 0;
    padding: 0;
  }
}
</style>
