<script setup lang="ts">
import { onMounted } from 'vue';
import { useBreakpoint } from '../hooks/UseBreakpoint';

const isDoubleMode = useBreakpoint(import.meta.env.VITE_DOUBLE_MODE);
const isTripleMode = useBreakpoint(import.meta.env.VITE_TRIPLE_MODE);

onMounted(() => {
  useBreakpoint(0);
});
</script>

<template>
  <main>
    <TransitionGroup>

      <div v-if="isDoubleMode" class="Container ContainerLeft" key="left">
        <h1>Left</h1>
        <div class="Text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est
          laborum.
        </div>
      </div>

      <div class="Container ContainerMiddle"  key="middle">
        <h1>Middle</h1>
      </div>

      <div v-if="isTripleMode" class="Container ContainerRight"  key="right">
        <h1>Right</h1>
        <div class="Text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est
          laborum.
        </div>
      </div>

    </TransitionGroup>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: 100vh;
  width: 100vw;
  padding: 1em;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  align-content: flex-end;

  .v-enter-active,
  .v-leave-active {
    transition: opacity .3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .Container {
    margin-left: 1em;
    background: #ffffff05;
    border-radius: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;

    &Left {
      flex-basis: 20%;
      //flex-shrink: 1;
      flex-grow: 1;
    }

    &Middle {
      flex-basis: 50%;
      //flex-shrink: 1;
      flex-grow: 1;

    }

    &Right {
      flex-basis: 20%;
      //flex-shrink: 1;
      flex-grow: 1;
    }

    h1 {
      text-align: center;
    }

    .Text {
      //width: 10em;
    }

    &:first-of-type {
      margin-left: 0em;
    }
  }
}
</style>
