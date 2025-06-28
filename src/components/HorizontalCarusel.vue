<template>
  <div class="mobile-slider">
    <div
      class="mobile-slider__images"
      ref="scrollContainer"
      @scroll="onScroll"
    >
      <div
        v-for="(img, index) in images"
        :key="index"
        class="mobile-slider__image-wrapper"
      >
        <img
          class="mobile-slider__img"
          :src="img"
          :alt="'Work image ' + index"
        />
      </div>
    </div>
    <div class="dots">
      <span
        v-for="(img, index) in images"
        :key="index"
        class="dot"
        :class="{ active: index === currentIndex }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {PropType, ref} from 'vue';

defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true
  }
});

const currentIndex = ref(0);
const scrollContainer = ref<HTMLDivElement | null>(null);

const onScroll = () => {
  if (!scrollContainer.value) return;
  const scrollLeft = scrollContainer.value.scrollLeft;
  const width = scrollContainer.value.offsetWidth;
  currentIndex.value = Math.round(scrollLeft / width);
};
</script>

<style scoped>
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
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #000;
}
</style>
