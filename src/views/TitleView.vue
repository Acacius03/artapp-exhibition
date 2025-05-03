<script setup></script>

<template>
  <main
    @click="
      () => {
        $router.push('about')
      }
    "
    class="screen"
  >
    <div id="title">
      <h1 class="love-light-regular">Pearl of The Orient : Filipino by Nature</h1>
      <small>by Cup of Kups</small>
    </div>
  </main>
</template>

<style scoped>
.screen {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
#title {
  text-align: center;
}
#title h1 {
  font-family: 'Love Light', cursive;
  font-size: 3rem;
  font-weight: bolder;
}
#title small {
  font-size: 1rem;
  font-weight: 600;
}
</style>
