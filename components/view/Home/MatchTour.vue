<script setup lang="ts">
defineOptions({
  name: 'ViewHomeMatchTour',
});
</script>

<template>
  <LayoutPageSection class="home-match-tour">
    <template #title>
      Доверьте нам свой отпуск и отдыхайте <br />
      по разумным ценам, когда хотите!
    </template>

    <template #description>
      Наши менеджеры бесплатно помогут вам определиться с туром
      <br />
      и подберут лучшие варианты для вашего отдыха
    </template>

    <div class="home-match-tour__main">
      <div class="home-match-tour__main-content">
        <UiButton
          class="home-match-tour__main-content-btn"
          text="Подобрать тур"
        />
      </div>

      <div class="home-match-tour__images">
        <NuxtImg
          class="home-match-tour__images-item home-match-tour__images-item--1"
          src="/_static/images/bid-1.jpg"
        />
        <NuxtImg
          class="home-match-tour__images-item home-match-tour__images-item--2"
          src="/_static/images/bid-2.jpg"
        />
        <NuxtImg
          class="home-match-tour__images-item home-match-tour__images-item--3"
          src="/_static/images/bid-3.jpg"
        />
        <NuxtImg
          class="home-match-tour__images-item home-match-tour__images-item--4"
          src="/_static/images/bid-4.jpg"
        />
      </div>
    </div>

    <div class="home-match-tour__bg">
      <NuxtImg
        class="home-match-tour__bg-img"
        src="/_static/images/match-tour-bg.png"
      />

      <NuxtImg
        class="home-match-tour__bg-img home-match-tour__bg-img--sm"
        src="/_static/images/match-tour-bg-sm.png"
      />
    </div>
  </LayoutPageSection>
</template>

<style scoped lang="scss">
.home-match-tour {
  position: relative;
  &__main {
    position: relative;

    &-content {
      width: fit-content;
      margin: 0 auto;

      &-btn {
        padding: rem(16px) rem(30px) !important;

        &:deep(.base-button__text) {
          font-size: 22px;
          font-weight: $fw-medium;
        }
      }
    }
  }

  &__images {
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      overflow: hidden;
      position: absolute;

      &--1 {
        width: 145px;
        height: 150px;
        top: 0;
        left: 0;
        transform: translateY(-25%);
      }

      &--2 {
        width: 145px;
        height: 150px;
        top: 60px;
        left: 18%;
      }

      &--3 {
        width: 145px;
        height: 150px;
        top: 0;
        right: 11%;
      }

      &--4 {
        width: 101px;
        height: 101px;
        top: 0;
        right: 0;
        transform: translateY(-100%);
      }
    }
  }

  &__bg {
    overflow: hidden;
    position: absolute;
    z-index: -1;
    top: 260px;
    left: -160px;

    display: flex;
    justify-content: center;

    width: auto;
    height: auto;

    &::before {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      content: '';

      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.5) 0%,
        #ffffff 100%
      );
    }

    &-img {
      width: 997px;
      height: 665px;
      max-width: unset;

      &--sm {
        display: none;
      }
    }
  }
}
</style>
