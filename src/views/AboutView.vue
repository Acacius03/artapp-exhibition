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
      <p>
        <i>
          <strong>"Pearl of the Orient: Filipino by Nature"</strong>
        </i>
        is our love letter to the soul of the Philippines — vibrant, proud, and unstoppable. This
        isn't just an exhibit. It's a celebration. A heartbeat. A mirror held up to who we are —
        shaped by islands, woven by stories, and powered by a spirit that never backs down.
      </p>
      <p>
        Being Filipino isn't just in our blood — it's in our laugh, our grit, our fiesta spirit.
        It's in the way we dance through storms, find beauty in struggle, and keep our culture alive
        through every song, story, and shared meal. From bold traditions to everyday triumphs,
        Filipino by Nature brings together the threads that make us who we are — fierce, joyful,
        creative, and endlessly proud.
      </p>
      <p>
        Step into our story. Feel the rhythm. Celebrate your roots. Because being Filipino? It's not
        just what we are. It's how we live.
      </p>
    </section>
    <RouterLink to="home" class="fab">
      <IconArrowRight />
    </RouterLink>
    <footer id="footer">
      <p>
        Image Use Disclaimer: The images of artworks displayed on this website are used for
        informational, educational, and non-commercial purposes only, as part of a virtual
        exhibition. All rights to the artworks remain with the original artists, copyright holders,
        or contributing institutions.
      </p>
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
  gap: 1rem;
}
#footer {
  border-top: 1px solid #ccc;
}
#footer p {
  text-align: center;
  font-size: 0.9rem;
  color: #777;
  padding: 0.5rem;
}
h1 {
  font-family: 'Love Light', cursive;
  font-size: 4rem;
}

section p {
  margin-block: 0.5rem;
  font-size: 1.25rem;
  text-indent: 1rem;
  font-weight: 500;
}
.fab {
  margin-top: auto;
  margin-left: auto;
}
</style>
