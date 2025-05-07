<template>
  <div class="work-tile">
    <div class="work-tile__image">
      <img :src="image" :alt="title" />
    </div>
    <div class="work-tile__content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
</script>

<style>
.work-tile {
  display: flex;
  flex-direction: column;
  //border: 1px solid #ccc;
  overflow: hidden;
  transition: transform 0.3s;
  width: 300px;
  height: 300px;

  &:hover {
    transform: scale(1.05);
  }

  .work-tile__image {
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .work-tile__content {
    padding: 16px;

    h2 {
      margin: 0;
      font-size: 1.5em;
    }

    p {
      margin-top: 8px;
      font-size: 1em;
      color: #666;
    }
  }
}
</style>
