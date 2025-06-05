<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

const handleScroll = () => {
  const scrolled = window.pageYOffset
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  const progress = Math.min((scrolled / maxScroll) * 100, 100)
  scrollProgress.value = progress
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Scroll Progress Indicator -->
  <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
</template>
