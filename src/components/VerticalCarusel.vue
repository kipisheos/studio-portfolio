<template>
  <div class="carousel">
    <button @click="scrollUp" class="arrow" v-html="chevronUp" />

    <div ref="listRef" class="carousel-list">
      <div
        v-for="(img, i) in props.images"
        :key="i"
        class="carousel-item"
        :class="{ selected: i === selectedIndex }"
        @click="selectImage(i)"
      >
        <img :src="img" alt="carousel image" />
      </div>
    </div>

    <button @click="scrollDown" class="arrow" v-html="chevronDown" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type PropType } from 'vue';

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true
  }
});

const emit = defineEmits(['select']);

const selectedIndex = ref(0);
const listRef = ref<HTMLElement | null>(null);
const itemHeight = 80 + 4; // image height + vertical margin (2px top & bottom)
const visibleCount = 4;

const scrollUp = () => {
  if (listRef.value) {
    listRef.value.scrollTop -= itemHeight;
  }
};

const scrollDown = () => {
  if (listRef.value) {
    listRef.value.scrollTop += itemHeight;
  }
};

const selectImage = (index: number) => {
  selectedIndex.value = index;
};

watch(selectedIndex, (newIndex) => {
  emit('select', newIndex);
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
  height: calc(4 * 80px); /* visibleCount * itemHeight */
  overflow-y: auto;
  scrollbar-width: thin;
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
  background: #f5f5f5;
}
</style>
