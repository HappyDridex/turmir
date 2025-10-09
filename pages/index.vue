<script setup lang="ts">
if (import.meta.client) {
  useHead({
    script: [
      {
        src: 'https://front.sletat.ru/modules/module6/latest/module.js',
        defer: true,
      },
    ],
  });
}
</script>

<template>
  <main class="main-page">
    <ViewHomeIntro class="main-page__intro" />

    <ViewHomeSubscribe />

    <ViewHomeHotTours
      v-if="false"
      class="main-page__hot"
    />

    <ViewHomeMatchTour class="main-page__match" />

    <ViewHomeMap class="main-page__map" />
  </main>
</template>

<style scoped lang="scss">
.main-page {
  &__intro {
    margin-top: rem(60px);
  }

  &__hot,
  &__match {
    margin-top: rem(90px);

    @include md {
      margin-top: rem(60px);
    }
  }

  &__map {
    margin-top: rem(230px);
  }
}
</style>
