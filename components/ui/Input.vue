<script setup lang="ts">
defineOptions({
  name: 'UiInput',
});

const props = withDefaults(
  defineProps<{
    small?: boolean;
    parser?: (val: string | number) => string;
    formatter?: (val: string | number) => string;
    numericKeyboard?: boolean;
  }>(),
  {
    parser: undefined,
    formatter: undefined,
  }
);

const model = defineModel<string | number | null>({
  required: true,
});

// @ts-expect-error ts-type-error
const slots = useSlots();

const extraAttrs = props.numericKeyboard ? { inputmode: 'numeric' } : {};

const pattern = props.numericKeyboard ? '[0-9]' : undefined;

const getParser = () => {
  if (props.numericKeyboard) {
    return (value: string) => {
      if (value === '') {
        return null;
      }

      return +value.replace(/\D/g, '');
    };
  }

  return props.parser;
};

const getFormatter = () => {
  if (getParser() && !props.formatter) {
    return (val: string | number) => val;
  }

  return props.formatter;
};

const transformers = {
  parser: getParser(),
  formatter: getFormatter(),
};
</script>

<template>
  <ElInput
    v-model="model"
    class="input"
    :parser="transformers.parser"
    :formatter="transformers.formatter"
    :pattern="pattern"
    v-bind="extraAttrs"
  >
    <template
      v-if="slots.prefix"
      #prefix
    >
      <slot name="prefix" />
    </template>

    <template
      v-if="slots.suffix"
      #suffix
    >
      <slot name="suffix" />
    </template>
  </ElInput>
</template>

<style scoped lang="scss">
.input {
  width: 100%;

  --el-color-primary: red;
  --el-input-focus-border-color: #0a0b1e;
}
</style>
