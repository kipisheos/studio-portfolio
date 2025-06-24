<template>
  <div class="wrapper">
    <div class="main-tag-line" ref="textRef" v-html="animatedHtml"/>
    <div class="work-tiles">
      <work-tile
        v-for="(work, index) in works"
        :key="index"
        :work="work"
        :index="index"
        :is-hovering="testIsHovering(work)"
        :is-teleport="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from 'vue'
import WorkTile from "@/components/WorkTile.vue";
import {useWorksStore} from "@/stores/works.ts";
import type {IWork} from "@/types.ts";

useWorksStore();
const worksStore = useWorksStore();
const works = worksStore.works;

const testIsHovering = (work: IWork) => {
  return work.tags.some(tag => currentSelection.value.includes(tag));
}

const textRef = ref<HTMLElement | null>(null);
const currentSelection = ref<string>('INITIAL_VALUE_!@#$%^&*()');
const originalText = `A thought-leading <span class="highlight-word">design art director</span> shaping meaningful experiences through curiosity, bold thinking and playfulness with a multidisciplinary practice across industrial design, branding, web engineering and digital innovation<span class="blinking-cursor">|</span>`;
const animatedHtml = ref<string>(originalText);
const userInteracting = ref<boolean>(false);

const handleMouseUp = () => {
  const selection = window.getSelection();
  const selectedText = selection?.toString().trim();

  if (selectedText && selection && textRef.value?.contains(selection?.anchorNode)) {
    console.log('Selected text:', selectedText)
    currentSelection.value = selectedText;
  } else {
    currentSelection.value = 'INITIAL_VALUE_!@#$%^&*()'; // Reset if not a valid selection
  }
  userInteracting.value = false;
}

const handleMouseDown = () => {
  userInteracting.value = true;
}

onMounted(() => {
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('mousedown', handleMouseDown);
  setTimeout(() => {
    animateTextSelection();
  }, 1000);
})

onBeforeUnmount(() => {
  document.removeEventListener('mouseup', handleMouseUp);
})
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
    if (userInteracting.value) {
      // If user is interacting, stop the animation
      return;
    }
    if (currentEnd > end) {
      // timeout and clear
      setTimeout(() => {
        selection.removeAllRanges();
        currentSelection.value = 'INITIAL_VALUE_!@#$%^&*()';
      }, 1000);
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

.highlight-word {
  position: relative;
  display: inline-block;
  color: black; /* text color */
  z-index: 1; /* above the highlight bar */
}
</style>

