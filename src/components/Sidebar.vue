<script setup>
import Icons from './Icons.vue'
import { resumeUrl, contactEmail } from '../data/site.js'

const props = defineProps({
  open: Boolean,
})

const emit = defineEmits(['close'])

function openContact() {
  window.location.href = contactEmail
}

function onLinkClick() {
  emit('close')
}
</script>

<template>
  <Transition name="sidebar">
    <div v-show="open" class="sidebar-overlay" @click.self="emit('close')">
      <aside class="sidebar">
        <img src="/images/profile image.jpg" class="sidebar-avatar" alt="Anish Krishnaswamy" />
        <h3 class="sidebar-name">Anish Krishnaswamy</h3>
        <nav class="sidebar-nav">
          <a href="https://www.linkedin.com/in/kanish671" target="_blank" rel="noopener" @click="onLinkClick">
            <Icons name="linkedin" :size="24" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/kanish671" target="_blank" rel="noopener" @click="onLinkClick">
            <Icons name="github" :size="24" />
            <span>GitHub</span>
          </a>
          <a href="https://stackoverflow.com/users/3921169/anish" target="_blank" rel="noopener" @click="onLinkClick">
            <Icons name="stackoverflow" :size="24" />
            <span>Stack Overflow</span>
          </a>
          <a href="https://anishkrishnaswamy.medium.com" target="_blank" rel="noopener" @click="onLinkClick">
            <Icons name="medium" :size="24" />
            <span>Medium</span>
          </a>
          <button type="button" class="sidebar-link-btn" @click="openContact(); onLinkClick()">
            <Icons name="email" :size="24" />
            <span>Email</span>
          </button>
          <a :href="resumeUrl" target="_blank" rel="noopener" @click="onLinkClick">
            <Icons name="resume" :size="24" />
            <span>Resume</span>
          </a>
        </nav>
      </aside>
    </div>
  </Transition>
</template>

<style scoped>
.sidebar-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.5);
}
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  max-width: 85vw;
  background: #1f2937;
  color: #fff;
  padding: 2rem 1rem;
  overflow-y: auto;
}
.sidebar-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin-bottom: 1rem;
}
.sidebar-name {
  margin: 0 0 1.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.sidebar-nav a,
.sidebar-link-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  color: #e5e7eb;
  text-decoration: none;
  font-size: 1.1rem;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
}
.sidebar-nav a:hover,
.sidebar-link-btn:hover {
  background: #374151;
  color: #fff;
}
.sidebar-link-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
}
.sidebar-enter-active,
.sidebar-leave-active {
  transition: opacity 0.2s ease;
}
.sidebar-enter-active .sidebar,
.sidebar-leave-active .sidebar {
  transition: transform 0.2s ease;
}
.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
}
.sidebar-enter-from .sidebar,
.sidebar-leave-to .sidebar {
  transform: translateX(-100%);
}
</style>
