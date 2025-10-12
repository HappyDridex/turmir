<script setup lang="ts">
defineOptions({
  name: 'UiFormItem',
});

withDefaults(
  defineProps<{
    prop?: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    type?: string;
    inputProps?: Record<string, unknown>;
  }>(),
  {
    type: 'text',
    inputProps: () => ({}),
    inputMode: 'text',
    prop: undefined,
    label: undefined,
    placeholder: undefined,
  }
);

const model = defineModel<string | number | null>({
  required: false,
  default: '',
});
</script>

<template>
  <ElFormItem
    class="form-item"
    :label="label"
    :prop="prop"
  >
    <slot>
      <UiInput
        v-model="model"
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
        v-bind="inputProps"
      />
    </slot>

    <slot name="meta" />
  </ElFormItem>
</template>

<style scoped lang="scss">
.form-item {
  flex-grow: 1;
}
</style>
