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
          <em>Pearl of the Orient: Filipino by Nature</em> is our love letter to the soul of the
          Philippines — vibrant, proud, and unstoppable. This isn’t just an exhibit. It’s a
          celebration. A heartbeat. A mirror held up to who we are — shaped by islands, woven by
          stories, and powered by a spirit that never backs down.
        </p>
        <p>
          Being Filipino isn’t just in our blood — it’s in our laugh, our grit, our fiesta spirit.
          It’s in the way we dance through storms, find beauty in struggle, and keep our culture
          alive through every song, story, and shared meal. From bold traditions to everyday
          triumphs, Filipino by Nature brings together the threads that make us who we are — fierce,
          joyful, creative, and endlessly proud.
        </p>
        <p>
          Step into our story. Feel the rhythm. Celebrate your roots. Because being Filipino? It’s
          not just what we are. It’s how we live.
        </p>
      </article>
    </section>
    <RouterLink to="home" class="fab">
      <IconArrowRight />
    </RouterLink>
    <footer id="credits">
      <p>
        Virtual Exhibit created by: <strong>Krishelle Ann Barbin</strong>,
        <strong>Felix Erickson De Loyola</strong>, <strong>Rainisia Macabangkit</strong>,
        <strong>Diana Rose Maraña</strong> and <strong>Normay Pangan</strong>
      </p>
    </footer>
  </main>
</template>

<style scoped>
.screen {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  line-height: 1.6;
  overflow: auto;
}
#credits {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #ccc;
  text-align: center;
  font-size: 0.9rem;
  color: #555;
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
  font-weight: 500;
}
.fab {
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  margin-top: auto;
  margin-left: auto;
}
</style>
