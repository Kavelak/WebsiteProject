<template>
  <section class="accommodation-section section-spacer">
    <div class="container">
      <div class="cards-grid cards-grid--2">
        <article v-for="card in accommodationCards" :key="card.title" class="card-large">
          <a :href="card.href" class="card-large__img-link">
            <img :src="card.image" :alt="card.alt" loading="lazy" />
          </a>
          <div class="card-large__body">
            <p class="label">{{ card.subtitle }}</p>
            <h2 class="heading-serif">{{ card.title }}</h2>
            <p class="body-text">{{ card.description }}</p>
            <a :href="card.href" class="link-underline">Read more</a>
          </div>
        </article>
      </div>

      <div class="section-links">
        <a href="https://www.aman.com/hotels/aman-tokyo/accommodation/rooms-suites" class="link-underline">View all accommodation</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { accommodationCards } from '../data/content.js'
</script>
