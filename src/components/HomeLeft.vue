<script setup lang="ts">
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import { tabsWithoutPrimaryColor } from '../styles/tabsWithoutPrimaryColor';
</script>

<template>
  <Tabs value="Notes" :dt="tabsWithoutPrimaryColor">
    <TabList>
      <Tab value="Notes">Notes</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="Notes">

      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<style lang="scss" scoped></style>
