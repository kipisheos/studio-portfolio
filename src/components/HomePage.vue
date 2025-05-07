<template>
  <div class="main-tag-line" ref="textRef">
    A thought-leading design art director shaping meaningful experiences through curiosity, bold thinking and playfulness with a multidisciplinary practice across industrial design, branding, web engineering and digital innovation<span class="blinking-cursor">|</span>
  </div>
  <div class="work-tiles">
    <work-tile
      v-for="(work, index) in filterWorks"
      :key="index"
      :title="work.title"
      :description="work.description"
      :image="work.image"
    />
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount, computed} from 'vue'
import WorkTile from "@/components/WorkTile.vue";
import {useWorksStore} from "@/stores/works.ts";

useWorksStore();
const worksStore = useWorksStore();
const works = worksStore.works;

const filterWorks = computed(() => {
  return works && works.filter(work => work.tags.includes(currentSelection.value));
});

const textRef = ref(null)
const currentSelection = ref('INITIAL_VALUE_!@#$%^&*()');

const handleMouseUp = () => {
  const selection = window.getSelection()
  const selectedText = selection.toString().trim()

  if (selectedText && textRef.value.contains(selection.anchorNode)) {
    console.log('Selected text:', selectedText)
    // 🔁 Your custom logic here
    currentSelection.value = selectedText;
  }
}

onMounted(() => {
  document.addEventListener('mouseup', handleMouseUp)
})

onBeforeUnmount(() => {
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>

<style>
.main-tag-line {
  font-family: LetterGothicStd, sans-serif;
  font-size: 1.5rem;
  margin: 10rem;
  text-align: justify;
  line-height: 34px;
  width: 808px;
}
.main-tag-line::selection {
  background: #ffeb3b;
  color: black;
  text-shadow:
    1px 0 black,
    -1px 0 black,
    0 1px black,
    0 -1px black;
}
.blinking-cursor {
  display: inline-block;
  animation: blink 1s steps(1) infinite;
  color: black;
  user-select: none;     /* Prevents text selection */
  pointer-events: none;  /* Prevents hover/click interaction */
}

/* Blinking animation */
@keyframes blink {
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
}

.work-tiles {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>


<!--<template>-->
<!--  <div class="floating-wrapper" ref="wrapperRef">-->
<!--    <div class="main-tag-line" ref="textRef">-->
<!--      A thought-leading design art director shaping meaningful experiences through curiosity, bold thinking and playfulness with a multidisciplinary practice across industrial design, branding, web engineering and digital innovation<span class="blinking-cursor">|</span>-->
<!--    </div>-->

<!--    <div-->
<!--      v-for="(item, index) in floatingWorks"-->
<!--      :key="index"-->
<!--      class="floating-work"-->
<!--      :style="{ top: item.y + 'px', left: item.x + 'px' }"-->
<!--    >-->
<!--      <work-tile-->
<!--        :title="item.title"-->
<!--        :description="item.description"-->
<!--        :image="item.image"-->
<!--      />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->


<!--<script setup lang="ts">-->
<!--import { ref, onMounted, onBeforeUnmount, watch, computed, reactive } from 'vue'-->
<!--import WorkTile from "@/components/WorkTile.vue"-->
<!--import { useWorksStore } from "@/stores/works.ts"-->

<!--const wrapperRef = ref<HTMLElement | null>(null)-->
<!--const textRef = ref<HTMLElement | null>(null)-->
<!--const currentSelection = ref('INITIAL_VALUE_!@#$%^&*()')-->

<!--const worksStore = useWorksStore()-->
<!--const works = worksStore.works-->

<!--const filterWorks = computed(() =>-->
<!--  works?.filter(work => work.tags.includes(currentSelection.value))-->
<!--)-->

<!--const floatingWorks = reactive([])-->

<!--const boxSize = 200-->
<!--let animationFrame: number-->

<!--const initFloating = (filtered) => {-->
<!--  floatingWorks.length = 0-->
<!--  const wrapper = wrapperRef.value-->
<!--  const width = wrapper?.offsetWidth || window.innerWidth-->
<!--  const height = wrapper?.offsetHeight || window.innerHeight-->

<!--  filtered.forEach((work) => {-->
<!--    floatingWorks.push({-->
<!--      ...work,-->
<!--      x: Math.random() * (width - boxSize),-->
<!--      y: Math.random() * (height - boxSize),-->
<!--      dx: (Math.random() - 0.5) * 2.5,-->
<!--      dy: (Math.random() - 0.5) * 2.5,-->
<!--    })-->
<!--  })-->
<!--}-->

<!--const animate = () => {-->
<!--  const wrapper = wrapperRef.value-->
<!--  const width = wrapper?.offsetWidth || window.innerWidth-->
<!--  const height = wrapper?.offsetHeight || window.innerHeight-->

<!--  floatingWorks.forEach(item => {-->
<!--    item.x += item.dx-->
<!--    item.y += item.dy-->

<!--    if (item.x <= 0 || item.x >= width - boxSize) item.dx *= -1-->
<!--    if (item.y <= 0 || item.y >= height - boxSize) item.dy *= -1-->
<!--  })-->

<!--  animationFrame = requestAnimationFrame(animate)-->
<!--}-->

<!--const handleMouseUp = () => {-->
<!--  const selection = window.getSelection()-->
<!--  const selectedText = selection?.toString().trim()-->
<!--  if (selectedText && textRef.value?.contains(selection.anchorNode)) {-->
<!--    currentSelection.value = selectedText-->
<!--  }-->
<!--}-->

<!--onMounted(() => {-->
<!--  document.addEventListener('mouseup', handleMouseUp)-->
<!--  initFloating(filterWorks.value)-->
<!--  animate()-->
<!--})-->

<!--onBeforeUnmount(() => {-->
<!--  cancelAnimationFrame(animationFrame)-->
<!--  document.removeEventListener('mouseup', handleMouseUp)-->
<!--})-->

<!--watch(filterWorks, (newFiltered) => {-->
<!--  initFloating(newFiltered)-->
<!--})-->
<!--</script>-->


<!--<style scoped>-->
<!--.floating-wrapper {-->
<!--  position: relative;-->
<!--  width: 100%;-->
<!--  min-height: 100vh;-->
<!--  overflow: hidden;-->
<!--}-->

<!--.main-tag-line {-->
<!--  font-family: LetterGothicStd, sans-serif;-->
<!--  font-size: 1.5rem;-->
<!--  margin: 10rem auto 4rem;-->
<!--  text-align: justify;-->
<!--  line-height: 34px;-->
<!--  width: 808px;-->
<!--  position: relative;-->
<!--  z-index: 3;-->
<!--}-->

<!--.main-tag-line::selection {-->
<!--  background: #ffeb3b;-->
<!--  color: black;-->
<!--  text-shadow:-->
<!--    1px 0 black,-->
<!--    -1px 0 black,-->
<!--    0 1px black,-->
<!--    0 -1px black;-->
<!--}-->

<!--.blinking-cursor {-->
<!--  display: inline-block;-->
<!--  animation: blink 1s steps(1) infinite;-->
<!--  color: black;-->
<!--  user-select: none;-->
<!--  pointer-events: none;-->
<!--}-->

<!--@keyframes blink {-->
<!--  0%, 50% { opacity: 1; }-->
<!--  50.01%, 100% { opacity: 0; }-->
<!--}-->

<!--.floating-work {-->
<!--  position: absolute;-->
<!--  width: 200px;-->
<!--  height: auto;-->
<!--  z-index: 2;-->
<!--  pointer-events: none; /* allow clicks to pass through */-->
<!--}-->
<!--</style>-->

