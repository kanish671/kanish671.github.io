<script setup>
import Icons from './Icons.vue'
import { resumeUrl, contactEmail } from '../data/site.js'

function openContact() {
  window.location.href = contactEmail
}
</script>

<template>
  <header class="app-header desktop-only">
    <div class="header-inner">
      <img src="/images/profile image.jpg" class="header-avatar" alt="Anish Krishnaswamy" />
      <a href="#" class="header-name">Anish Krishnaswamy</a>
      <nav class="header-nav">
        <a href="https://www.linkedin.com/in/kanish671" target="_blank" rel="noopener" title="LinkedIn">
          <Icons name="linkedin" :size="28" />
        </a>
        <a href="https://github.com/kanish671" target="_blank" rel="noopener" title="GitHub">
          <Icons name="github" :size="28" />
        </a>
        <a href="https://stackoverflow.com/users/3921169/anish" target="_blank" rel="noopener" title="Stack Overflow">
          <Icons name="stackoverflow" :size="28" />
        </a>
        <a href="https://anishkrishnaswamy.medium.com" target="_blank" rel="noopener" title="Medium">
          <Icons name="medium" :size="28" />
        </a>
        <button type="button" class="icon-btn" title="Email" @click="openContact">
          <Icons name="email" :size="28" />
        </button>
        <a :href="resumeUrl" target="_blank" rel="noopener" title="Resume">
          <Icons name="resume" :size="28" />
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #1f2937;
  color: #fff;
  padding: 0.5rem 0;
}
.header-inner {
  max-width: 1127px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
}
.header-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.header-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  margin-right: auto;
}
.header-name:hover {
  color: #99f6e4;
  text-decoration: none;
}
.header-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.header-nav a,
.icon-btn {
  color: #d1d5db;
  padding: 0.25rem;
  display: inline-flex;
  transition: color 0.2s, transform 0.2s;
}
.header-nav a:hover,
.icon-btn:hover {
  color: #fff;
  transform: scale(1.1);
}
.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
}
.desktop-only {
  display: flex;
}
@media (max-width: 991px) {
  .desktop-only {
    display: none;
  }
}
</style>
