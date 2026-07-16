<template>
  <section class="intro-section section-spacer">
    <div class="container">
      <div class="intro-grid">
        <div class="intro-media">
          <img :src="intro.image" :alt="intro.alt" loading="lazy" />
        </div>
        <div class="intro-body">
          <div class="intro-body__top">
            <h2 class="heading-serif">{{ intro.title }}</h2>
            <p v-for="(p, i) in intro.paragraphs" :key="i" class="body-text">{{ p }}</p>
          </div>
          <div class="intro-body__cta">
            <a :href="intro.ctaHref" class="link-underline" rel="nofollow">{{ intro.ctaLabel }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { intro } from '../data/content.js'
</script>
