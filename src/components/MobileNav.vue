<script setup>
import Icons from './Icons.vue'

defineProps({
  open: Boolean,
})

const emit = defineEmits(['toggle'])
</script>

<template>
  <header class="mobile-nav mobile-only">
    <div class="mobile-nav-inner">
      <button type="button" class="menu-btn" aria-label="Open menu" @click="emit('toggle')">
        <Icons name="menu" :size="28" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #1f2937;
  color: #fff;
  padding: 0.5rem;
}
.mobile-nav-inner {
  max-width: 1127px;
  margin: 0 auto;
}
.menu-btn {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.25rem;
  display: inline-flex;
}
.mobile-only {
  display: none;
}
@media (max-width: 991px) {
  .mobile-only {
    display: block;
  }
}
</style>
