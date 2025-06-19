<template>
  <div class="carousel">
    <button @click="scrollUp" :disabled="startIndex === 0" class="arrow" v-html="chevronUp" />


    <div class="carousel-list">
      <div
        v-for="(img, i) in visibleImages"
        :key="i + startIndex"
        class="carousel-item"
        :class="{ selected: i + startIndex === selectedIndex }"
        @click="selectImage(i + startIndex)"
      >
        <img :src="img" alt="carousel image" />
      </div>
    </div>

    <button @click="scrollDown" :disabled="startIndex + visibleCount >= images.length" class="arrow" v-html="chevronDown" />
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['select']);

const visibleCount = 4;
const startIndex = ref(0);
const selectedIndex = ref(0);

const visibleImages = computed(() =>
  props.images.slice(startIndex.value, startIndex.value + visibleCount)
);

const scrollUp = () => {
  if (startIndex.value > 0) startIndex.value--;
};

const scrollDown = () => {
  if (startIndex.value + visibleCount < props.images.length) startIndex.value++;
};

const selectImage = (index) => {
  selectedIndex.value = index;
};

watch(selectedIndex, (newIndex) => {
  emit('select', props.images[newIndex]);
});

const chevronUp = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
     stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 15 12 9 18 15" />
</svg>
`;

const chevronDown = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
     stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 9 12 15 18 9" />
</svg>
`;
</script>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}

button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
}
button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-list {
  display: flex;
  flex-direction: column;
  height: 4 * 80px;
  overflow: hidden;
}

.carousel-item {
  height: 80px;
  width: 100%;
  margin: 2px 0;
  border: 2px solid transparent;
  cursor: pointer;
}
.carousel-item.selected {
  border-color: white;
}
.carousel-item img {
  height: 80px;
  width: 150px;
  object-fit: cover;
}

</style>
