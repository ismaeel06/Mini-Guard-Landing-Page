<script setup lang="ts">
import { ref } from 'vue'
import ShieldIcon from '../assets/icons/ShieldIcon.vue'

// Mobile menu state
const mobileMenuOpen = ref(false)

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Close mobile menu when clicking on a link
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <!-- Header -->
  <header class="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
    <nav class="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-2 sm:space-x-3 magnetic-element">
        <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center animate-scale-pulse">
          <ShieldIcon class="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
        </div>
        <span class="text-lg sm:text-xl font-bold text-gradient-animated">
          MiniGuard<span class="text-yellow-400">Tech</span>
        </span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-6 lg:space-x-8">
        <a href="#services" class="text-slate-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Services</a>
        <a href="#pricing" class="text-slate-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Pricing</a>
        <a href="#about" class="text-slate-300 hover:text-yellow-400 transition-colors duration-300 font-medium">About</a>
        <a href="#contact" class="text-slate-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Contact</a>
      </div>
      
      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-300 border border-slate-700 hover:border-yellow-400"
        :class="{ 'bg-yellow-400 border-yellow-400': mobileMenuOpen }"
      >
        <svg 
          v-if="!mobileMenuOpen"
          class="w-5 h-5 text-slate-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg 
          v-else
          class="w-5 h-5 text-slate-900" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </nav>
    
    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen" 
      class="md:hidden bg-slate-800 border-t border-slate-700 shadow-lg"
    >
      <div class="px-4 py-4 space-y-3">
        <a 
          href="#services" 
          @click="closeMobileMenu"
          class="block px-4 py-3 text-slate-300 hover:text-yellow-400 hover:bg-slate-700 rounded-lg transition-all duration-300 font-medium"
        >
          Services
        </a>
        <a 
          href="#pricing" 
          @click="closeMobileMenu"
          class="block px-4 py-3 text-slate-300 hover:text-yellow-400 hover:bg-slate-700 rounded-lg transition-all duration-300 font-medium"
        >
          Pricing
        </a>
        <a 
          href="#about" 
          @click="closeMobileMenu"
          class="block px-4 py-3 text-slate-300 hover:text-yellow-400 hover:bg-slate-700 rounded-lg transition-all duration-300 font-medium"
        >
          About
        </a>
        <a 
          href="#contact" 
          @click="closeMobileMenu"
          class="block px-4 py-3 text-slate-300 hover:text-yellow-400 hover:bg-slate-700 rounded-lg transition-all duration-300 font-medium"
        >
          Contact
        </a>
        
        <!-- Mobile CTA Button -->
        <div class="pt-3 border-t border-slate-700 mt-3">
          <a 
            href="#contact" 
            @click="closeMobileMenu"
            class="block w-full bg-yellow-400 text-slate-900 text-center py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300"
          >
            Get Free Assessment
          </a>
        </div>
      </div>
    </div>
  </header>
</template>