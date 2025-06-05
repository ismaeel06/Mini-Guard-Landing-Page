<script setup lang="ts">
import { ref } from 'vue'
import ShieldIcon from '../assets/icons/ShieldIcon.vue'

// Refs
const parallaxContainer = ref<HTMLElement>()

// Methods
const openCalendly = () => {
  window.open('https://calendly.com/miniguardtech-info/10min', '_blank')
}
</script>

<template>
  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
    <!-- Simple Background -->
    <div class="absolute inset-0 bg-slate-900"></div>
    
    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 relative z-20">
      <div class="text-center max-w-6xl mx-auto">
        <!-- Hero Icon -->
        <div class="mb-8 sm:mb-12">
          <ShieldIcon class="w-16 h-16 sm:w-20 sm:h-20 lg:w-26 lg:h-28 mx-auto text-yellow-400 animate-scale-pulse" />
        </div>
        
        <!-- Hero Text -->
        <div class="mb-8 sm:mb-12">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-6 sm:mb-8 leading-none text-white">
            <span class="text-white">MiniGuard</span>
            <span class="text-yellow-400">Tech</span>
          </h1>
          
          <div class="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
            <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-yellow-400">
              BIG PROTECTION.
            </p>
            <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-white">
              ALWAYS GOT YOUR BACK.
            </p>
          </div>
          
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Cybersecurity made <span class="text-yellow-400 font-semibold">simple</span> for small business. 
            We help small businesses stay secure and stress-free with expert cybersecurity and IT support—without the big business price tag.
          </p>
        </div>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0 mb-20 lg:mb-32">
          <!-- Primary CTA Button -->
          <button 
            @click="openCalendly" 
            class="group relative w-full sm:w-auto bg-yellow-400 text-slate-900 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl lg:rounded-2xl font-bold text-base sm:text-lg overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 hover:-translate-y-1 active:scale-95"
          >
            <!-- Button Background Glow Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Button Text -->
            <span class="relative z-10 group-hover:text-slate-800 transition-colors duration-300">
              Book Free Cyber Snapshot
            </span>
            
            <!-- Ripple Effect -->
            <div class="absolute inset-0 rounded-xl lg:rounded-2xl bg-white opacity-0 group-active:opacity-30 group-active:animate-pulse"></div>
          </button>
          
          <!-- Secondary CTA Button -->
          <a 
            href="#services" 
            class="group relative w-full sm:w-auto border-2 border-yellow-400 text-yellow-400 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl lg:rounded-2xl font-bold text-base sm:text-lg text-center overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-1 active:scale-95"
          >
            <!-- Button Background Slide Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            
            <!-- Button Text -->
            <span class="relative z-10 group-hover:text-slate-900 transition-colors duration-300">
              Learn More
            </span>
            
            <!-- Border Glow Effect -->
            <div class="absolute inset-0 rounded-xl lg:rounded-2xl border-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
    
  </section>
</template>