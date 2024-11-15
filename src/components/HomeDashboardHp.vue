<script setup lang="ts">
const props = defineProps<{
  current: number,
  maximal: number,
  temporary: number
}>()
</script>

<template>
  <div class="Container">

    <h3>{{ $t('hp') }}</h3>

    <div class="HpBlock">

      <div class="HpCol Current">
        <h2>{{ props.current }}</h2>
        <div class="SecondaryText">{{ $t('current') }}</div>
      </div>

      <div class="HpCol Max">
        <h2>{{ props.maximal }}</h2>
        <div class="SecondaryText">{{ $t('max') }}</div>
      </div>

      <div class="HpCol Temp">
        <h2>{{ props.temporary }}</h2>
        <div class="SecondaryText">{{ $t('temporary') }}</div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.Container {
  position: relative;
  padding-block: .4rem;
  text-align: center;

  h3 {
    margin-bottom: .4rem;
  }
}

.HpBlock {
  display: flex;
  align-items: stretch;

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
}
</style>
