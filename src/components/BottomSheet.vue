<script setup>
import { ref } from 'vue'
const props = defineProps({
  startHeight: {
    type: Number,
    default: 75,
  },
})

const emit = defineEmits(['close'])

let startY = 0
let startHeight = props.startHeight
const isDragging = ref(false)
const sheetHeight = ref(startHeight)

const dragStart = (pageY) => {
  isDragging.value = true
  startY = pageY
}
const drag = (pageY) => {
  if (isDragging.value) {
    sheetHeight.value = startHeight + ((startY - pageY) / window.innerHeight) * 100
  }
}

const dragEnd = () => {
  isDragging.value = false
  if (sheetHeight.value < 50) {
    emit('close')
    startHeight = 75
  } else {
    startHeight = 25 * Math.round(sheetHeight.value / 25)
  }
  sheetHeight.value = startHeight
}
</script>

<template>
  <div
    id="bottom-sheet-overlay"
    @click.self="emit('close')"
    @mousemove="drag($event.pageY)"
    @mouseup="dragEnd"
    @touchmove="drag($event.touches[0].pageY)"
    @touchend="dragEnd"
  >
    <div
      id="bottom-sheet"
      :class="{
        'duration-300': !isDragging,
        'rounded-t-4xl': sheetHeight < 100,
      }"
      :style="{ height: `${sheetHeight}%` }"
    >
      <button
        id="bottom-sheet-dragger"
        @mousedown.capture="dragStart($event.pageY)"
        @touchstart.capture="dragStart($event.touches[0].pageY)"
      >
        <div></div>
      </button>
      <div id="bottom-sheet-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.duration-300 {
  transition: all 300ms ease-in-out;
}
.rounded-t-4xl {
  border-radius: 1rem 1rem 0 0;
}
#bottom-sheet-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
}
#bottom-sheet {
  margin-top: auto;
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  width: 100%;
  max-width: 768px;
  border-top: 1px solid #fefefe;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  animation: rise 600ms forwards;
}
#bottom-sheet-dragger {
  min-height: 2.5rem;
  height: 2.5rem;
  max-height: 2.5rem;
  display: block;
  width: 100%;
  cursor: grab;
}
#bottom-sheet-dragger > div {
  margin-inline: auto;
  height: 0.25rem;
  width: 5rem;
  border-radius: 1rem;
  background-color: darkgray;
}
#bottom-sheet-content {
  flex-grow: 1;
  background-color: white;
  overflow-y: auto;
}
@keyframes rise {
  0% {
    translate: 0 100%;
  }
  100% {
    translate: 0 0%;
  }
}
</style>
