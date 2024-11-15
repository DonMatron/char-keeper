<script setup lang="ts">
import Divider from 'primevue/divider';

// const props = defineProps<{
//   defenses: Defence[],
//   conditions: Condition[]
// }>()
</script>

<template>
  <div class="Container">
    <div class="ContainerHeading">{{ $t('defenses') }}</div>
    <div class="Defenses">

    </div>
    <Divider />
    <div class="ContainerHeading">{{ $t('conditions') }}</div>
    <div class="Conditions">

    </div>
  </div>
</template>

<style lang="scss" scoped>
.Container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.Defenses {
  flex-basis: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.Conditions {
  flex-basis: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.ContainerHeading {
  font-family: Oswald;
  font-weight: 500;
  text-align: center;
  font-size: 1.1rem;
  user-select: none;
}
</style>
