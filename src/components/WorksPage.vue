<template>
  <div class="works-page">
    <div class="filter">
      <div>Branding</div>
      <div>Product</div>
      <div>Art Direction</div>
    </div>
    <div class="work-tiles">
      <work-tile
        v-for="(work, index) in works"
        :key="index"
        :work="work"
        :index="index"
        :with-text="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import WorkTile from "@/components/WorkTile.vue";
import {useWorksStore} from "@/stores/works.ts";

useWorksStore();
const worksStore = useWorksStore();
const works = worksStore.works;
</script>

<style>
.works-page {
  margin: 2rem;
  .filter {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }
  .work-tiles {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal-width columns */
    gap: 16px; /* spacing between images */
  }
}
</style>
