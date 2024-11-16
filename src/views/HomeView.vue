<script setup lang="ts">
import { useBreakpoint } from '../hooks/UseBreakpoint';
import HomeDashboard from '../components/HomeDashboard.vue';
import HomeTabs from '../components/HomeTabs.vue';
import { useModeStore } from '../store';

const mode = useModeStore();

 const isDoubleMode = useBreakpoint(mode.double);
 const isTripleMode = useBreakpoint(mode.triple);

</script>

<template>
  <main>
    <TransitionGroup>

      <div v-if="isDoubleMode" class="Container Left" key="left">
        <h1>Left</h1>
      </div>

      <div class="Middle" key="middle">
        <HomeDashboard />
        <HomeTabs />
      </div>

      <div v-if="isTripleMode" class="Container Right" key="right">
        <h1>Right</h1>
      </div>

    </TransitionGroup>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

main {
  //Common styling
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  overflow: hidden;

  //Smooth transitions
  .v-enter-active,
  .v-leave-active {
    transition: opacity .3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  //Flexbox
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  align-content: flex-end;
}

//Main flexbox child elements
.Left {
  flex-basis: 20%;
  flex-grow: 1;
}

.Middle {
  flex-basis: 50%;
  flex-grow: 2;

  margin-left: 1rem;

  //Flexbox
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.Right {
  flex-basis: 20%;
  flex-grow: 1;

  margin-left: 1rem;
}

//Middle flexbox child elements

.Tabs {
  flex-basis: 100%;

  margin-left: 1rem;
}
</style>
