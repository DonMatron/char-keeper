<script setup lang="ts">
import { useBreakpoint } from '../hooks/UseBreakpoint';
import HomeDashboard from '../components/HomeDashboard.vue';
import HomeTabs from '../components/HomeTabs.vue';
import HomeLeft from '../components/HomeLeft.vue';
import HomeRight from '../components/HomeRight.vue';
import { useModeStore } from '../store';

const mode = useModeStore();

const isDoubleMode = useBreakpoint(mode.double);
const isTripleMode = useBreakpoint(mode.triple);

</script>

<template>
  <main>
    <TransitionGroup>

      <div v-if="isDoubleMode" class="Container Left" key="left">
        <HomeLeft />
      </div>

      <div class="Middle" key="middle">
        <HomeDashboard />
        <HomeTabs />
      </div>

      <div v-if="isTripleMode" class="Container Right" key="right">
        <HomeRight />
      </div>

    </TransitionGroup>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

main {
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  overflow: hidden;

  .v-enter-active,
  .v-leave-active {
    transition: opacity .3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  display: flex;
  align-items: stretch;
  gap: 1rem;
}

.Left {
  flex: 1 0 0;
  overflow-x: hidden;
}

.Middle {
  flex: 2 0 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 1rem;

  .Tabs {
    flex: 1 0 0;
    overflow: hidden;
  }
}

.Right {
  flex: 1 0 0;
  overflow-x: hidden;
}
</style>
