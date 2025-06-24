<template>
  <div class="top-bar">
    <RouterLink to="/">
      <img class="logo" src="../assets/logo.png" alt="Logo" />
    </RouterLink>

    <div class="routing-links">
      <RouterLink to="/works">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 20px;
  }
}
.routing-links {
  display: flex;
  gap: 20px;
  font-size: 14px;
  font-weight: bold;
  a {
    color: black;
    text-decoration: none;
    &:hover {
      color: pink;
    }
  }
}
</style>
