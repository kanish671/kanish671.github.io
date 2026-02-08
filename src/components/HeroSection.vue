<script setup>
import { computed } from 'vue'

const yearsOfExperience = computed(() => {
  const start = new Date(2014, 6, 1)
  const now = new Date()
  return Math.floor((now - start) / (365.25 * 24 * 60 * 60 * 1000))
})
</script>

<template>
  <section class="section hero-section">
    <div class="hero-grid hero-desktop row-grid">
      <h1 class="thick-header hero-title">Hello! I am Anish, a software engineer.</h1>
      <div class="hero-left">
        <p>At the age of 12, I was introduced to Flash, and ever since that I have been intrigued by computers.</p>
        <p>I am currently a full-stack engineer with over <strong>{{ yearsOfExperience }}</strong> years of experience in building web applications. I started off with frontend application development and got into backend development later.</p>
        <p>I built and released a CLI tool using Python - <a href="https://pypi.org/project/ranpass/" target="_blank" rel="noopener">ranpass</a> - a random password generator.</p>
      </div>
      <div class="hero-right">
        <img src="/images/frontend.png" alt="frontend" class="hero-img" width="400" />
        <p>I have experience building static web pages, single page applications, hybrid mobile apps, browser extensions, REST APIs and event driven applications.</p>
        <p>My interests include football, travel, solving puzzles and quizzes. I am a big fan of Mozilla Corporation and advocate of internet privacy.</p>
      </div>
    </div>
    <div class="hero-grid hero-mobile">
      <h1 class="thick-header hero-title">Hello! I am Anish</h1>
      <div class="hero-left">
        <p>At the age of 12, I was introduced to Flash, and ever since that I have been intrigued by computers.</p>
        <p>I am currently a full-stack engineer with over <strong>{{ yearsOfExperience }}</strong> years of experience in building web applications. I started off with frontend application development and got into backend development later.</p>
        <p>I built and released a CLI tool using Python - <a href="https://pypi.org/project/ranpass/" target="_blank" rel="noopener">ranpass</a> - a random password generator.</p>
        <img src="/images/frontend.png" alt="frontend" class="hero-img" />
      </div>
      <div class="hero-right">
        <p>I have experience building static web pages, single page applications, hybrid mobile apps, browser extensions, REST APIs and event driven applications.</p>
        <p>My interests include football, travel, solving puzzles and quizzes. I am a big fan of Mozilla Corporation and advocate of internet privacy.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-grid {
  display: grid;
  gap: 1.5rem;
  align-items: start;
}
.hero-desktop {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
}
.hero-desktop .hero-title {
  grid-column: 1 / -1;
}
.hero-title {
  font-size: 2rem;
  margin: 0 0 1rem 0;
}
.hero-left p,
.hero-right p {
  margin: 0 0 1rem 0;
}
.hero-right p:last-child {
  margin-bottom: 0;
}
.hero-img {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}
.hero-mobile {
  display: none;
}
@media (max-width: 991px) {
  .hero-desktop {
    display: none;
  }
  .hero-mobile {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
