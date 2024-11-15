<script setup lang="ts">

const props = defineProps<{
  name: string
  image?: string
}>()
</script>

<template>
  <div class="CharacterImage Container">
    <img v-if="props.image" :src="image!" />
    <div v-else class="Alternative"> Here should've been your beautiful character pic, but something didn't work out :(</div>
    <h1 class="Text">{{ props.name }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.CharacterImage {
  padding: 0;
  overflow: hidden;
  position: relative;
  width: var(--dashboard-width);
  height: var(--dashboard-width);

  //Moves text to bottom
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;

  img {
    z-index: -1;
    position: absolute;
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .Alternative {
    pointer-events: none;
    position: absolute;
    height: 100%;
    padding: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    opacity: .2;
  }

  .Text {
    text-shadow: var(--text-shadow);
    text-align: left;
    padding: .2rem .8rem;
  }
}
</style>
