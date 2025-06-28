<template>
  <div class="page-wrapper">
    <div v-if="!isMobile" class="images-wrapper">
      <div class="image-container">
        <img
          class="main-img-style"
          :src="work.image"
          :alt="project.title"
          :style="imageStyle"
        />
      </div>
      <vertical-carusel
        v-if="works.length > 1"
        :images="works.map(work => work.image)"
        @select="onImageSelect"
      />
      <div v-else class="placeholder"></div>
    </div>

    <horizontal-carusel
      v-else
      :images="works.map(work => work.image)"
    />

    <!-- Description content -->
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
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import VerticalCarusel from '@/components/VerticalCarusel.vue';
import HorizontalCarusel from '@/components/HorizontalCarusel.vue';
import { useWorksStore } from '@/stores/works.js';
import type { IProject, IWork } from '@/types.ts';

const route = useRoute();
useWorksStore();
const worksStore = useWorksStore();
const project: IProject = worksStore.getProjectByGroup(route.params.projectGroup as string);
const works: IWork[] = project.works;
const work = ref<IWork>(works[0]);

const isMobile = ref(false);

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const onImageSelect = (newIndex: unknown) => {
  work.value = works[Number(newIndex)];
};

const imageStyle = computed(() => {
  const imgStyle = work.value?.imageStyle;
  const position = imgStyle?.full ? `object-position: ${imgStyle.full.x}% ${imgStyle.full.y}%` : '';
  const scale = imgStyle?.full ? `scale: ${imgStyle.full.scale}%` : '';
  return `${position}; ${scale}`;
});
</script>

<style scoped>
.page-wrapper {
  margin: 100px 40px 60px 10%;
}

.images-wrapper {
  display: flex;
  align-items: flex-start;

  .image-container {
    width: 700px;
    height: 400px;
    position: relative;
    cursor: pointer;
    background-color: #f5f5f5;
    margin-bottom: 5px;
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

.placeholder {
  width: 200px;
}

/* Responsive logic */
.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  .images-wrapper {
    display: none; /* hide entire desktop layout in mobile */
  }

  .work-tile__content {
    width: 100%;
    padding: 0 10px;
  }

  .mobile-slider__images {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .mobile-slider__images::-webkit-scrollbar {
    display: none;
  }

  .mobile-slider__image-wrapper {
    flex: 0 0 100%;
    scroll-snap-align: center;
    position: relative;
  }

  .mobile-slider__img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .dots {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }

  .dot {
    width: 8px;
    height: 8px;
    margin: 0 5px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
  }

  .dot.active {
    background-color: #000;
  }
}

</style>
