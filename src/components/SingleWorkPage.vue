<template>
  <div class="page-wrapper">
    <div class="images-wrapper">
      <img class="main-img-style" :src="work.image" :alt="work.title" />
      <VerticalCarusel :images="imgList" @select="onImageSelect" />
    </div>
    <div class="work-tile__content">
      <div class="name-and-year">
        <div class="title-and-tag">
          <div class="title">{{ work.title }}</div>
          <div class="subtitle">{{ work.subtitle }}</div>
        </div>
        <div class="title">{{ work.year }}</div>
      </div>
      <div class="description">
        {{ work.description }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import VerticalCarusel from "@/components/VerticalCarusel.vue";
import {useWorksStore} from "@/stores/works.js";
const route = useRoute();
useWorksStore();
const worksStore = useWorksStore();
const works = worksStore.works;
const work = works[route.params.index];
const imgList = works.filter(w => w.group === work.group).map(item => item.image);
const onImageSelect = (selectedImage) => {
  console.log('Selected:', selectedImage);
};
</script>

<style scoped>
.page-wrapper {
  margin: 50px 40px 60px;
  .images-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
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
      font-family: LetterGothicStd, sans-serif;
      font-weight: bold;
      font-size: 0.7rem;
      text-align: justify;
    }
  }
}
</style>
