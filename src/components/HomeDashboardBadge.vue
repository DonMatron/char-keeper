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
    <div class="Value">{{ props.value }}</div>
    <div class="Text">{{ props.text }}</div>
  </div>
</template>

<style lang="scss" scoped>
.Badge {
  overflow: hidden;
  position: relative;
  padding: .4rem;
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
  font-family: Oswald;
  font-weight: 600;
  text-align: center;
  font-size: 2rem;
  text-shadow: 0 0 .5rem #000000;
}

.Text {
  font-family: Oswald;
  font-weight: 400;
  text-align: center;
  font-size: 1rem;
  color: #bababa;
  text-shadow: 0 0 1rem #000000;
}
</style>
