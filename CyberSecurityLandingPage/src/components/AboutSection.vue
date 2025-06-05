<template>
  <!-- Why Choose Us Section -->
  <section id="about" class="py-32 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-slate-900"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-block mb-6">
          <span class="text-yellow-400 font-semibold text-lg tracking-wider uppercase">Why Choose Us</span>
          <div class="h-1 w-24 bg-yellow-400 mx-auto mt-2"></div>
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 text-white">
          Why MiniGuardTech?
        </h2>
        <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Trusted local partner—tech you can actually understand
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div 
          v-for="(reason, index) in whyChooseUs" 
          :key="index" 
          class="group text-center p-6 rounded-2xl transition-all duration-300 hover:bg-slate-800/50 hover:scale-105 hover:-translate-y-2 cursor-pointer"
        >
          <!-- Icon Container -->
          <div class="mb-6">
            <div class="relative">
              <!-- Glow effect behind icon -->
              <div class="absolute inset-0 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto"></div>
              
              <!-- Main icon container -->
              <div class="relative w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-yellow-400/30">
                <component :is="reason.icon" class="w-10 h-10 text-slate-900 transition-transform duration-300 group-hover:scale-110"/>
              </div>
            </div>
          </div>
          
          <!-- Content -->
          <div class="transition-all duration-300">
            <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
              {{ reason.title }}
            </h3>
            <p class="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
              {{ reason.description }}
            </p>
          </div>

          <!-- Bottom accent line -->
          <div class="w-0 h-1 bg-yellow-400 mx-auto mt-6 group-hover:w-12 transition-all duration-300 rounded-full"></div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-slate-700">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="group text-center p-6 rounded-xl transition-all duration-300 hover:bg-slate-800/30 hover:scale-105 cursor-pointer"
        >
          <div class="text-4xl md:text-5xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
            {{ stat.value }}
          </div>
          <p class="text-slate-300 font-semibold group-hover:text-slate-200 transition-colors duration-300">
            {{ stat.label }}
          </p>
          
          <!-- Underline effect -->
          <div class="w-0 h-0.5 bg-yellow-400 mx-auto mt-3 group-hover:w-8 transition-all duration-300 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

// Import icon components
const BusinessIcon = defineAsyncComponent(() => import('../assets/icons/BusinessIcon.vue'))
const DollarIcon = defineAsyncComponent(() => import('../assets/icons/DollarIcon.vue'))
const SupportIcon = defineAsyncComponent(() => import('../assets/icons/SupportIcon.vue'))
const HandshakeIcon = defineAsyncComponent(() => import('../assets/icons/HandshakeIcon.vue'))

// Why choose us data
const whyChooseUs = ref([
  {
    title: 'Tailored for Small Businesses',
    description: 'Solutions designed specifically for small business needs and budgets.',
    icon: BusinessIcon
  },
  {
    title: 'Simple, Honest Pricing',
    description: 'No hidden fees or complicated contracts. Pay for what you need.',
    icon: DollarIcon
  },
  {
    title: 'Fast Response & Human Support',
    description: 'Quick response times with real people who understand your business.',
    icon: SupportIcon
  },
  {
    title: 'Local Partner You Can Trust',
    description: 'Tech expertise you can actually understand and rely on.',
    icon: HandshakeIcon
  }
])

// Stats data
const stats = ref([
  {
    value: '500+',
    label: 'Businesses Protected'
  },
  {
    value: '99.9%',
    label: 'Uptime Guarantee'
  },
  {
    value: '24/7',
    label: 'Expert Support'
  }
])
</script>