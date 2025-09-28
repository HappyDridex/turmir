<script setup lang="ts">
defineOptions({
  name: 'ViewAboutTeams',
});

const teams = [
  {
    fio: 'Кайфудин',
    position: 'CEO',
    photo: 'https://cataas.com/cat',
  },
  {
    fio: 'Кайфудин',
    position: 'CEO',
    photo: 'https://cataas.com/cat',
  },
  {
    fio: 'Кайфудин',
    position: 'CEO',
    photo: 'https://cataas.com/cat',
  },
];
</script>

<template>
  <section class="teams">
    <ViewCommonHeroTitle class="teams__title">
      <h2>Команда, которая сделает ваш отпуск незабываемым</h2>
    </ViewCommonHeroTitle>

    <div class="teams__items">
      <UiSwiper
        :slides="teams"
        :space-between="32"
        :slides-per-view="'auto'"
        class="teams__swiper"
      >
        <template #slide="{ slide, idx }">
          <div class="teams__item">
            <div class="teams__item-image">
              <img :src="slide.photo + `?r=${idx}&width=300&height=300`" />
            </div>

            <div class="teams__item-desc">
              <p class="teams__item-title">
                {{ slide.fio }}
              </p>

              <p class="teams__item-position">
                {{ slide.position }}
              </p>
            </div>
          </div>
        </template>
      </UiSwiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.teams {
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: rem(48px);

  &__items {
    width: 100%;
  }

  &__item {
    display: flex;
    flex-direction: column;

    row-gap: rem(15px);

    padding: rem(10px);

    border-radius: rem(40px);

    background-color: #f5f5f5;

    &-image {
      position: relative;

      width: rem(290px);

      padding-bottom: 120%;

      border-radius: rem(32px);

      overflow: hidden;

      img {
        position: absolute;

        left: 0;
        top: 0;

        width: 100%;
        height: 100%;
      }
    }

    &-desc {
      text-align: center;
    }

    &-title {
      font-size: 20px;
      font-weight: $fw-medium;
      line-height: rem(24px);
    }

    &-position {
      font-size: rem(16px);
      font-weight: $fw-regular;
      line-height: rem(22px);
    }
  }
}
</style>
