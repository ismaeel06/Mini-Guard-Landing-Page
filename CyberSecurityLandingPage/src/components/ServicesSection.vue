<template>
  <!-- Services Section -->
  <section id="services" class="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-slate-900"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 lg:mb-20">
        <div class="inline-block mb-4 sm:mb-6">
          <span class="text-yellow-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wider uppercase">What We Do</span>
          <div class="h-1 w-16 sm:w-20 bg-yellow-400 mx-auto mt-2"></div>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white leading-tight">
          Our Core Services
        </h2>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          Comprehensive cybersecurity solutions tailored for small businesses
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          class="group relative bg-slate-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-slate-700 transition-all duration-300 hover:border-yellow-400 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10 min-h-[240px] sm:min-h-[260px] lg:min-h-[280px] flex flex-col cursor-pointer"
        >
          <!-- Icon Container -->
          <div class="mb-4 sm:mb-6">
            <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-400 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <component :is="service.icon" class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-slate-900 transition-transform duration-300 group-hover:scale-110"/>
            </div>
          </div>
          
          <!-- Content -->
          <div class="flex-1 flex flex-col">
            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
              {{ service.title }}
            </h3>
            <p class="text-sm sm:text-base text-slate-300 leading-relaxed flex-1 group-hover:text-slate-200 transition-colors duration-300">
              {{ service.description }}
            </p>
          </div>

          <!-- Hover Accent Line -->
          <div class="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-85 transition-transform duration-300 origin-center rounded-b-xl sm:rounded-b-2xl"></div>
          
          <!-- Mobile Touch Indicator -->
          <div class="absolute top-2 right-2 sm:top-3 sm:right-3 lg:hidden opacity-30 group-hover:opacity-60 transition-opacity duration-300">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Mobile CTA Section -->
      <div class="mt-12 sm:mt-16 lg:mt-20 text-center lg:hidden">
        <div class="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-700 max-w-md mx-auto">
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Ready to Get Protected?
          </h3>
          <p class="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
            Let's discuss how we can secure your business
          </p>
          <a 
            href="#contact" 
            class="inline-block w-full bg-yellow-400 text-slate-900 py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-bold text-sm sm:text-base hover:bg-yellow-500 transition-colors duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

// Import icon components
const KeyIcon = defineAsyncComponent(() => import('../assets/icons/KeyIcon.vue'))
const ShieldIcon = defineAsyncComponent(() => import('../assets/icons/ShieldIcon.vue'))
const DatabaseIcon = defineAsyncComponent(() => import('../assets/icons/DatabaseIcon.vue'))
const BugIcon = defineAsyncComponent(() => import('../assets/icons/BugIcon.vue'))

// Services data
const services = ref([
  {
    title: 'Password & Wi-Fi Setup',
    description: 'Secure password management and network configuration for your business.',
    icon: KeyIcon
  },
  {
    title: 'Network Security',
    description: 'Comprehensive network protection and monitoring solutions.',
    icon: ShieldIcon
  },
  {
    title: 'Data Backup',
    description: 'Automated backup solutions to keep your data safe and recoverable.',
    icon: DatabaseIcon
  },
  {
    title: 'Antivirus Protection',
    description: 'Advanced threat detection and malware protection for all devices.',
    icon: BugIcon
  }
])
</script>