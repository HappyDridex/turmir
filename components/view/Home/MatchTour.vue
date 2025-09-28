<script setup lang="ts">
defineOptions({
  name: 'ViewHomeMatchTour',
});

const { setTourRequestOpen } = useTourRequestPopup();
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
          @click="setTourRequestOpen"
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
    @include md {
      position: relative;

      margin-top: 90px;
      padding-bottom: 90px;
    }

    &-item {
      overflow: hidden;
      position: absolute;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 20px;

      &--1 {
        width: 145px;
        height: 150px;
        top: 0;
        left: 0;
        transform: translateY(-25%);

        @include md {
          width: 106px;
          height: 110px;

          top: -20px;
          left: 32%;

          transform: none;
        }
      }

      &--2 {
        z-index: 4;

        width: 145px;
        height: 150px;
        top: 60px;
        left: 18%;

        @include md {
          left: 50%;
        }
      }

      &--3 {
        width: 145px;
        height: 150px;
        top: 0;
        right: 11%;

        @include md {
          left: 48%;

          transform: translateX(-50%);
          right: unset;
        }
      }

      &--4 {
        width: 101px;
        height: 101px;
        top: 0;
        right: 0;
        transform: translateY(-100%);

        @include md {
          top: -60px;
          right: 34%;

          transform: none;
        }
      }
    }
  }

  &__bg {
    overflow: hidden;
    position: absolute;
    z-index: -1;
    top: 260px;
    left: -160px;
    right: 0;

    display: flex;
    justify-content: center;

    width: auto;
    height: auto;

    @include md {
      top: unset;
      bottom: 0;

      transform: translate(30px, 340px);
    }

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

      @include md {
        width: 70%;
        height: auto;
        margin-right: auto;
      }

      &--sm {
        display: none;
      }
    }
  }
}
</style>
