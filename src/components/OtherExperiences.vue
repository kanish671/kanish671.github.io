<script setup>
import { otherExperiences } from '../data/site.js'
</script>

<template>
  <section class="section">
    <h2 class="thick-header section-title">Other Experiences</h2>
    <div v-for="(exp, i) in otherExperiences" :key="i" class="row-grid">
      <div class="row-title-block">
        <div class="row-title">{{ exp.organization }}</div>
        <div class="row-sub">{{ exp.dateRange }}</div>
      </div>
      <div class="row-content">
        <h4 class="row-title">{{ exp.role }}</h4>
        <p class="row-description" v-html="exp.description"></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 1.75rem;
  margin-bottom: 2rem;
}
.row-description :deep(a) {
  color: #0d9488;
}
</style>
