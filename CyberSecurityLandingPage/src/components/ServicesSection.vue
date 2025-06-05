<template>
  <!-- Services Section -->
  <section id="services" class="py-32 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-slate-900"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-block mb-6">
          <span class="text-yellow-400 font-semibold text-lg tracking-wider uppercase">What We Do</span>
          <div class="h-1 w-20 bg-yellow-400 mx-auto mt-2"></div>
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 text-white">
          Our Core Services
        </h2>
        <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Comprehensive cybersecurity solutions tailored for small businesses
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          class="group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 transition-all duration-300 hover:border-yellow-400 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10 min-h-[280px] flex flex-col cursor-pointer"
        >
          <!-- Icon Container -->
          <div class="mb-6">
            <div class="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <component :is="service.icon" class="w-8 h-8 text-slate-900 transition-transform duration-300 group-hover:scale-110"/>
            </div>
          </div>
          
          <!-- Content -->
          <div class="flex-1 flex flex-col">
            <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
              {{ service.title }}
            </h3>
            <p class="text-slate-300 leading-relaxed flex-1 group-hover:text-slate-200 transition-colors duration-300">
              {{ service.description }}
            </p>
          </div>

          <!-- Hover Accent Line -->
          <div class="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-85 transition-transform duration-300 origin-center rounded-b-2xl"></div>
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