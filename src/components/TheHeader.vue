<template>
  <header class="site-header" :class="{ 'site-header--scrolled': scrolled }">
    <div class="site-header__inner">
      <div class="header-left">
        <button class="header-burger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Open menu">
          <span class="header-burger__lines"><span></span><span></span><span></span></span>
          <span class="header-burger__label">Menu</span>
        </button>
        <button class="header-search" aria-label="Search">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.4">
            <circle cx="10.5" cy="10.5" r="7"/><path d="m20.5 20.5-5-5"/>
          </svg>
        </button>
      </div>

      <a href="https://www.aman.com/" class="header-logo" title="Aman resorts">
        <svg viewBox="0 0 775.8 207.1" width="165" height="44" aria-label="Aman resorts">
          <path d="M355.7 44.7h-1.5c-57.4 119.2-58.4 126.7-63.8 139h-.4c-5.5-12.3-6.5-19.8-63.8-139h-1.6S210.2 204 204.6 204v.8h17.2v-.8c-4.2 0 8.4-112.5 9-125.5h.4a776 776 0 0 0 25.7 57.6c7.7 16 18.2 40.8 31.5 68.7h3.6c13.3-27.9 23.8-52.7 31.5-68.7a730.6 730.6 0 0 0 25.6-57.6h.4c.7 13 13.3 125.5 9.1 125.5v.8h17.1v-.8c-5.6 0-20-159.4-20-159.4M67.8 71.2h-.2c-2.6 7.6-31.9 80.6-31.9 80.6-17.4 43-20.5 51.2-18.4 52.3v.8H0v-.8c4.3 0 67.1-159.4 67.1-159.4h2s60 159.4 64.3 159.4v.8h-17.8v-.8c2-1-.5-9.3-17.5-52.3 0 0-27.8-73-30.3-80.7m446.9.1h-.2c-2.6 7.6-32 80.6-32 80.6-17.3 43-20.5 51.2-18.3 52.3v.8h-17.3v-.8c4.3 0 67-159.4 67-159.4h2.1S576 204 580.3 204v.8h-17.8v-.8c2-1-.5-9.3-17.5-52.3 0 0-27.9-73-30.3-80.7m251.9-23.7h-8v.8c1.5 0 2.7 9.5 2.7 67.7V178h-.4c-8.9-12.7-61.4-80-104-133.3h-1.6v91.7c0 58.2-2.5 67.7-3.9 67.7v.8h17.2v-.8c-1.3 0-2.6-9.5-2.6-67.7V73.7h.4c8.8 12.8 61.4 80 104 133.4h1.5v-91.3c0-58.2 2.6-67.7 4-67.7v-.8ZM43.1 0h48.3v10.5H43.1z"/>
        </svg>
      </a>

      <nav class="header-right">
        <button class="header-lang" aria-label="Select language">
          <span class="header-lang__label">English</span>
          <svg class="header-lang__chevron" viewBox="0 0 12 8" width="10" height="7" fill="none" stroke="currentColor" stroke-width="1.3">
            <path d="M1 1.5 6 6.5l5-5"/>
          </svg>
        </button>
        <a :href="contact.reservationUrl" class="btn btn--dark header-reserve" rel="nofollow">Reserve</a>
      </nav>
    </div>

    <!-- Mobile / full-screen menu -->
    <Transition name="menu">
      <div v-if="menuOpen" class="site-menu">
        <button class="site-menu__close" @click="menuOpen = false" aria-label="Close menu">
          <svg viewBox="0 0 24 24" width="24" height="24"><path d="m3.3 21.7 9-9.1 9.1 9.1.4-.4-9-9.1 9-9.1-.4-.4-9.1 9.1-9-9.1-.5.4 9.1 9.1-9.1 9.1z"/></svg>
        </button>
        <nav class="site-menu__nav">
          <div v-for="link in navLinks" :key="link.label" class="site-menu__item">
            <a :href="link.href" class="site-menu__link" @click="menuOpen = false">{{ link.label }}</a>
            <div v-if="link.children" class="site-menu__children">
              <a v-for="child in link.children" :key="child.label" :href="child.href" class="site-menu__child" @click="menuOpen = false">{{ child.label }}</a>
            </div>
          </div>
        </nav>
      </div>
    </Transition>
  </header>

  <!-- Property sub-nav -->
  <nav class="prop-nav">
    <div class="prop-nav__inner">
      <span class="prop-nav__name">
        Aman Tokyo
        <svg class="prop-nav__name-arrow" viewBox="0 0 8 12" width="6" height="9" fill="none" stroke="currentColor" stroke-width="1.3">
          <path d="M1.5 1 6.5 6l-5 5"/>
        </svg>
      </span>
      <ul class="prop-nav__list">
        <li v-for="link in propNavLinks" :key="link.label">
          <a :href="link.href" class="prop-nav__link">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks, propNavLinks, contact } from '../data/content.js'

const menuOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
