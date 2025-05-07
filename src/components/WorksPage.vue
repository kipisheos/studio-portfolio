<template>
  <div class="work-tiles">
    <work-tile
      v-for="(work, index) in works"
      :key="index"
      :title="work.title"
      :description="work.description"
      :image="work.image"
    />
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
.work-tiles {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
