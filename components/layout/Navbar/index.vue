<script setup lang="ts">
import { ADDRESS, PHONE, COMPANY } from '~/utils/dictionary/address';

defineOptions({
  name: 'LayoutNavbar',
});

const emit = defineEmits<{
  'link:click': [];
}>();
</script>

<template>
  <nav class="navbar">
    <ul class="navbar__section">
      <li class="navbar__title">Подбор тура</li>

      <ul class="navbar__submenu">
        <li class="navbar__submenu-item bold">Горящие туры</li>

        <li class="navbar__submenu-item bold">Минимальные цены</li>

        <li class="navbar__submenu-item bold">Страны</li>

        <li class="navbar__submenu-item bold">Календарь туров</li>
      </ul>
    </ul>

    <ul class="navbar__section">
      <li class="navbar__title">Наши услуги</li>

      <ul class="navbar__submenu">
        <li class="navbar__submenu-item">Авиабилеты</li>

        <li class="navbar__submenu-item">Визы</li>

        <li class="navbar__submenu-item">Круизы</li>

        <li class="navbar__submenu-item">Подбор отеля</li>
      </ul>
    </ul>

    <ul class="navbar__section">
      <li class="navbar__title">О компании</li>

      <ul class="navbar__submenu">
        <li class="navbar__submenu-item">О нас</li>

        <li class="navbar__submenu-item">Команда</li>

        <li class="navbar__submenu-item">Круизы</li>

        <li class="navbar__submenu-item">Подбор отеля</li>
      </ul>
    </ul>

    <ul class="navbar__section">
      <li class="navbar__title">Контакты</li>

      <ul class="navbar__submenu">
        <li class="navbar__submenu-item">
          {{ ADDRESS.full() }}
        </li>

        <li class="navbar__submenu-item">
          {{ PHONE.label }}
        </li>

        <li class="navbar__submenu-item">
          {{ COMPANY.mail }}
        </li>
      </ul>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  font-size: rem(20px);
  line-height: rem(30px);
  opacity: 0.8;

  &__title {
    font-size: rem(22px);
    font-weight: 600;
  }

  &__section {
    display: flex;
    flex-direction: column;

    row-gap: rem(40px);

    padding: 0 rem(20px);
  }

  &__submenu {
    display: flex;
    flex-direction: column;

    row-gap: rem(40px);

    &-item {
      &.bold {
        font-size: rem(22px);
        font-weight: 600;
      }
    }
  }
}
</style>
