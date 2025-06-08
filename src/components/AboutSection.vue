<template>
  <!-- Why Choose Us Section -->
  <section id="about" class="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-slate-900"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 lg:mb-20">
        <div class="inline-block mb-4 sm:mb-6">
          <span class="text-yellow-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wider uppercase">Why Choose Us</span>
          <div class="h-1 w-16 sm:w-20 lg:w-24 bg-yellow-400 mx-auto mt-2"></div>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white leading-tight">
          Why MiniGuardTech?
        </h2>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          Trusted local partner—tech you can actually understand
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div 
          v-for="(reason, index) in whyChooseUs" 
          :key="index" 
          class="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-slate-800/50 hover:scale-105 hover:-translate-y-2 cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col"
        >
          <!-- Icon Container -->
          <div class="mb-4 sm:mb-6 flex-shrink-0">
            <div class="relative">
              <!-- Glow effect behind icon -->
              <div class="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto"></div>
              
              <!-- Main icon container -->
              <div class="relative w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-yellow-400/30">
                <component :is="reason.icon" class="w-8 h-8 sm:w-10 sm:h-10 text-slate-900 transition-transform duration-300 group-hover:scale-110"/>
              </div>
            </div>
          </div>
          
          <!-- Content -->
          <div class="transition-all duration-300 flex-grow flex flex-col">
            <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
              {{ reason.title }}
            </h3>
            <p class="text-sm sm:text-base text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 flex-grow">
              {{ reason.description }}
            </p>
          </div>

          <!-- Bottom accent line -->
          <div class="w-0 h-1 bg-yellow-400 mx-auto mt-4 sm:mt-6 group-hover:w-8 sm:group-hover:w-12 transition-all duration-300 rounded-full flex-shrink-0"></div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 lg:pt-20 border-t border-slate-700">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="group text-center p-4 sm:p-6 rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-slate-800/30 hover:scale-105 cursor-pointer"
        >
          <div class="text-3xl sm:text-4xl lg:text-5xl font-black text-yellow-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
            {{ stat.value }}
          </div>
          <p class="text-sm sm:text-base text-slate-300 font-semibold group-hover:text-slate-200 transition-colors duration-300">
            {{ stat.label }}
          </p>
          
          <!-- Underline effect -->
          <div class="w-0 h-0.5 bg-yellow-400 mx-auto mt-2 sm:mt-3 group-hover:w-6 sm:group-hover:w-8 transition-all duration-300 rounded-full"></div>
        </div>
      </div>

      <!-- Mobile CTA Section -->
      <div class="mt-12 sm:mt-16 lg:mt-20 text-center sm:hidden">
        <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 max-w-sm mx-auto">
          <h3 class="text-xl font-bold text-white mb-3">
            Ready to Protect Your Business?
          </h3>
          <p class="text-slate-300 mb-4 text-sm">
            Get started with our free security assessment
          </p>
          <button 
            @click="openCalendly"
            class="inline-block w-full bg-yellow-400 text-slate-900 py-3 px-6 rounded-xl font-bold text-sm hover:bg-yellow-500 transition-colors duration-300 relative overflow-hidden group"
          >
            <!-- Button shine effect -->
            <div class="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            <span class="relative z-10">Get Free Assessment</span>
          </button>
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

// Calendly Configuration
const CALENDLY_URL = 'https://calendly.com/miniguardtech-info/10min'

// Methods
const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: CALENDLY_URL,
      parentElement: document.body,
      rootElement: document.body,
      prefill: {
        name: 'About Section Lead',
        email: '',
        customAnswers: {
          a1: 'About Section - Free Security Assessment'
        }
      },
      utm: {
        utmCampaign: 'about-section-cta',
        utmSource: 'miniguardtech-site',
        utmMedium: 'web'
      }
    })
  } else {
    // Fallback: open in new tab
    window.open(CALENDLY_URL, '_blank')
  }
}

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