<script setup lang="ts">
defineOptions({
  name: 'ViewPopupTourRequest',
});

const show = defineModel<boolean>({
  required: false,
  default: false,
});
</script>

<template>
  <UiPopup
    v-model="show"
    class="tour-request"
    close-on-click-modal
  >
    <div class="tour-request__body">
      <div class="tour-request__header">
        <h2 class="tour-request__header-title">Заявка на подбор тура</h2>
      </div>

      <UiForm class="tour-request__form">
        <UiFormItem
          class="tour-request__form-field"
          placeholder="Ваше имя"
          size="large"
        />

        <UiFormItem
          class="tour-request__form-field"
          placeholder="Электронная почта"
          size="large"
        />

        <UiFormItem
          class="tour-request__form-field"
          placeholder="Моб. телефон"
          size="large"
        />

        <UiFormItem
          class="tour-request__form-field"
          placeholder="E-Mail"
          size="large"
        />

        <UiFormItem
          class="tour-request__form-field"
          placeholder="Комментарий"
          :input-props="{
            type: 'textarea',
            autosize: {
              minRows: 4,
              maxRows: 4,
            },
          }"
        />

        <UiFormItem class="tour-request__form-field">
          <ElSelect
            placeholder="Выберите город"
            size="large"
          />
        </UiFormItem>

        <UiFormItem class="tour-request__form-field">
          <ElSelect
            placeholder="Выберите офис"
            size="large"
          />
        </UiFormItem>

        <UiButton
          class="tour-request__form-submit"
          text="Отправить"
          theme="secondary"
          full
        />

        <div class="tour-request__form-politics">
          <p>
            Отправляя запрос, я выражаю согласие на обработку персональных
            данных и подтверждаю, что ознакомлен с политикой обработки
            персональных данных.
          </p>
        </div>
      </UiForm>
    </div>
  </UiPopup>
</template>

<style lang="scss" scoped>
:global(.tour-request.popup) {
  --el-dialog-margin-top: 10vh;
  --el-dialog-padding-primary: 0;

  padding: rem(50px);
  max-width: rem(500px);
}

.tour-request {
  &__header {
    text-align: center;

    letter-spacing: -0.02em;

    &-title {
      font-size: rem(28px);
      font-weight: $fw-bold;
      line-height: rem(34px);

      color: #2b3f5a;
    }

    &-description {
      font-size: rem(15px);
      font-weight: $fw-medium;
      line-height: rem(22px);

      color: #808c9c;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;

    row-gap: rem(30px);
  }

  &__form {
    display: flex;
    flex-direction: column;

    row-gap: rem(12px);

    &-field {
      margin: 0;
    }
  }
}
</style>
