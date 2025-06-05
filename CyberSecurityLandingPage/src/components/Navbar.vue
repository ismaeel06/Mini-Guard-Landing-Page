<script setup lang="ts">
import { ref } from 'vue'
import ShieldIcon from '../assets/icons/ShieldIcon.vue'

// Mobile menu state
const mobileMenuOpen = ref(false)

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>


<template>
  <!-- Header -->
  <header class="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-3 magnetic-element">
        <div class="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center animate-scale-pulse">
          <ShieldIcon class="w-6 h-6 text-slate-900" />
        </div>
        <span class="text-xl font-bold text-gradient-animated">MiniGuard<span class="text-yellow-400">Tech</span></span>
      </div>

      <div class="hidden md:flex space-x-8">
        <a href="#services" class="hover:text-yellow-400 transition-colors">Services</a>
        <a href="#pricing" class="hover:text-yellow-400 transition-colors">Pricing</a>
        <a href="#about" class="hover:text-yellow-400 transition-colors">About</a>
        <a href="#contact" class="hover:text-yellow-400 transition-colors">Contact</a>
      </div>
      
      <button @click="toggleMobileMenu" class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </nav>
    
    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-slate-800 border-t border-slate-700">
      <div class="px-6 py-4 space-y-4">
        <a href="#services" class="block hover:text-yellow-400 transition-colors">Services</a>
        <a href="#pricing" class="block hover:text-yellow-400 transition-colors">Pricing</a>
        <a href="#about" class="block hover:text-yellow-400 transition-colors">About</a>
        <a href="#contact" class="block hover:text-yellow-400 transition-colors">Contact</a>
      </div>
    </div>
  </header>
</template>