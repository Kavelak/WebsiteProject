<template>
  <section class="journey-section section-spacer">
    <div class="container">
      <div class="journey-grid">
        <a :href="journey.href" class="journey-media" rel="nofollow">
          <img :src="journey.image" :alt="journey.alt" loading="lazy" />
        </a>
        <div class="journey-body">
          <div class="journey-body__top">
            <h2 class="heading-serif">{{ journey.title }}</h2>
            <p class="label">{{ journey.subtitle }}</p>
            <p class="body-text">{{ journey.description }}</p>
          </div>
          <div class="journey-body__cta">
            <a :href="journey.href" class="link-underline">{{ journey.linkLabel }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { journey } from '../data/content.js'
</script>
