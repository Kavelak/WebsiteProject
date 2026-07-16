<template>
  <section class="location-section section-spacer">
    <div class="container">
      <div class="location-intro">
        <h2 class="heading-serif">Getting here</h2>
        <div class="location-directions">
          <p v-for="(line, i) in contact.directions" :key="i" class="body-text">{{ line }}</p>
        </div>
      </div>
    </div>

    <div class="location-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3!2d139.7638!3d35.6869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c07f1b3b3b3%3A0x0!2sAman+Tokyo!5e0!3m2!1sen!2s!4v1"
        width="100%"
        height="480"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        title="Aman Tokyo location map"
      ></iframe>
    </div>

    <div class="container">
      <div class="location-info">
        <div class="location-info__col location-info__address">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
            <path d="M12 21.5s6.5-6 6.5-10.5a6.5 6.5 0 1 0-13 0c0 4.5 6.5 10.5 6.5 10.5z"/>
            <circle cx="12" cy="10.5" r="2.4"/>
          </svg>
          <address>
            <span v-for="line in contact.addressLines" :key="line">{{ line }}</span>
          </address>
        </div>

        <div class="location-info__col location-info__transport">
          <p>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M21 15.5v-1.6l-7.5-4.6V4.2a1.5 1.5 0 0 0-3 0v5.1L3 13.9v1.6l7.5-2.2v4.4l-2 1.4v1.2l3.5-1 3.5 1v-1.2l-2-1.4v-4.4L21 15.5z"/>
            </svg>
            <span>{{ contact.nearestAirport }}</span>
          </p>
          <p>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="M4 13.5 5.4 9A2 2 0 0 1 7.3 7.6h9.4A2 2 0 0 1 18.6 9L20 13.5v4.5h-2v-1.8H6V18H4v-4.5z"/>
              <circle cx="7.5" cy="15.3" r="1"/>
              <circle cx="16.5" cy="15.3" r="1"/>
            </svg>
            <span>{{ contact.airportDrive }}</span>
          </p>
        </div>

        <div class="location-info__col location-info__directions">
          <a :href="contact.directionsUrl" target="_blank" rel="noopener">Get directions</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { contact } from '../data/content.js'
</script>
