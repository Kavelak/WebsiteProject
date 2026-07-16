<template>
  <section class="hero">
    <div class="hero__media">
      <img :src="hero.image" :alt="hero.alt" loading="eager" />
    </div>
    <div class="hero__content">
      <p class="hero__subtitle">{{ hero.subtitle }}</p>
      <h1 class="hero__title">{{ hero.title }}</h1>
      <p class="hero__description">{{ hero.description }}</p>
    </div>
  </section>
</template>

<script setup>
import { hero } from '../data/content.js'
</script>
