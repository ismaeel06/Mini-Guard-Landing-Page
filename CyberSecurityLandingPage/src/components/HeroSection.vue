<script setup lang="ts">
import { ref } from 'vue'
import ShieldIcon from '../assets/icons/ShieldIcon.vue'

// Refs
const parallaxContainer = ref<HTMLElement>()

// Your Calendly Configuration
const CALENDLY_URL = 'https://calendly.com/miniguardtech-info/10min'

// Methods
const openCalendly = () => {
  // Use same Calendly popup approach
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: CALENDLY_URL,
      parentElement: document.body,
      rootElement: document.body,
      prefill: {
        name: 'Hero Section Visitor',
        email: '',
        customAnswers: {
          a1: 'Hero CTA - Free Cyber Snapshot'
        }
      },
      utm: {
        utmCampaign: 'hero-cta',
        utmSource: 'miniguardtech-site',
        utmMedium: 'web'
      }
    })
  } else {
    window.open(CALENDLY_URL, '_blank')
  }
}
</script>

<template>
  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-16">
    <!-- Simple Background -->
    <div class="absolute inset-0 bg-slate-900"></div>
    
    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div class="text-center max-w-7xl mx-auto">
        <!-- Hero Icon -->
        <div class="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <ShieldIcon class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 mx-auto text-yellow-400 animate-scale-pulse" />
        </div>
        
        <!-- Hero Text -->
        <div class="mb-8 sm:mb-10 md:mb-12">
          <!-- Main Heading -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight sm:leading-none text-white">
            <span class="text-white">MiniGuard</span>
            <span class="text-yellow-400">Tech</span>
          </h1>
          
          <!-- Taglines -->
          <div class="space-y-1 sm:space-y-2 mb-4 sm:mb-6 md:mb-8">
            <p class="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider text-yellow-400">
              BIG PROTECTION.
            </p>
            <p class="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider text-white">
              ALWAYS GOT YOUR BACK.
            </p>
          </div>
          
          <!-- Description -->
          <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-5xl mx-auto leading-relaxed px-2 sm:px-4 md:px-0">
            Cybersecurity made <span class="text-yellow-400 font-semibold">simple</span> for small business. 
            We help small businesses stay secure and stress-free with expert cybersecurity and IT support—without the big business price tag.
          </p>
        </div>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-2 sm:px-4 md:px-0 mb-16 sm:mb-20 lg:mb-24 xl:mb-32">
          <!-- Primary CTA Button -->
          <button 
            @click="openCalendly" 
            class="group relative w-full sm:w-auto bg-yellow-400 text-slate-900 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-sm sm:text-base md:text-lg overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 hover:-translate-y-1 active:scale-95 min-w-0"
          >
            <!-- Button Background Glow Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Button Text -->
            <span class="relative z-10 group-hover:text-slate-800 transition-colors duration-300 whitespace-nowrap">
              <span class="hidden xs:inline">Book Free Cyber Snapshot</span>
              <span class="xs:hidden">Free Assessment</span>
            </span>
            
            <!-- Ripple Effect -->
            <div class="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl bg-white opacity-0 group-active:opacity-30 group-active:animate-pulse"></div>
          </button>
          
          <!-- Secondary CTA Button -->
          <a 
            href="#services" 
            class="group relative w-full sm:w-auto border-2 border-yellow-400 text-yellow-400 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-sm sm:text-base md:text-lg text-center overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-1 active:scale-95 min-w-0"
          >
            <!-- Button Background Slide Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            
            <!-- Button Text -->
            <span class="relative z-10 group-hover:text-slate-900 transition-colors duration-300 whitespace-nowrap">
              Learn More
            </span>
            
            <!-- Border Glow Effect -->
            <div class="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl border-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
        
        <!-- Trust Indicators (Mobile Optimized) -->
        <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-slate-400 text-xs sm:text-sm">
          <div class="flex items-center space-x-1">
            <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
            </svg>
            <span>100% Satisfaction Guarantee</span>
          </div>
          <div class="flex items-center space-x-1">
            <svg class="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A3,3 0 0,1 15,5V7H20A1,1 0 0,1 21,8V20A1,1 0 0,1 20,21H4A1,1 0 0,1 3,20V8A1,1 0 0,1 4,7H9V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V7H13V5A1,1 0 0,0 12,4Z"/>
            </svg>
            <span>No Contracts Required</span>
          </div>
          <div class="flex items-center space-x-1">
            <svg class="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A3,3 0 0,1 15,5V7H20A1,1 0 0,1 21,8V20A1,1 0 0,1 20,21H4A1,1 0 0,1 3,20V8A1,1 0 0,1 4,7H9V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V7H13V5A1,1 0 0,0 12,4Z"/>
            </svg>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>