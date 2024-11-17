<script setup lang="ts">
import { Api } from '../api/client';

interface SomeModel {
  Id: string;
  Text: string;
}

async function onSearchInput() {
  console.log('Requesting...');

  let res = await Api.invokePlugin<SomeModel>({
    controller: 'Test',
    action: 'Save',
    data: { id: "Specified Id", text: "Some text here" }
  });

  console.log('Result:');
  console.log(res);
};
</script>

<template>
  <div class="Container Tabs">
    <h1 class="Text">Tabs</h1>
    <button @click="onSearchInput">Test API</button>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
