<script setup>
import Icons from './Icons.vue'
import { skills, stackShareUrl } from '../data/site.js'
</script>

<template>
  <section class="section">
    <h2 class="thick-header section-title">
      Technical Stack
      <a :href="stackShareUrl" target="_blank" rel="noopener" class="stack-link" title="StackShare">
        <Icons name="link" :size="20" />
      </a>
    </h2>
    <div class="skills-section desktop-only">
      <div class="skills-row">
        <span v-for="skill in skills" :key="skill" class="skill-pill">{{ skill }}</span>
      </div>
    </div>
    <div class="skills-section mobile-only">
      <h3 class="thick-header section-title-small">Technical Skills</h3>
      <a :href="stackShareUrl" target="_blank" rel="noopener" class="stack-link">StackShare</a>
      <div class="skills-row">
        <span v-for="skill in skills" :key="skill" class="skill-pill">{{ skill }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.section-title-small {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
.stack-link {
  display: inline-flex;
  color: #0d9488;
}
.stack-link:hover {
  color: #0f766e;
}
.desktop-only {
  display: block;
}
.mobile-only {
  display: none;
}
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  .mobile-only {
    display: block;
  }
}
</style>
