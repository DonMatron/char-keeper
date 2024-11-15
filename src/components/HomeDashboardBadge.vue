<script setup lang="ts">
const props = defineProps<{
  value: string,
  text: string,
  image?: string
}>()
</script>

<template>
  <div class="Badge Container">
    <img v-if="props.image" :src="image!" />
    <h1 class="Value">{{ props.value }}</h1>
    <div class="SecondaryText">{{ props.text }}</div>
  </div>
</template>

<style lang="scss" scoped>
.Badge {
  overflow: hidden;
  position: relative;
  padding: .4rem;
  text-align: center;
}

img {
  pointer-events: none;
  position: absolute;
  display: block;
  object-fit: cover;
  height: 60%;
  opacity: .2;

  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}

.Value {
  text-shadow: var(--text-shadow);
}
</style>
