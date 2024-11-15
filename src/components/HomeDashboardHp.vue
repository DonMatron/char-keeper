<script setup lang="ts">
const props = defineProps<{
  current: number,
  maximal: number,
  temporary: number
}>()
</script>

<template>
  <div class="Container">

    <div class="ContainerHeading">{{ $t('hp') }}</div>

    <div class="HpBlock">

      <div class="HpCol Current">
        <div class="BigText">{{ props.current }}
        </div>

        <div class="Text">{{ $t('current') }}</div>
      </div>

      <div class="HpCol Max">
        <div class="BigText">{{ props.maximal }}</div>
        <div class="Text">{{ $t('max') }}</div>
      </div>

      <div class="HpCol Temp">
        <div class="BigText">{{ props.temporary }}</div>
        <div class="Text">{{ $t('temporary') }}</div>
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
  position: relative;
  width: 0;
  left: .1rem;
}

.ContainerHeading {
  font-family: Oswald;
  font-weight: 500;
  text-align: center;
  font-size: 1.1rem;
  user-select: none;
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
  text-wrap: nowrap;
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
