<script setup lang="ts">
defineOptions({
  name: 'UiRadioGroup',
});

const {
  options,
  props = { value: 'id', label: 'label', disabled: 'disabled' },
} = defineProps<{
  options?: Array<Record<string, unknown>>;
  props?: Partial<{
    value: string;
    label: string;
    disabled: string;
  }>;
}>();

const modelValue = defineModel<string | number | boolean>({
  default: '',
  required: false,
});
</script>

<template>
  <ElRadioGroup
    v-model="modelValue"
    class="ui-radio-group"
    :props="props"
    :options="options"
  />
</template>

<style lang="scss" scoped>
.ui-radio-group {
  --el-color-primary: #{$primary};

  &:deep(.el-radio) {
    margin: 0;

    width: 100%;
  }
}
</style>
