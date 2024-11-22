<script setup lang="ts">
import { Api } from '../api/client';
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import { tabsWithoutPrimaryColor } from '../styles/tabsWithoutPrimaryColor';

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
    <Tabs value="Actions" :selectOnFocus="true" :scrollable="true" :dt="tabsWithoutPrimaryColor">
      <TabList>
        <Tab value="Actions">Actions</Tab>
        <Tab value="Spells">Spells</Tab>
        <Tab value="Notes">Notes</Tab>
        <Tab value="Character">Character</Tab>
        <Tab value="Features">Features</Tab>
        <Tab value="Arts">Arts</Tab>
        <Tab value="Inventory">Inventory</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="Actions">
          <button @click="onTestApi">Test API</button>
          <div v-if="model">Id: {{ model?.id }}</div>
          <div v-if="model">Text: {{ model?.text }}</div>
        </TabPanel>
        <TabPanel value="Spells"></TabPanel>
        <TabPanel value="Notes"></TabPanel>
        <TabPanel value="Character"></TabPanel>
        <TabPanel value="Features"></TabPanel>
        <TabPanel value="Arts"></TabPanel>
        <TabPanel value="Inventory"></TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style lang="scss" scoped>

</style>
