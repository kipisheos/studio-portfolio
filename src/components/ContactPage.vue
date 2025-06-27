<template>
    <div class="contact-page-container">
      <div class="content-container">
        <div class="title">contact</div>
        <div
          class="email-btn"
          @click="openEmail"
        >
          EMAIL
        </div>
        <div class="phone">Phone +972 50 857 6661</div>
      </div>
    </div>
</template>


<script setup lang="ts">
const openEmail = () => {
  window.location.href = "mailto:talschott23@gmail.com";
}
</script>

<style scoped>
.contact-page-container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 1.5em;
      margin-bottom: 56px;
    }

    .email-btn {
      background-color: black;
      width: 100px;
      height: 40px;
      color: white;
      align-content: center;
      text-align: center;
      margin-bottom: 16px;
      cursor: pointer;
    }

    .phone {

    }
  }
}
</style>

