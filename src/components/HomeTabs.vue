<script setup lang="ts">
import { Api } from '../api/client';
import { ref } from 'vue';

interface SomeModel {
  id: string;
  text: string;
}

const model = ref<SomeModel>();

async function onTestApi() {
  model.value = await Api.invokePlugin<SomeModel>({
    controller: 'Test',
    action: 'Save',
    data: { id: (Math.floor(Math.random() * (100 - 0 + 1)) + 0).toString(), text: "Some static text here" }
  }) ?? undefined;
};
</script>

<template>
  <div class="Container Tabs">
    <h1 class="Text">Tabs</h1>
    <button @click="onTestApi">Test API</button>
    <div v-if="model">Id: {{ model?.id }}</div>
    <div v-if="model">Text: {{ model?.text }}</div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
