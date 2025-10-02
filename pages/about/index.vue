<script setup lang="ts">
defineOptions({
  name: 'AboutCompany',
});

definePageMeta({
  name: 'about',
});
</script>

<template>
  <div class="team-page">
    <ViewAboutAgent class="team-page__agent" />

    <ViewAboutFeedback class="team-page__feedback" />

    <ViewHomeMatchTour class="team-page__match" />

    <ViewHomeMap class="team-page__map" />
  </div>
</template>

<style lang="scss" scoped>
.team-page {
  &__agent {
    margin-top: rem(30px);
  }

  &__feedback {
    margin-top: rem(90px);
  }

  &__match {
    margin-top: rem(90px);
  }

  &__map {
    margin-top: rem(230px);
  }
}
</style>
