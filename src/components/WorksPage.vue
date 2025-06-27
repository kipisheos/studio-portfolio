<template>
  <div class="works-page">
<!--    <div class="filter">-->
<!--      <div>Branding</div>-->
<!--      <div>Product</div>-->
<!--      <div>Art Direction</div>-->
<!--    </div>-->
    <div class="work-tiles">
      <work-tile
        v-for="(mainWork, index) in mainWorks"
        :key="index"
        :work="mainWork.work"
        :project-info="mainWork.projectInfo"
        :index="index"
        :with-text="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import WorkTile from "@/components/WorkTile.vue";
import {useWorksStore} from "@/stores/works.ts";
import type {IMainWork} from "@/types.ts";

useWorksStore();
const worksStore = useWorksStore();
const mainWorks: IMainWork[] = worksStore.getMainWorks;
</script>

<style>
.works-page {
  margin: 4rem 2rem;
  display: flex;
  justify-content: center;
  .filter {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }
  .work-tiles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px 32px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
