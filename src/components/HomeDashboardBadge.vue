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
    <h1 class="Text">{{ props.text }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.Badge {
  overflow: hidden;
  position: relative;
  padding: .5rem;
}

img {
  pointer-events: none;
  position: absolute;
  display: block;
  object-fit: cover;
  height: 60%;
  opacity: .1;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.Value {
  font-family: Oswald;
  font-weight: 600;
  text-align: center;
  font-size: 2rem;
  text-shadow: 0 0 1rem #000000;
}

.Text {
  font-family: Oswald;
  font-weight: 400;
  text-align: center;
  font-size: 1.2rem;
  color: #bbbbbb;
  text-shadow: 0 0 1rem #000000;
}
</style>
