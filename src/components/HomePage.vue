<template>
  <div class="wrapper">
    <div class="tagline-container">
      <div class="main-tag-line" ref="textRef" v-html="originalText" />
      <div v-if="isAnimating" class="explanation">
        <img class="explanation-text" src="@/assets/home-page-animation/text.svg" />
        <img class="explanation-line" src="@/assets/home-page-animation/line.svg" />
      </div>
    </div>

    <div class="work-tiles">
      <work-tile
        v-for="(work, index) in works"
        :key="index"
        :work="work.work"
        :project-info="work.projectInfo"
        :index="index"
        :is-hovering="testIsHovering(work.work)"
        :is-teleport="true"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from 'vue'
import WorkTile from "@/components/WorkTile.vue";
import {useWorksStore} from "@/stores/works.ts";
import type {IMainWork, IWork} from "@/types.ts";

useWorksStore();
const worksStore = useWorksStore();
const works: IMainWork[] = worksStore.floatingWorks;

const testIsHovering = (work: IWork) => {
  return work.tags?.some(tag => currentSelection.value.includes(tag));
}

const textRef = ref<HTMLElement | null>(null);
const currentSelection = ref<string>('INITIAL_VALUE_!@#$%^&*()');
const originalText = `A thought-leading <span class="highlight-word">design art director</span> shaping meaningful experiences through curiosity, bold thinking and playfulness with a multidisciplinary practice across industrial design, branding, web engineering and digital innovation<span class="blinking-cursor">|</span>`;
const userInteracting = ref<boolean>(false);
const isAnimating = ref<boolean>(false);
const timeoutId = ref<number | null>(null);

const handleMouseUp = () => {
  const selection = window.getSelection();
  const selectedText = selection?.toString().trim();

  if (selectedText && selection && textRef.value?.contains(selection?.anchorNode)) {
    currentSelection.value = selectedText;
    userInteracting.value = true;
    isAnimating.value = false;
    clearInterval(timeoutId.value as number); // Clear any existing timeout
  } else {
    currentSelection.value = 'INITIAL_VALUE_!@#$%^&*()'; // Reset if not a valid selection
    isAnimating.value = false;
    if (!isAnimating.value) {
      startTimeoutForAnimation();
    }
  }
  userInteracting.value = false;
}

const handleMouseDown = () => {
  userInteracting.value = true;
}

onMounted(() => {
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('mousedown', handleMouseDown);
  startTimeoutForAnimation(1500);
})

onBeforeUnmount(() => {
  document.removeEventListener('mouseup', handleMouseUp);
})

const startTimeoutForAnimation = (timeout: number = 4000) => {
  timeoutId.value = setTimeout(() => {
    animateTextSelection();
  }, timeout);
}

const animateTextSelection = () => {
  const el = textRef.value;
  if (!el) return;

  const selection = window.getSelection();
  if (!selection) return;

  const textNode = el.firstChild;
  if (!textNode || textNode.nodeType !== Node.TEXT_NODE) return;

  const start = 2; // where animation starts
  const end = 17;  // where animation ends
  let currentEnd = start + 1;

  const range = document.createRange();

  const step = () => {
    isAnimating.value = true;
    if (userInteracting.value) {
      // If user is interacting, stop the animation
      console.log('User is interacting, stopping animation');
      isAnimating.value = false;
      return;
    }
    if (currentEnd > end) {
      console.log('Animation complete');
      // timeout and clear
      // setTimeout(() => {
      //   selection.removeAllRanges();
      //   currentSelection.value = 'INITIAL_VALUE_!@#$%^&*()';
      //   isAnimating.value = false;
      // }, 2000);
      // isAnimating.value = false;
      return;
    }

    range.setStart(textNode, start);
    range.setEnd(textNode, currentEnd);
    selection.removeAllRanges();
    selection.addRange(range);

    // currentSelection.value = range.toString();

    setTimeout(() => {
      currentEnd++;
      step();
    }, 40);
  };

  step();
};

</script>

<style scoped>
.wrapper {
  display: flex;
  height: 80vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.main-tag-line {
  font-family: LetterGothicStd, sans-serif;
  font-size: 1.5rem;
  text-align: justify;
  line-height: 34px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 28px;
  }
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
:deep(.blinking-cursor) {
  display: inline-block;
  animation: blink 1s steps(1) infinite;
  color: black;
  user-select: none;
  pointer-events: none;
}

/* Blinking animation */
@keyframes blink {
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
}

.highlight-word {
  position: relative;
  display: inline-block;
  color: black; /* text color */
  z-index: 1; /* above the highlight bar */
}
.explanation {
  position: absolute;
  top: -106px;
  left: -30px;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: auto;
  gap: 4px;
  .explanation-text {
    width: 200px;
    margin: 0 auto;
  }
  .explanation-line {
    width: 24px;
    margin-left: 10%;
  }
}

.tagline-container {
  position: relative;
  display: inline-block; /* Or block, depending on layout */
  width: 70%;
}

</style>

