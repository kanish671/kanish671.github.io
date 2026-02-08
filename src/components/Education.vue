<script setup>
import { education } from '../data/site.js'
</script>

<template>
  <section class="section">
    <h2 class="thick-header section-title">What I learned</h2>
    <div v-for="(edu, i) in education" :key="i" class="row-grid">
      <div class="row-title-block">
        <div class="row-title">{{ edu.institution }}</div>
        <div class="row-sub">{{ edu.dateRange }}</div>
      </div>
      <div class="row-content">
        <h4 class="row-title">{{ edu.degree }}</h4>
        <div class="row-sub">{{ edu.detail }}</div>
        <p>{{ edu.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 1.75rem;
  margin-bottom: 2rem;
}
</style>
