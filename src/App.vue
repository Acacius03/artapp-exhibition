<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const transitionName = computed(() => route.meta.transition || 'fade')
</script>

<template>
  <!-- <Transition :name="transitionName" mode="out-in">
    <RouterView />
  </Transition> -->

  <router-view v-slot="{ Component }">
    <transition :name="transitionName" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
/* Slide-left */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
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
  transition: opacity 1000ms ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide-Up Animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
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
