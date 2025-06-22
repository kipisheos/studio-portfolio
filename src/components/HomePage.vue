<template>
  <div class="wrapper">
    <div class="main-tag-line" ref="textRef">
      A thought-leading design art director shaping meaningful experiences through curiosity, bold thinking and playfulness with a multidisciplinary practice across industrial design, branding, web engineering and digital innovation<span class="blinking-cursor">|</span>
    </div>
    <div class="work-tiles">
      <work-tile
        v-for="(work, index) in works"
        :key="index"
        :work="work"
        :index="index"
        :is-hovering="work.tags.includes(currentSelection)"
        :is-teleport="true"
      />
    </div>
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
  // return works;
});

const textRef = ref<HTMLElement | null>(null);
const currentSelection = ref('INITIAL_VALUE_!@#$%^&*()');

const handleMouseUp = () => {
  const selection = window.getSelection();
  const selectedText = selection?.toString().trim();

  if (selectedText && selection && textRef.value?.contains(selection?.anchorNode)) {
    console.log('Selected text:', selectedText)
    currentSelection.value = selectedText;
  } else {
    currentSelection.value = 'INITIAL_VALUE_!@#$%^&*()'; // Reset if not a valid selection
  }
}

onMounted(() => {
  document.addEventListener('mouseup', handleMouseUp)
})

onBeforeUnmount(() => {
  document.removeEventListener('mouseup', handleMouseUp);
})
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

</style>

