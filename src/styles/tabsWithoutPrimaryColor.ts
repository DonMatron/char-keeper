import { ref } from 'vue';

export const tabsWithoutPrimaryColor = ref({
  tab: {
    active: {
      color: "{surface.0}",
      border: {
        color: "{surface.0}"
      }
    }
  },
  active: {
    bar: {
      background: "{surface.0}"
    }
  }
});
