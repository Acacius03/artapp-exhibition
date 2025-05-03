<script setup lang="js">
import { RouterLink } from 'vue-router'
import IconArrowRight from '../components/icons/IconArrowRight.vue'
</script>
<template>
  <main class="screen">
    <section>
      <header>
        <h1>Overview</h1>
      </header>
      <article>
        <p>
          <em>Pearl of the Orient: Filipino by Nature</em> is a love letter to who we are — shaped
          by our islands, our stories, and our unbreakable spirit.
        </p>
        <p>
          It shows that being Filipino isn’t just in our blood; it’s in the way we honor our roots,
          celebrate life, and create beauty out of every struggle.
        </p>
      </article>
    </section>

    <RouterLink to="home" class="fab">
      <IconArrowRight />
    </RouterLink>
  </main>
</template>

<style scoped>
.screen {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  line-height: 1.6;
}

h1 {
  font-family: 'Love Light', cursive;
  font-size: 4rem;
}

em {
  font-style: italic;
  font-weight: bold;
}

p {
  margin-block: 0.5rem;
  font-size: 1.25rem;
  text-indent: 1rem;
}

.fab {
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  margin-top: auto;
  margin-left: auto;
}
</style>
