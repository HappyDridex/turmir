<script setup lang="ts">
defineOptions({
  name: 'ViewHomeHotTours',
});

const hotToursFrame = useTemplateRef('hotToursFrame');

onMounted(() => {
  if (!hotToursFrame.value) {
    return;
  }

  const doc =
    hotToursFrame.value.contentDocument ||
    hotToursFrame.value.contentWindow?.document;
  if (!doc) {
    return;
  }

  // Создаём базовую структуру документа вручную
  doc.open();
  doc.write('<!DOCTYPE html><html><head></head><body></body></html>');
  doc.close();

  // Добавляем контейнер для виджета
  const container = doc.createElement('div');
  container.id = 'hotToursInner';
  doc.body.appendChild(container);

  // Скрипт core.js
  const scriptCore = doc.createElement('script');
  scriptCore.src = 'https://ui.sletat.ru/module-4.0/core.js';
  scriptCore.charset = 'utf-8';
  scriptCore.onload = () => {
    // @ts-ignore
    const sletat = doc?.defaultView?.sletat;
    if (sletat?.FrameHot) {
      sletat.FrameHot.$create({
        city: 1291,
        useCard: false,
        enabledCurrencies: ['RUB'],
      });
    }
  };
  doc.body.appendChild(scriptCore);
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

    <div id="hotToursContainer">
      <iframe
        ref="hotToursFrame"
        style="width: 100%; height: 550px; border: none; overflow-y: scroll"
      >
      </iframe>
    </div>
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
