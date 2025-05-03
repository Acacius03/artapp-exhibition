<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const transitionName = computed(() => route.meta.transition || 'fade')
</script>

<template>
  <Transition :name="transitionName" mode="out-in">
    <RouterView />
  </Transition>
</template>

<style scoped>
/* Slide-left */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease;
  position: absolute;
  width: 100%;
}
.slide-left-enter-from {
  transform: translateX(-100%);
}
.slide-left-leave-to {
  transform: translateX(100%);
}

/* Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide-Up Animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
  position: absolute;
  width: 100%;
}
.slide-up-enter-from {
  transform: translateY(100%);
}
.slide-up-leave-to {
  transform: translateY(-100%);
}
</style>
