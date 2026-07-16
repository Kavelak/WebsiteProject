<template>
  <section class="nearby-section section-spacer">
    <div class="container">
      <div class="nearby-head">
        <h2 class="heading-serif">Nearby resorts</h2>
      </div>
      <div class="nearby-strip" ref="stripEl" @scroll.passive="onScroll">
        <a
          v-for="(resort, i) in loopResorts"
          :key="i"
          :href="resort.href"
          class="nearby-card"
        >
          <div class="nearby-card__img">
            <img :src="resort.image" :alt="resort.alt" loading="lazy" />
          </div>
          <p class="label nearby-card__country">{{ resort.subtitle }}</p>
          <h3 class="nearby-card__title">{{ resort.title }}</h3>
        </a>
      </div>

      <div class="gallery-dots">
        <button
          v-for="(_, i) in nearbyResorts"
          :key="i"
          class="gallery-dot"
          :class="{ 'gallery-dot--active': i === current }"
          @click="goTo(i)"
          :aria-label="`Go to resort ${i + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { nearbyResorts } from '../data/content.js'

const N = nearbyResorts.length
// Three copies so the strip scrolls continuously (like the photo gallery)
const loopResorts = [...nearbyResorts, ...nearbyResorts, ...nearbyResorts]

const stripEl = ref(null)
const current = ref(0)
let raf = 0
let copyW = 0

function measure() {
  const el = stripEl.value
  if (!el || el.children.length < N + 1) return
  copyW = el.children[N].offsetLeft - el.children[0].offsetLeft
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
      if (el.scrollLeft < copyW * 0.5) el.scrollLeft += copyW
      else if (el.scrollLeft > copyW * 2.5) el.scrollLeft -= copyW
    }
    updateActive()
  })
}

function goTo(i) {
  const el = stripEl.value
  if (!el || !copyW) return
  const base = Math.round(el.scrollLeft / copyW) * N
  const target = Math.min(Math.max(base + i, 0), el.children.length - 1)
  const c = el.children[target]
  el.scrollTo({ left: c.offsetLeft - (el.clientWidth - c.offsetWidth) / 2, behavior: 'smooth' })
}

function reset() {
  measure()
  const el = stripEl.value
  if (el && copyW) el.scrollLeft = copyW // park in the middle copy
  updateActive()
}

onMounted(reset)
onUnmounted(() => cancelAnimationFrame(raf))
if (typeof window !== 'undefined') {
  window.addEventListener('resize', reset)
  onUnmounted(() => window.removeEventListener('resize', reset))
}
</script>
