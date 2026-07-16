<template>
  <section class="gallery-section">
    <div class="gallery-strip" ref="stripEl" @scroll.passive="onScroll">
      <figure v-for="(img, i) in loopImages" :key="i" class="gallery-item">
        <img :src="img.src" :alt="img.alt" loading="lazy" />
      </figure>
    </div>

    <div class="gallery-dots">
      <button
        v-for="(_, i) in galleryImages"
        :key="i"
        class="gallery-dot"
        :class="{ 'gallery-dot--active': i === current }"
        @click="goTo(i)"
        :aria-label="`Go to image ${i + 1}`"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { galleryImages } from '../data/content.js'

const N = galleryImages.length
// Three copies so there is always content to the left and the right
const loopImages = [...galleryImages, ...galleryImages, ...galleryImages]

const stripEl = ref(null)
const current = ref(0)
let raf = 0
let copyW = 0
let padLeft = 0

function measure() {
  const el = stripEl.value
  if (!el || el.children.length < N + 1) return
  padLeft = el.children[0].offsetLeft
  copyW = el.children[N].offsetLeft - el.children[0].offsetLeft
}

function centerOffsetFor(index) {
  const el = stripEl.value
  const c = el.children[index]
  return c.offsetLeft - (el.clientWidth - c.offsetWidth) / 2
}

function updateActive() {
  const el = stripEl.value
  if (!el) return
  const center = el.scrollLeft + el.clientWidth / 2
  let best = 0
  let bestDist = Infinity
  for (let i = 0; i < el.children.length; i++) {
    const c = el.children[i]
    const dist = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center)
    if (dist < bestDist) {
      bestDist = dist
      best = i
    }
  }
  current.value = best % N
}

function onScroll() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    const el = stripEl.value
    if (!el) return
    if (copyW) {
      // Keep the scroll position parked in the middle copy
      if (el.scrollLeft < copyW * 0.5) el.scrollLeft += copyW
      else if (el.scrollLeft > copyW * 2.5) el.scrollLeft -= copyW
    }
    updateActive()
  })
}

function goTo(i) {
  const el = stripEl.value
  if (!el) return
  // Scroll to the copy nearest to the current position for a short, natural move
  const base = Math.round(el.scrollLeft / copyW) * N
  const target = Math.min(Math.max(base + i, 0), el.children.length - 1)
  el.scrollTo({ left: centerOffsetFor(target), behavior: 'smooth' })
}

function reset() {
  measure()
  const el = stripEl.value
  if (el && copyW) el.scrollLeft = copyW // start parked in the middle copy
  updateActive()
}

onMounted(reset)
onUnmounted(() => cancelAnimationFrame(raf))
if (typeof window !== 'undefined') {
  window.addEventListener('resize', reset)
  onUnmounted(() => window.removeEventListener('resize', reset))
}
</script>
