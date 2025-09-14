<script setup lang="ts">
defineOptions({
  name: 'UiPopup',
});

const { closeOnClickModal = false } = defineProps<{
  closeOnClickModal?: boolean;
}>();

const show = defineModel<boolean>({
  required: false,
  default: true,
});

const appendToTarget = document.body;
</script>

<template>
  <ElDialog
    v-model="show"
    class="popup"
    :append-to="appendToTarget"
    :close-on-click-modal="closeOnClickModal"
  >
    <slot />
  </ElDialog>
</template>
