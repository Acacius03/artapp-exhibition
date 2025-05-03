<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  src: String,
  width: Number,
  height: Number,
  page: {
    type: String,
    default: 'home',
  },
})
</script>
<template>
  <div class="gallery-item-container">
    <RouterLink :to="page" class="gallery-item">
      <img :src="src" alt="image" :width="width" :height="height" />
    </RouterLink>
  </div>
</template>

<style scoped>
.gallery-item-container {
  padding: 0.25rem;
}
.gallery-item {
  z-index: 50;
  background-color: white;
  display: block;
  box-shadow: 0 0 0.25rem black;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0.25rem;
  transition: all 600ms ease-out;
}
.gallery-item:hover {
  scale: 1.05;
}
@media (max-width: 640px) {
  #gallery-layout {
    column-count: 2;
    gap: 0;
  }
  .gallery-item img {
    height: 100%;
    max-height: unset;
  }
}
@media (min-width: 640px) {
  .gallery-item img {
    object-fit: cover;
    object-position: center;
  }
}
</style>
