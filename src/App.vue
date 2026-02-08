<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import MobileNav from './components/MobileNav.vue'
import Sidebar from './components/Sidebar.vue'
import HeroSection from './components/HeroSection.vue'
import WorkExperience from './components/WorkExperience.vue'
import TechnicalStack from './components/TechnicalStack.vue'
import OtherExperiences from './components/OtherExperiences.vue'
import Education from './components/Education.vue'

const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function closeSidebar() {
  sidebarOpen.value = false
}
</script>

<template>
  <AppHeader />
  <MobileNav :open="sidebarOpen" @toggle="toggleSidebar" />
  <Sidebar :open="sidebarOpen" @close="closeSidebar" />
  <main class="main-container">
    <HeroSection />
    <WorkExperience />
    <TechnicalStack />
    <OtherExperiences />
    <Education />
  </main>
</template>

<style scoped>
.main-container {
  padding-bottom: 1rem;
}
</style>
