<template>
  <div class="page-wrapper">
    <div class="images-wrapper">
      <div class="image-container">
        <img
          class="main-img-style"
          :src="work.image"
          :alt="project.title"
          :style="imageStyle"
        />
      </div>
      <VerticalCarusel v-if="works.length > 1" :images="works.map(work => work.image)" @select="onImageSelect" />
      <div v-else class="placeholder"></div>
    </div>
    <div class="work-tile__content">
      <div class="name-and-year">
        <div class="title-and-tag">
          <div class="title">{{ project.title }}</div>
          <div class="subtitle">{{ project.subtitle }}</div>
        </div>
        <div class="title">{{ project.year }}</div>
      </div>
      <div class="description">
        {{ project.description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import VerticalCarusel from "@/components/VerticalCarusel.vue";
import {useWorksStore} from "@/stores/works.js";
import type {IProject, IWork} from "@/types.ts";
import {ref, computed} from "vue";

const route = useRoute();
useWorksStore();
const worksStore = useWorksStore();
const project: IProject = worksStore.getProjectByGroup(route.params.projectGroup as string);
const works: IWork[] = project.works;
const work = ref<IWork>(works[0]);
const onImageSelect = (newIndex: unknown) => {
  work.value = works[Number(newIndex)];
};

const imageStyle = computed(() => {
  const imgStyle = work.value?.imageStyle;
  const position = imgStyle?.full ? `object-position: ${imgStyle.full.x}% ${imgStyle.full.y}%` : '';
  const scale = imgStyle?.full ? `scale: ${imgStyle.full.scale}%` : '';
  return `${position}; ${scale}`;
})
</script>

<style scoped>
.page-wrapper {
  margin: 68px 40px 60px 10%;
  .images-wrapper {
    display: flex;
    align-items: center;
    .image-container {
      width: 700px;
      height: 400px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      background-color: #f5f5f5;
    }
    .main-img-style {
      width: 700px;
      height: 400px;
      object-fit: cover;
    }
  }
  .work-tile__content {
    width: 700px;
    .name-and-year {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
      font-size: 0.7rem;
      font-family: LetterGothicStd, sans-serif;
      font-weight: bold;
      .title-and-tag {
        .subtitle {
          font-style: italic;
        }
      }
      .title {
        font-weight: bold;
      }
    }
    .description {
      font-size: 0.8rem;
      text-align: justify;
      line-height: 15px;
    }
  }
}
.placeholder {
  width: 200px;
}
</style>
