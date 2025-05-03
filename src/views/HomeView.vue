<script setup>
import { ref } from 'vue'

import IconInfo from '../components/icons/IconInfo.vue'

import GalleryItem from '../components/GalleryItem.vue'
import BottomSheet from '../components/BottomSheet.vue'

import artworkList from '../data'

const selectedArtwork = ref(null)
const onGalleryItemClick = (index) => {
  if (index >= 0 && index < artworkList.length) {
    selectedArtwork.value = artworkList[index]
  }
}
</script>
<template>
  <main class="screen">
    <section id="title">
      <h1>Welcome</h1>
      <RouterLink to="about" class="fab">
        <IconInfo />
      </RouterLink>
    </section>

    <section id="gallery">
      <div id="gallery-layout">
        <GalleryItem
          v-for="(artwork, index) in artworkList"
          :key="index"
          :id="`img${index + 1}`"
          :src="artwork.img"
          :width="artwork.width || 300"
          :height="artwork.height || 300"
          @click="onGalleryItemClick(index)"
        />
      </div>
    </section>
    <BottomSheet v-if="selectedArtwork" @close="selectedArtwork = null" :startHeight="100">
      <div id="showcase-image-container">
        <img
          :src="selectedArtwork.img"
          alt="image"
          :width="selectedArtwork.width"
          :height="selectedArtwork.height"
        />
      </div>
      <div id="showcase-info">
        <h1>{{ selectedArtwork.title }}</h1>
        <small>By {{ selectedArtwork.artist }}</small>
        <div id="other-info">
          <p><strong>Medium:</strong> {{ selectedArtwork.medium }}</p>
          <p><strong>Year:</strong> {{ selectedArtwork.year }}</p>
        </div>
        <h3>Curator's Note:</h3>
        <p id="curators-note">{{ selectedArtwork.curatorsNote }}</p>
      </div>
    </BottomSheet>
  </main>
</template>

<style scoped>
.screen {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  line-height: 1.6;
}
#title {
  display: flex;
  justify-content: space-between;
}
#title h1 {
  font-family: 'Love Light', cursive;
  font-size: 4rem;
}
.fab {
  width: 3rem;
  height: 3rem;
  padding: 0.75rem;
  margin-top: 1.25rem;
  margin-right: 1.25rem;
}
#gallery {
  flex-grow: 1;
}
#showcase-image-container {
  position: relative;
  animation: drop 300ms forwards;
  background-color: white;
  height: 400px;
  padding: 1rem;
  border: 1px solid black;
  box-shadow: 0 0 0.25rem black;
}
#showcase-image-container img {
  background-color: white;
  box-shadow: inset 0 0 0.25rem black;
  padding: 1px;
  object-fit: cover;
}
#showcase-info {
  padding: 1.5rem 2rem;
  font-weight: 500;
}
#showcase-info h1 {
  font-size: 4rem;
  font-family: 'Love Light', cursive;
  line-height: 1.2;
}
#showcase-info small {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.2;
}
#other-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#curators-note {
  text-align: justify;
  text-indent: 2rem;
}

@media (max-width: 640px) {
  #gallery-layout {
    column-count: 2;
    gap: 0;
  }
}
@media (min-width: 640px) {
  #gallery {
    padding: 0.5rem;
    overflow: hidden;
  }
  #gallery-layout {
    aspect-ratio: 1/1;
    flex-grow: 1;
    height: 100%;
    max-height: 100%;
    gap: 0.5rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }
  #img1 {
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
    grid-column-start: 2;
    grid-row-start: 2;
  }
  #img2 {
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
    grid-column-start: 9;
    grid-row-start: 9;
  }
  #img3 {
    grid-column: span 5 / span 5;
    grid-row: span 3 / span 3;
    grid-column-start: 4;
    grid-row-start: 10;
  }
  #img4 {
    grid-column: span 5 / span 5;
    grid-row: span 3 / span 3;
    grid-column-start: 5;
    grid-row-start: 1;
  }
  #img5 {
    grid-column: span 4 / span 4;
    grid-row: span 6 / span 6;
    grid-column-start: 5;
    grid-row-start: 4;
  }
  #img6 {
    grid-column: span 4 / span 4;
    grid-row: span 5 / span 5;
    grid-column-start: 1;
    grid-row-start: 5;
  }
  #img7 {
    grid-column: span 4 / span 4;
    grid-row: span 5 / span 5;
    grid-column-start: 9;
    grid-row-start: 4;
  }
}

@keyframes drop {
  0% {
    translate: 0 -100%;
  }
  100% {
    translate: 0 0;
  }
}
@keyframes rise {
  0% {
    translate: 0 100%;
  }
  100% {
    translate: 0 0;
  }
}
</style>
