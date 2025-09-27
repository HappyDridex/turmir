<script setup lang="ts">
defineOptions({
  name: 'ViewAboutFeedback',
});
</script>

<template>
  <LayoutPageSection class="feedback">
    <template #title>
      <span class="feedback__title-highlight"> Вот, что </span> один из наших
      клиентов <br />
      недавно написал нам, после <br />
      очередной поездки

      <UiIcon
        class="feedback__title-highlighted-lines"
        name="highlighted-lines"
      />
    </template>

    <div class="feedback__content">
      <UiIcon
        class="feedback__quote feedback__quote--after"
        name="quote"
      />

      <div class="feedback__message">
        <p class="feedback__message-txt">
          С помощью вашей компании я нашел себе жену! Весной 24 года я купил
          путевку через вашу компанию и улетел в Таиланд. Там в одном уютном
          ресторанчике я познакомился с красивой девушкой, которая завтракала
          кофе и круассаном. Я позвал её на ужин, мы много гуляли и общались.
          Оказывается у нас общие знакомые! В общем, сходили мы на ужин, после
          чего не расставались ни на секунду!
        </p>
      </div>

      <UiIcon
        class="feedback__quote feedback__quote--before"
        name="quote"
      />
    </div>
  </LayoutPageSection>
</template>

<style lang="scss" scoped>
.feedback {
  &__title {
    &-highlight {
      display: inline-flex;

      justify-content: center;
      align-items: center;

      padding: 0 10px;
      margin: 0 -5px;

      background-color: #bbe9fb;
      border-radius: 100px;
    }

    &-highlighted-lines {
      position: absolute;
      right: 28%;
      bottom: -15px;

      z-index: -1;

      width: rem(290px);
      height: rem(28px);

      color: #ffc250;
    }
  }

  &__quote {
    position: absolute;

    width: rem(50px);
    height: rem(50px);

    &--after {
      top: -12%;
    }

    &--before {
      right: 10%;
      bottom: 0;

      transform: translateY(50%) rotate(180deg);
    }
  }

  &__content {
    position: relative;

    margin-top: rem(60px);
    padding: rem(58px) rem(124px);

    border: 1px solid #bbe9fb;
    border-radius: rem(50px);

    background-color: #e4f6fd;
  }

  &__message {
    &-txt {
      text-align: center;

      font-weight: $fw-regular;
      font-size: rem(20px);
      line-height: rem(26px);
    }
  }
}
</style>
