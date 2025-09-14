<script setup lang="ts">
import { htmlStr } from '#imports';

defineOptions({
  name: 'ViewHomeHotTours',
});
</script>

<template>
  <LayoutPageSection class="home-hot-tours">
    <template #title> Ооочень Горящщщие туры </template>

    <template #description>
      Давно мечтаете слетать в отпуск? Предлагаем отличные горящие туры!
      <br />
      Это проверенные места, куда мы своих клиентов отправляем отдыхать уже 5
      лет!
    </template>

    <div
      id="hotToursContainer"
      v-html="htmlStr"
    />
  </LayoutPageSection>
</template>

<style scoped lang="scss">
.home-hot-tours {
  @include flex-col-center;

  #hotToursContainer {
    width: 100%;
  }
}
</style>
