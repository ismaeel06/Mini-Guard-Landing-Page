<script setup lang="ts">
import { ref } from 'vue'
// Import Heroicons
import { 
  CloudArrowUpIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  ClockIcon,
  HomeIcon
} from '@heroicons/vue/24/solid'

// Your Calendly Configuration
const CALENDLY_URL = 'https://calendly.com/miniguardtech-info/10min'

// Updated Monthly Cybersecurity Plans
const monthlyPlans = ref([
  {
    name: 'Basic Plan',
    price: '300',
    period: '/mo',
    popular: false,
    badge: 'Basic Protection',
    features: [
      'Initial Snapshot Security Check (one-time)',
      'Monthly System Health Check (hardware, software, network)',
      '1 Hour of Remote Support per Month',
      'On-call Security & IT Advice',
      'Simple Malware & Antivirus Monitoring',
      'Perfect for small teams getting started'
    ]
  },
  {
    name: 'Standard Plan',
    price: '500',
    period: '/mo',
    popular: true,
    badge: 'Most Popular',
    features: [
      'Everything in Basic, plus:',
      'Monthly Phishing Simulation Test & Employee Report',
      'Patch Management & Software Updates',
      'Secure Data Backup Monitoring',
      'Up to 3 Hours of Remote Support per Month',
      'Login & Access Monitoring for Key Devices'
    ]
  },
  {
    name: 'Premium Plan',
    price: '750',
    period: '/mo',
    popular: false,
    badge: 'Complete Protection',
    features: [
      'Everything in Standard, plus:',
      'Priority Response Times',
      'Unlimited Remote Support (within fair use)',
      '1 On-site Visit per Month (locally)',
      'Employee Cybersecurity Training (quarterly)',
      'Quarterly Network Scan & Report',
      'Proactive IT Infrastructure Planning'
    ]
  }
])

// Optional Add-Ons with updated pricing
const optionalAddons = ref([
  {
    name: 'Additional On-Site Visits',
    price: '150',
    priceNote: 'per visit',
    icon: HomeIcon,
    features: [
      'Professional on-site technical support',
      'Hardware troubleshooting & setup',
      'Network configuration assistance',
      'Local consultation & training'
    ]
  },
  {
    name: 'Emergency After-Hours Support',
    price: '100',
    priceNote: '/hour',
    icon: ClockIcon,
    features: [
      '24/7 emergency response availability',
      'Critical system recovery support',
      'Urgent security incident response',
      'Priority escalation handling'
    ]
  },
  {
    name: 'New Device Setup',
    price: '50',
    priceNote: '/device',
    icon: ComputerDesktopIcon,
    features: [
      'Complete device configuration',
      'Security software installation',
      'Network integration & testing',
      'User training & documentation'
    ]
  },
  {
    name: 'Email Migration or Cleanup',
    price: '200',
    priceNote: 'starting at',
    icon: ShieldCheckIcon,
    features: [
      'Complete email system migration',
      'Data cleanup & organization',
      'Security configuration setup',
      'User training on new systems'
    ]
  },
  {
    name: 'Google Workspace/Microsoft 365 Setup',
    price: '250',
    priceNote: 'one-time',
    icon: CloudArrowUpIcon,
    features: [
      'Professional cloud suite setup',
      'User account configuration',
      'Security & compliance settings',
      'Integration with existing systems'
    ]
  }
])

// Legacy services (keeping for existing customers)
const legacyServices = ref([
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
  }
])

// Methods
const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: CALENDLY_URL,
      parentElement: document.body,
      rootElement: document.body,
      prefill: {
        name: 'Monthly Plan Interest',
        email: '',
        customAnswers: {
          a1: 'Monthly Cybersecurity Plan Inquiry'
        }
      },
      utm: {
        utmCampaign: 'monthly-plans',
        utmSource: 'miniguardtech-site',
        utmMedium: 'web'
      }
    })
  } else {
    window.open(CALENDLY_URL, '_blank')
  }
}

const handlePaidPlan = (planName: string) => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
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
          <span class="text-yellow-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wider uppercase">Monthly Plans</span>
          <div class="h-1 w-12 sm:w-16 lg:w-20 bg-yellow-400 mx-auto mt-2"></div>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white leading-tight">
          Monthly Cybersecurity Plans
        </h2>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed px-2 sm:px-0 mb-6">
          Our goal at MiniGuardTech is to provide premium cybersecurity and IT support to small businesses that need reliable, proactive protection without the cost of a full-time IT department. Choose from one of our three monthly packages, designed to scale with your needs.
        </p>
        <div class="inline-flex items-center gap-2 bg-slate-700/50 px-4 py-2 rounded-full text-slate-300 text-sm">
          <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
          </svg>
          <span>Choose the protection level that scales with your needs</span>
        </div>
      </div>

      <!-- Monthly Plans -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
        <div 
          v-for="(plan, index) in monthlyPlans" 
          :key="index"
          class="group relative transition-all duration-300 hover:scale-105 hover:-translate-y-2"
          :class="{ 'md:col-span-2 lg:col-span-1 lg:scale-105': plan.popular }"
        >
          <!-- Main Card -->
          <div 
            class="relative bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-2xl min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] flex flex-col"
            :class="plan.popular 
              ? 'border-yellow-400 hover:shadow-yellow-400/20' 
              : 'border-slate-700 hover:border-yellow-400 hover:shadow-yellow-400/10'"
          >
            <!-- Badge -->
            <div class="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div 
                class="px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg"
                :class="plan.popular 
                  ? 'bg-yellow-400 text-slate-900' 
                  : index === 0 
                    ? 'bg-blue-500 text-white'
                    : 'bg-purple-500 text-white'"
              >
                {{ plan.badge }}
              </div>
            </div>

            <!-- Plan Header -->
            <div class="text-center mb-6 sm:mb-8 pt-3 sm:pt-4 relative z-10">
              <h3 class="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 uppercase tracking-wide text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                {{ plan.name }}
              </h3>
              
              <!-- Price Display -->
              <div class="mb-4 sm:mb-6">
                <div class="flex items-baseline justify-center">
                  <span class="text-4xl sm:text-5xl md:text-6xl font-black text-yellow-400 group-hover:scale-107 transition-transform duration-300">
                    ${{ plan.price }}
                  </span>
                  <span class="text-lg sm:text-xl text-slate-400 ml-2 font-medium group-hover:text-slate-300 transition-colors duration-300">{{ plan.period }}</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-400 mt-2 uppercase tracking-wider">Monthly Commitment</p>
              </div>
            </div>
            
            <!-- Features List -->
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
                <span 
                  class="text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300"
                  :class="feature.startsWith('Everything in') ? 'text-yellow-400 font-semibold' : 'text-slate-200'"
                >
                  {{ feature }}
                </span>
              </li>
            </ul>

            <!-- CTA Button -->
            <div class="relative z-10 mt-auto">
              <button 
                @click="handlePaidPlan(plan.name)"
                class="w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg relative overflow-hidden"
                :class="plan.popular 
                  ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-500 hover:shadow-yellow-400/30' 
                  : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 hover:shadow-yellow-400/30'"
              >
                <span class="relative z-10">Get Started</span>
              </button>
              
              <p class="text-slate-400 text-xs sm:text-sm text-center mt-2 sm:mt-3">
                Contact us to discuss your needs
              </p>
            </div>

            <!-- Bottom accent line -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-85 transition-transform duration-300 origin-center rounded-b-2xl sm:rounded-b-3xl"></div>
          </div>
        </div>
      </div>

      <!-- Optional Add-Ons Section with Custom Layout -->
      <div class="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 lg:pt-20 border-t border-slate-700">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">Optional Add-Ons</h3>
          <p class="text-base sm:text-lg lg:text-xl text-slate-300 px-2 sm:px-0">Need more flexibility? Add any of these services to your monthly plan</p>
        </div>
        
        <!-- Custom Grid Layout: 3 cards in first row, 2 cards centered in second row -->
        <div class="max-w-7xl mx-auto">
          <!-- First Row: 3 cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div 
              v-for="(addon, index) in optionalAddons.slice(0, 3)" 
              :key="index"
              class="group bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-700 hover:border-yellow-400 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <!-- Fixed height container -->
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
                  <div class="text-yellow-400 font-bold">
                    <span class="text-2xl sm:text-3xl">${{ addon.price }}</span>
                    <span class="text-sm sm:text-base ml-1 text-slate-400">{{ addon.priceNote }}</span>
                  </div>
                </div>
                
                <!-- Features List -->
                <ul class="text-slate-300 space-y-2 sm:space-y-3 flex-grow mb-4 sm:mb-6">
                  <li v-for="feature in addon.features" :key="feature" class="flex items-start">
                    <span class="text-yellow-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5">•</span>
                    <span class="group-hover:text-slate-200 transition-colors duration-300 leading-relaxed text-sm sm:text-base">{{ feature }}</span>
                  </li>
                </ul>
                
                <!-- CTA Button -->
                <div class="flex-shrink-0">
                  <button 
                    @click="handlePaidPlan(addon.name)"
                    class="w-full py-2.5 sm:py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg sm:rounded-xl font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                  >
                    Add to Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Second Row: 2 cards centered -->
          <div class="flex justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
              <div 
                v-for="(addon, index) in optionalAddons.slice(3, 5)" 
                :key="index + 3"
                class="group bg-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-700 hover:border-yellow-400 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <!-- Fixed height container -->
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
                    <div class="text-yellow-400 font-bold">
                      <span class="text-2xl sm:text-3xl">${{ addon.price }}</span>
                      <span class="text-sm sm:text-base ml-1 text-slate-400">{{ addon.priceNote }}</span>
                    </div>
                  </div>
                  
                  <!-- Features List -->
                  <ul class="text-slate-300 space-y-2 sm:space-y-3 flex-grow mb-4 sm:mb-6">
                    <li v-for="feature in addon.features" :key="feature" class="flex items-start">
                      <span class="text-yellow-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5">•</span>
                      <span class="group-hover:text-slate-200 transition-colors duration-300 leading-relaxed text-sm sm:text-base">{{ feature }}</span>
                    </li>
                  </ul>
                  
                  <!-- CTA Button -->
                  <div class="flex-shrink-0">
                    <button 
                      @click="handlePaidPlan(addon.name)"
                      class="w-full py-2.5 sm:py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg sm:rounded-xl font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                      Add to Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Legacy Services Section (for existing customers) -->
      <div class="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 lg:pt-20 border-t border-slate-700">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">One-Time Services</h3>
          <p class="text-base sm:text-lg lg:text-xl text-slate-300 px-2 sm:px-0">Perfect for getting started or one-off assessments</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div 
            v-for="(service, index) in legacyServices" 
            :key="index"
            class="group relative transition-all duration-300 hover:scale-105 hover:-translate-y-2"
          >
            <div 
              class="relative bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-2xl min-h-[400px] flex flex-col"
              :class="service.price === '0' 
                ? 'border-green-500 hover:shadow-green-500/20' 
                : 'border-slate-700 hover:border-yellow-400 hover:shadow-yellow-400/10'"
            >
              <!-- Free Badge -->
              <div v-if="service.price === '0'" class="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div class="bg-green-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg">
                  Free Start
                </div>
              </div>

              <!-- Service Header -->
              <div class="text-center mb-6 sm:mb-8 pt-3 sm:pt-4 relative z-10">
                <h3 class="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 uppercase tracking-wide text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                  {{ service.name }}
                </h3>
                
                <div class="mb-4 sm:mb-6">
                  <div class="flex items-baseline justify-center">
                    <span class="text-4xl sm:text-5xl md:text-6xl font-black text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                      <span v-if="service.price === '0'">FREE</span>
                      <span v-else>${{ service.price }}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Features List -->
              <ul class="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow relative z-10">
              <li 
                v-for="(feature, featureIndex) in service.features" 
                :key="feature" 
                class="flex items-start opacity-90 group-hover:opacity-100 transition-all duration-300"
                :style="{ transitionDelay: `${featureIndex * 50}ms` }"
              >
                <div class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span 
                  class="text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300"
                  :class="feature.startsWith('Everything in') ? 'text-yellow-400 font-semibold' : 'text-slate-200'"
                >
                  {{ feature }}
                </span>
              </li>
            </ul>

              <!-- CTA Button -->
              <div class="relative z-10 mt-auto">
                <button 
                  @click="service.price === '0' ? openCalendly() : handlePaidPlan(service.name)"
                  class="w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg relative overflow-hidden"
                  :class="service.price === '0'
                    ? 'bg-green-500 text-white hover:bg-green-600 hover:shadow-green-500/30'
                    : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 hover:shadow-yellow-400/30'"
                >
                  <span class="relative z-10">
                    {{ service.price === '0' ? 'Get Free Assessment' : 'Contact Us' }}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Trust Indicators -->
      <div class="text-center mt-12 sm:mt-16">
        <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-slate-400 text-xs sm:text-sm">
          <span>💯 No long-term contracts</span>
          <span class="hidden sm:inline">•</span>
          <span>🛡️ 100% satisfaction guarantee</span>
          <span class="hidden sm:inline">•</span>
          <span>📞 Priority support included</span>
        </div>
      </div>
    </div>
  </section>
</template>