<script setup lang="ts">
import {RouterView} from "vue-router";
import TopBar from "@/components/TopBar.vue";
</script>

<template>
  <main>
    <top-bar />
    <RouterView />
  </main>
</template>
