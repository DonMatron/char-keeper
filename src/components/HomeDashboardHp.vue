<script setup lang="ts">
const props = defineProps<{
  current: number,
  maximal: number,
  temporary: number
}>()
</script>

<template>
  <div class="Container">
    <div class="Slash BigText">/</div>
    <div class="Text">Health Points</div>
    <div class="HpBlock">
      <div class="HpCol Current">
        <div class="BigText">{{ props.current }}</div>
        <div class="Text">Current</div>
      </div>
      <div class="HpCol Max">
        <div class="BigText">{{ props.maximal }}</div>
        <div class="Text">Max</div>
      </div>
      <div class="HpCol Temp">
        <div class="BigText">{{ props.temporary }}</div>
        <div class="Text">Temporary</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Container {
  position: relative;
  padding-block: .4rem;
}

.Slash {
  position: absolute;
  left: 33%;
  top: 3.3rem;
  transform: translate(-50%, -50%);
  font-weight: 600;
}

.Text {
  font-family: Oswald;
  font-weight: 400;
  text-align: center;
  font-size: 1rem;
  color: #bababa;
  user-select: none;
}

.BigText {
  font-family: Oswald;
  font-weight: 600;
  text-align: center;
  font-size: 1.4rem;
}

.HpBlock {
  display: flex;
  align-items: stretch;
  margin-top: .2rem;
}

.HpCol {
  div {
    margin-top: .2rem;
  }
}

.Current {
  flex-basis: 30%;
}

.Max {
  flex-basis: 40%;
}

.Temp {
  flex-basis: 30%;
}
</style>
