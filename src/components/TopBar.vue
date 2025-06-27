<template>
  <div class="site-header">
    <div class="top-bar">
      <RouterLink to="/">
        <img class="logo" src="../assets/logo.png" alt="Logo" />
      </RouterLink>

      <div class="routing-links">
        <RouterLink to="/works">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.5);
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 60px;
  padding: 0 3em;
  @media (max-width: 768px) {
    padding: 0 1em;
  }

  .logo {
    height: 14px;
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
      color: grey;
    }
  }
}
</style>
