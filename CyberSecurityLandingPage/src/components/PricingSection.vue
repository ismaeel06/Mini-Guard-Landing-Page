<script setup lang="ts">
import { ref } from 'vue'
// Import Heroicons
import { 
  CloudArrowUpIcon,
  EnvelopeIcon, 
  WifiIcon,
  ComputerDesktopIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  LockClosedIcon
} from '@heroicons/vue/24/solid'

// Your Calendly Configuration
const CALENDLY_URL = 'https://calendly.com/miniguardtech-info/10min'

// Main pricing plans
const pricingPlans = ref([
  {
    name: 'Free Security Snapshot',
    price: '0',
    period: '',
    popular: false,
    features: [
      'Quick cybersecurity status review',
      'Antivirus/firewall check',
      'Password hygiene overview', 
      'Wi-Fi security assessment',
      'Tailored recommendations report',
      'Perfect starting point for any business'
    ]
  },
  {
    name: 'One-Time Cyber Tune-Up',
    price: '297',
    period: '',
    popular: false,
    features: [
      'Comprehensive vulnerability scan',
      'Security patches & updates',
      'System cleanup & optimization',
      'Detailed security audit report',
      'Perfect for first-time clients',
      'One-off system review'
    ]
  },
  {
    name: 'Monthly Health Plan',
    price: '197',
    period: '/mo',
    popular: true,
    features: [
      'Monthly system review & patches',
      'Security & performance health check',
      '1 remote support session/month',
      'Monthly snapshot report',
      'Consistent peace-of-mind support',
      'Ongoing relationship & monitoring'
    ]
  }
])

// Premium add-on services with Heroicons
const premiumAddons = ref([
  {
    name: 'Cloud Backup Setup',
    price: '197',
    icon: CloudArrowUpIcon,
    features: [
      'Secure cloud backup configuration',
      'Automated scheduling setup',
      'Data redundancy & fast recovery',
      'Backup testing & verification'
    ]
  },
  {
    name: 'Email Setup + 2FA',
    price: '147',
    icon: ShieldCheckIcon,
    features: [
      'Professional email accounts',
      'Multi-factor authentication setup',
      'Enhanced security testing',
      'Email security best practices'
    ]
  },
  {
    name: 'Network/Wi-Fi Optimization',
    price: '147',
    icon: WifiIcon,
    features: [
      'Secure Wi-Fi setup & passwords',
      'Speed optimization & configuration',
      'Prevent unauthorized access',
      'Network security assessment'
    ]
  }
])

// Methods
const openCalendly = () => {
  // Only for Free Security Snapshot
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: CALENDLY_URL,
      parentElement: document.body,
      rootElement: document.body,
      prefill: {
        name: 'Free Assessment Lead',
        email: '',
        customAnswers: {
          a1: 'Free Security Snapshot'
        }
      },
      utm: {
        utmCampaign: 'free-assessment',
        utmSource: 'miniguardtech-site',
        utmMedium: 'web'
      }
    })
  } else {
    window.open(CALENDLY_URL, '_blank')
  }
}

const handlePaidPlan = (planName: string) => {
  // For paid plans, scroll to contact section or show a different action
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
  // Or you could show a different modal, redirect to contact form, etc.
  console.log(`Interested in: ${planName}`)
}
</script>

<template>
  <!-- Pricing Section -->
  <section id="pricing" class="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-slate-800"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 lg:mb-20">
        <div class="inline-block mb-4 sm:mb-6">
          <span class="text-yellow-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wider uppercase">Pricing</span>
          <div class="h-1 w-12 sm:w-16 lg:w-20 bg-yellow-400 mx-auto mt-2"></div>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white leading-tight">
          Simple, Transparent Pricing
        </h2>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          Choose the protection level that's right for your business
        </p>
      </div>

      <!-- Main Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
        <div 
          v-for="(plan, index) in pricingPlans" 
          :key="index"
          class="group relative transition-all duration-300 hover:scale-105 hover:-translate-y-2"
          :class="{ 'md:col-span-2 lg:col-span-1 lg:scale-105': plan.popular }"
        >
          <!-- Main Card with responsive height -->
          <div 
            class="relative bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-2xl min-h-[550px] sm:min-h-[600px] lg:min-h-[650px] flex flex-col"
            :class="plan.popular 
              ? 'border-yellow-400 hover:shadow-yellow-400/20' 
              : 'border-slate-700 hover:border-yellow-400 hover:shadow-yellow-400/10'"
          >
            <!-- Gradient Background Overlay -->
            <div 
              class="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :class="plan.popular 
                ? 'bg-gradient-to-br from-yellow-400/5 to-transparent' 
                : 'bg-gradient-to-br from-yellow-400/5 to-transparent'"
            ></div>

            <!-- Popular Badge -->
            <div v-if="plan.popular" class="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div class="bg-yellow-400 text-slate-900 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
            </div>

            <!-- Free Badge -->
            <div v-if="plan.price === '0'" class="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div class="bg-green-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg">
                Free Start
              </div>
            </div>

            <!-- Plan Header -->
            <div class="text-center mb-6 sm:mb-8 pt-3 sm:pt-4 relative z-10">
              <h3 class="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 uppercase tracking-wide text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                {{ plan.name }}
              </h3>
              
              <!-- Price Display -->
              <div class="mb-4 sm:mb-6">
                <div v-if="plan.price !== '0'" class="text-xs sm:text-sm text-slate-400 mb-2 uppercase tracking-wider">Starting</div>
                <div class="flex items-baseline justify-center">
                  <span class="text-4xl sm:text-5xl md:text-6xl font-black text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                    <span v-if="plan.price === '0'">FREE</span>
                    <span v-else>${{ plan.price }}</span>
                  </span>
                  <span v-if="plan.period" class="text-lg sm:text-xl text-slate-400 ml-2 font-medium group-hover:text-slate-300 transition-colors duration-300">{{ plan.period }}</span>
                </div>
              </div>
            </div>
            
            <!-- Features List with flex-grow to fill space -->
            <ul class="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow relative z-10">
              <li 
                v-for="(feature, featureIndex) in plan.features" 
                :key="feature" 
                class="flex items-start opacity-90 group-hover:opacity-100 transition-all duration-300"
                :style="{ transitionDelay: `${featureIndex * 50}ms` }"
              >
                <div class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-sm sm:text-base text-slate-200 leading-relaxed group-hover:text-white transition-colors duration-300">{{ feature }}</span>
              </li>
            </ul>

            <!-- CTA Button - always at bottom -->
            <div class="relative z-10 mt-auto">
              <button 
                @click="plan.price === '0' ? openCalendly() : handlePaidPlan(plan.name)"
                class="w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg relative overflow-hidden"
                :class="plan.popular 
                  ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-500 hover:shadow-yellow-400/30' 
                  : plan.price === '0'
                    ? 'bg-green-500 text-white hover:bg-green-600 hover:shadow-green-500/30'
                    : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 hover:shadow-yellow-400/30'"
              >
                <!-- Button shine effect -->
                <div class="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span class="relative z-10">
                  {{ plan.price === '0' ? 'Get Free Assessment' : 'Contact Us' }}
                </span>
              </button>
              
              <!-- Additional text for paid plans -->
              <p v-if="plan.price !== '0'" class="text-slate-400 text-xs sm:text-sm text-center mt-2 sm:mt-3">
                <span class="hidden sm:inline">Scroll down to contact us for this service</span>
                <span class="sm:hidden">Contact us below</span>
              </p>
            </div>

            <!-- Bottom accent line -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-85 transition-transform duration-300 origin-center rounded-b-2xl sm:rounded-b-3xl"></div>
          </div>
        </div>
      </div>

      <!-- Premium Add-Ons Section -->
      <div class="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 lg:pt-20 border-t border-slate-700">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">Premium Add-On Services</h3>
          <p class="text-base sm:text-lg lg:text-xl text-slate-300 px-2 sm:px-0">Enhance your security with specialized services</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div 
            v-for="(addon, index) in premiumAddons" 
            :key="index"
            class="group bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-700 hover:border-yellow-400 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <!-- Fixed height container with flex layout -->
            <div class="min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] flex flex-col">
              <!-- Icon -->
              <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-400 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                <component :is="addon.icon" class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-slate-900"/>
              </div>
              
              <!-- Content Header -->
              <div class="text-center mb-4 sm:mb-6 flex-shrink-0">
                <h4 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                  {{ addon.name }}
                </h4>
                <p class="text-yellow-400 font-bold text-2xl sm:text-3xl">${{ addon.price }}</p>
              </div>
              
              <!-- Features List - takes remaining space -->
              <ul class="text-slate-300 space-y-2 sm:space-y-3 flex-grow mb-4 sm:mb-6">
                <li v-for="feature in addon.features" :key="feature" class="flex items-start">
                  <span class="text-yellow-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5">•</span>
                  <span class="group-hover:text-slate-200 transition-colors duration-300 leading-relaxed text-sm sm:text-base">{{ feature }}</span>
                </li>
              </ul>
              
              <!-- CTA Button - always at bottom -->
              <div class="flex-shrink-0">
                <button 
                  @click="handlePaidPlan(addon.name)"
                  class="w-full py-2.5 sm:py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg sm:rounded-xl font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Services Section -->
      <div class="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 lg:pt-20 border-t border-slate-700">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">Additional Services</h3>
          <p class="text-base sm:text-lg lg:text-xl text-slate-300 px-2 sm:px-0">Specialized solutions for unique needs</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <!-- Remote Monitoring Card -->
          <div class="bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-700 hover:border-yellow-400 transition-all duration-300">
            <!-- Fixed height container with flex layout -->
            <div class="min-h-[240px] sm:min-h-[260px] lg:min-h-[280px] flex flex-col">
              <!-- Header -->
              <div class="flex items-center mb-4 sm:mb-6 flex-shrink-0">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <ComputerDesktopIcon class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 class="text-lg sm:text-xl font-bold text-white">Remote Monitoring</h4>
                  <p class="text-yellow-400 font-bold text-sm sm:text-base">$25-$50/month per device</p>
                </div>
              </div>
              
              <!-- Features List - takes remaining space -->
              <ul class="text-slate-300 space-y-1.5 sm:space-y-2 flex-grow mb-4 sm:mb-6 text-sm sm:text-base">
                <li>• 24/7 performance and security monitoring</li>
                <li>• Alerts for suspicious activity or failures</li>
                <li>• Priority response when issues detected</li>
              </ul>
              
              <!-- CTA Button - always at bottom -->
              <div class="flex-shrink-0">
                <button 
                  @click="handlePaidPlan('Remote Monitoring')"
                  class="w-full py-2.5 sm:py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 text-sm sm:text-base"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          
          <!-- Linux Migration Card -->
          <div class="bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-700 hover:border-yellow-400 transition-all duration-300">
            <!-- Fixed height container with flex layout -->
            <div class="min-h-[240px] sm:min-h-[260px] lg:min-h-[280px] flex flex-col">
              <!-- Header -->
              <div class="flex items-center mb-4 sm:mb-6 flex-shrink-0">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <CommandLineIcon class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 class="text-lg sm:text-xl font-bold text-white">Linux Migration Package</h4>
                  <p class="text-yellow-400 font-bold text-sm sm:text-base">$250-$950 per device</p>
                </div>
              </div>
              
              <!-- Features List - takes remaining space -->
              <ul class="text-slate-300 space-y-1.5 sm:space-y-2 flex-grow mb-4 sm:mb-6 text-sm sm:text-base">
                <li>• System compatibility assessment</li>
                <li>• Data backup and OS migration</li>
                <li>• Linux setup and user training</li>
              </ul>
              
              <!-- CTA Button - always at bottom -->
              <div class="flex-shrink-0">
                <button 
                  @click="handlePaidPlan('Linux Migration Package')"
                  class="w-full py-2.5 sm:py-3 border border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Trust Indicators -->
      <div class="text-center mt-12 sm:mt-16">
        <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-slate-400 text-xs sm:text-sm">
          <span>💯 No contracts</span>
          <span class="hidden sm:inline">•</span>
          <span>🛡️ 100% satisfaction guarantee</span>
          <span class="hidden sm:inline">•</span>
          <span>📞 24/7 support</span>
        </div>
      </div>
    </div>
  </section>
</template>