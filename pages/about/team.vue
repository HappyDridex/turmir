<script setup lang="ts">
defineOptions({
  name: 'AboutTeam',
});

definePageMeta({
  name: 'team',
});
</script>

<template>
  <div class="team-page">
    <ViewAboutTeams class="team-page__team" />

    <ViewAboutFeedback class="team-page__feedback" />

    <ViewHomeMatchTour class="team-page__match" />

    <ViewHomeMap class="team-page__map" />
  </div>
</template>

<style lang="scss" scoped>
.team-page {
  &__team {
    margin-top: rem(60px);
  }

  &__feedback {
    margin-top: rem(50px);
  }

  &__match {
    margin-top: rem(90px);
  }

  &__map {
    margin-top: rem(230px);
  }
}
</style>
