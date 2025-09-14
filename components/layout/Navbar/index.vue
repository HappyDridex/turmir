<script setup lang="ts">
defineOptions({
  name: 'LayoutNavbar',
});

const emit = defineEmits<{
  'link:click': [];
}>();

const SECTIONS = [
  {
    title: 'Услуги',
    url: '#services',
  },
] as const;
</script>

<template>
  <nav class="navbar">
    <div class="navbar__inner">
      <ul class="navbar__links">
        <li
          v-for="section in SECTIONS"
          :key="section.url"
          class="navbar__link"
        >
          <NuxtLink
            :to="section.url"
            @click="emit('link:click')"
          >
            {{ section.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
}
</style>
