<template>
  <div class="top-bar">
    <img class="logo" src="../assets/logo.png" alt="Logo" />
    <div class="routing-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/work">Work</RouterLink>
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
  font-size: 20px;
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
