<template>
  <div class="base-template">
    <section class="base-template__header">
      <header-bar></header-bar>
    </section>

    <section class="base-template__navigation">
      <navigation-bar></navigation-bar>
    </section>

    <section class="base-template__content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script setup>
import NavigationBar from '@/widgets/navigation/navigation-bar.vue'
import HeaderBar from '@/widgets/header/header-bar.vue'
</script>

<style scoped lang="scss">
.base-template {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 280px 1fr;
  transition: 0.3s;
  grid-template-rows: 65px 1fr;
  gap: 25px;

  &__navigation {
    border-radius: var(--border-radius);
    background-color: var(--form-background);
    padding: var(--regular-padding);
  }

  &__header {
    grid-row-start: 1;
    grid-row-end: 3;
    border-radius: var(--border-radius);
    background-color: var(--form-background);
    padding: var(--regular-padding);
  }

  &__content {
    border-radius: var(--border-radius);
    background-color: var(--form-background);
    padding: var(--regular-padding);
  }

  &--close-navigation {
    column-gap: 0;
    grid-template-columns: 0 1fr;
  }
}
</style>
