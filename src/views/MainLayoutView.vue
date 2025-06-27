<script setup lang="ts">
import {RouterView} from "vue-router";
import TopBar from "@/components/TopBar.vue";
</script>

<template>
  <top-bar />
  <RouterView class="main-layout"/>
</template>

<style scoped>
.main-layout {
  position: absolute;
  top: 60px;
  max-width: 1400px;
  justify-self: anchor-center;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
