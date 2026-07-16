<template>
  <section class="featured-section section-spacer">
    <div class="container">
      <div class="cards-grid cards-grid--3">
        <article v-for="card in featureCards" :key="card.title" class="card-portrait">
          <a :href="card.href" class="card-portrait__img-link">
            <img :src="card.image" :alt="card.alt" loading="lazy" />
          </a>
          <div class="card-portrait__body">
            <p class="label">{{ card.subtitle }}</p>
            <h3 class="heading-serif">{{ card.title }}</h3>
            <p class="body-text">{{ card.description }}</p>
            <a :href="card.href" class="link-underline">{{ card.linkLabel }}</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featureCards } from '../data/content.js'
</script>
