<script setup lang="ts">
import Divider from 'primevue/divider';

// const props = defineProps<{
//   defenses: Defence[],
//   conditions: Condition[]
// }>()
</script>

<template>
  <div class="Container">
    <h3>{{ $t('defenses') }}</h3>
    <div class="Collection"></div>

    <Divider />

    <h3>{{ $t('conditions') }}</h3>
    <div class="Collection"></div>
  </div>
</template>

<style lang="scss" scoped>
.Container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  padding: 1rem;
}

.Collection {
  flex-basis: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
