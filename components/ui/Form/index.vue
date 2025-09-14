<script setup lang="ts">
import type FormValidator from '@/classes/FormValidator';

defineOptions({
  name: 'UiForm',
});

const props = withDefaults(
  defineProps<{
    formModel?: Record<string, unknown>;
    rules?: ReturnType<FormValidator<Record<string, unknown>>['getRules']>;
  }>(),
  {
    formModel: undefined,
    rules: undefined,
  }
);

const formRef = useTemplateRef('formRef');

defineExpose({
  form: formRef,
});
</script>

<template>
  <ElForm
    ref="formRef"
    class="form"
    require-asterisk-position="right"
    :model="formModel"
    :rules="rules"
    @submit.prevent
  >
    <slot />
  </ElForm>
</template>
