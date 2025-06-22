<template>
  <div v-if="!isTeleport" class="work-tile">
    <div class="work-tile__content">
      <img class="work-image" :src="work.image" :alt="work.title" @click="navigateToWorkPage"/>
      <div>{{ work.title }}</div>
    </div>
  </div>
  <!-- Image portal / floating image -->
  <teleport v-else to="body">
    <div class="floating-image" ref="imageRef">
      <img :src="work.image" :alt="work.title" @click="navigateToWorkPage"/>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue'
import { gsap } from 'gsap'
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  work: {
    type: Object,
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
  router.push({ name: 'SingleWorkPage', params: { title: props.work.group, index: props.index } })
}
</script>

<style scoped>
.work-tile {
  .work-image {
    width: 300px;
    height: 180px;
    object-fit: cover;
    cursor: pointer;
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
