<script setup>
import { workExperience } from '../data/site.js'
</script>

<template>
  <section class="section">
    <h2 class="thick-header section-title">Where I worked</h2>
    <div v-for="(job, i) in workExperience" :key="i" class="row-grid">
      <div class="row-title-block">
        <div v-if="job.showCompany && job.company" class="row-title">{{ job.company }}</div>
        <div class="row-sub">{{ job.dateRange }}</div>
      </div>
      <div class="row-content">
        <h4 class="row-title">{{ job.role }}</h4>
        <div v-if="job.team" class="row-sub">{{ job.team }}</div>
        <p v-for="(desc, j) in job.descriptions" :key="j">{{ desc }}</p>
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
