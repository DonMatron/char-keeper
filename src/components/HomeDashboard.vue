<script setup lang="ts">
import HomeDashboardImage from './HomeDashboardImage.vue';
import HomeDashboardBadge from './HomeDashboardBadge.vue';
import HomeDashboardHp from './HomeDashboardHp.vue';
import { useCharacterStore } from '../store.js';
import { BadgeIcons } from '../assets/BadgeAssets';

const character = useCharacterStore();

const badges = [
  {
    class: "Ac",
    text: "AC",
    value: character.ac.toString(),
    image: BadgeIcons.Ac
  },
  {
    class: "Initiative",
    text: "Initiative",
    value: character.initiative.toString(),
    image: BadgeIcons.Initiative
  },
  {
    class: "Proficiency",
    text: "Proficiency",
    value: character.proficiency.toString(),
    image: BadgeIcons.Proficiency
  },
  {
    class: "Speed",
    text: "Speed",
    value: character.speed.toString(),
    image: BadgeIcons.Speed
  },
  {
    class: "Darkvision",
    text: "Darkvision",
    value: character.darkvision.toString(),
    image: BadgeIcons.Darkvision
  },
  {
    class: "Inspirations",
    text: "Inspirations",
    value: character.inspirations.toString(),
    image: BadgeIcons.Inspirations
  }
];

</script>

<template>
  <div class="Dashboard">
    <HomeDashboardImage :name="character.name" :image="character.image" />
    <div class="BadgesGrid">
      <div v-for="badge in badges" :key="badge.class">
        <HomeDashboardBadge :class="badge.class" :text="badge.class" :value="badge.value" :image="badge.image" />
      </div>
    </div>
    <HomeDashboardHp :current="character.currentHp" :maximal="character.maxHp" :temporary="character.tempHp" />
  </div>
</template>

<style lang="scss" scoped>
.Dashboard {
  width: var(--dashboard-width);
}

.BadgesGrid {
  margin-block: 1rem;
  width: var(--dashboard-width);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}

.Ac {
  grid-column: 1;
  grid-row: 1;
}

.Initiative {
  grid-column: 2;
  grid-row: 1;
}

.Proficiency {
  grid-column: 1;
  grid-row: 2;
}

.Speed {
  grid-column: 2;
  grid-row: 2;
}

.Darkvision {
  grid-column: 1;
  grid-row: 3;
}

.Inspirations {
  grid-column: 2;
  grid-row: 3;
}
</style>
