<template>
  <div v-if="!isTeleport" class="work-tile">
    <div class="work-tile__content">
      <div class="image-container">
        <img
          class="work-image"
          :style="imageStyle"
          :src="work?.image"
          :alt="projectInfo?.title"
          @click="navigateToWorkPage"
        />
      </div>
      <div>{{ projectInfo?.title }}</div>
    </div>
  </div>
  <!-- Image portal / floating image -->
  <teleport v-else to="body">
    <div class="floating-image" ref="imageRef">
      <img :src="work.image" :alt="projectInfo?.title" @click="navigateToWorkPage"/>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount, watchEffect, computed,type PropType} from 'vue'
import { gsap } from 'gsap'
import { useRouter } from "vue-router";
import type {IProjectInfo, IWork} from "@/types.ts";

const router = useRouter();
const props = defineProps({
  work: {
    type: Object as PropType<IWork>,
    required: true,
  },
  projectInfo: {
    type: Object as PropType<IProjectInfo>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  isHovering: Boolean,
  withText: Boolean,
  isTeleport: {
    type: Boolean,
    default: false,
  },
})

// const isHovering = toRef(props, 'isHovering') // ✅ make it reactive

const imageRef = ref()
const directions = [
  { x: -400, y: -100 }, // left
  { x: 2800, y: 1300 },  // right
  { x: 0, y: -300 },   // top
]
const entry = directions[props.index % directions.length]

const timelineRef = ref<gsap.core.Timeline | null>(null)

const imageStyle = computed(() => {
  const imgStyle = props.work?.imageStyle;
  const position = imgStyle?.tile ? `object-position: ${imgStyle.tile.x}% ${imgStyle.tile.y}%` : '';
  const scale = imgStyle?.tile ? `scale: ${imgStyle.tile.scale}%` : '';
  return `${position}; ${scale}`;
})

onMounted(() => {
  gsap.set(imageRef.value, {
    x: entry.x,
    y: entry.y,
    opacity: 0,
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: 9999,
    width: '200px',
  })
})

watchEffect(() => {
  if (!imageRef.value) return

  if (!timelineRef.value) {
    timelineRef.value = gsap.timeline({ paused: true })
      .fromTo(imageRef.value,
        {
          x: entry.x,
          y: entry.y,
          opacity: 0,
        },
        {
          ...props.work.location,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      )
  }

  if (props.isHovering) {
    timelineRef.value.play()
  } else {
    timelineRef.value.reverse()
  }
})

onBeforeUnmount(() => {
  if (timelineRef.value) {
    timelineRef.value.kill()
    timelineRef.value = null
  }
})

const navigateToWorkPage = () => {
  // Navigate to the single work page
  router.push({ name: 'SingleWorkPage', params: { projectGroup: props.projectInfo?.group } })
}
</script>

<style scoped>
.work-tile {
  .image-container {
    width: 400px;
    height: 270px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .work-image {
    width: 400px;
    height: 270px;
    object-fit: cover;
  }
  .work-tile__content {
    font-size: 12px;
  }
}

.floating-image {
  position: fixed;
  cursor: pointer;
}

.floating-image img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
