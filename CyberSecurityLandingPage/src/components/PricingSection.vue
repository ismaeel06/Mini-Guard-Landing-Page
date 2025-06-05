<template>
  <!-- Pricing Section -->
  <section id="pricing" class="py-32 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-slate-800"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-block mb-6">
          <span class="text-yellow-400 font-semibold text-lg tracking-wider uppercase">Pricing</span>
          <div class="h-1 w-16 bg-yellow-400 mx-auto mt-2"></div>
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 text-white">
          Simple, Transparent Pricing
        </h2>
        <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Choose the protection level that's right for your business
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div 
          v-for="(plan, index) in pricingPlans" 
          :key="index"
          class="group relative transition-all duration-300 hover:scale-105 hover:-translate-y-2"
          :class="{ 'lg:scale-105': plan.popular }"
        >
          <!-- Main Card -->
          <div 
            class="relative bg-slate-900 rounded-3xl p-8 border transition-all duration-300 hover:shadow-2xl min-h-[500px] flex flex-col"
            :class="plan.popular 
              ? 'border-yellow-400 hover:shadow-yellow-400/20' 
              : 'border-slate-700 hover:border-yellow-400 hover:shadow-yellow-400/10'"
          >
            <!-- Gradient Background Overlay -->
            <div 
              class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :class="plan.popular 
                ? 'bg-gradient-to-br from-yellow-400/5 to-transparent' 
                : 'bg-gradient-to-br from-yellow-400/5 to-transparent'"
            ></div>

            <!-- Popular Badge -->
            <div v-if="plan.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div class="bg-yellow-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
            </div>

            <!-- Plan Header -->
            <div class="text-center mb-8 pt-4 relative z-10">
              <h3 class="text-2xl md:text-3xl font-black mb-4 uppercase tracking-wide text-white group-hover:text-yellow-400 transition-colors duration-300">
                {{ plan.name }}
              </h3>
              
              <!-- Price Display -->
              <div class="mb-6">
                <div class="text-sm text-slate-400 mb-2 uppercase tracking-wider">Starting</div>
                <div class="flex items-baseline justify-center">
                  <span class="text-5xl md:text-6xl font-black text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                    ${{ plan.price }}
                  </span>
                  <span class="text-xl text-slate-400 ml-2 font-medium group-hover:text-slate-300 transition-colors duration-300">{{ plan.period }}</span>
                </div>
              </div>
            </div>
            
            <!-- Features List -->
            <ul class="space-y-4 mb-8 flex-1 relative z-10">
              <li 
                v-for="(feature, featureIndex) in plan.features" 
                :key="feature" 
                class="flex items-start opacity-90 group-hover:opacity-100 transition-all duration-300"
                :style="{ transitionDelay: `${featureIndex * 50}ms` }"
              >
                <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-slate-200 leading-relaxed group-hover:text-white transition-colors duration-300">{{ feature }}</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <div class="relative z-10">
              <button 
                @click="openCalendly" 
                class="w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg relative overflow-hidden"
                :class="plan.popular 
                  ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-500 hover:shadow-yellow-400/30' 
                  : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 hover:shadow-yellow-400/30'"
              >
                <!-- Button shine effect -->
                <div class="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span class="relative z-10">Get Started Today</span>
              </button>
            </div>

            <!-- Bottom accent line -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-85 transition-transform duration-300 origin-center rounded-b-3xl"></div>
          </div>
        </div>
      </div>
      
      <!-- Trust Indicators -->
      <div class="text-center mt-16">
        <p class="text-slate-400 mb-4">💯 No contracts • 🛡️ 100% satisfaction guarantee • 📞 24/7 support</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Pricing plans
const pricingPlans = ref([
  {
    name: 'One-Time Service',
    price: '297',
    period: '+',
    popular: false,
    features: [
      'Wi-Fi security setup',
      'Password & two-factor setup',
      'Antivirus install & check',
      'Email security review',
      'Automated backups setup'
    ]
  },
  {
    name: 'Quarterly Checkups',
    price: '149',
    period: '/qtr',
    popular: true,
    features: [
      'Quarterly health checks',
      'Antivirus & backups review',
      'Password help & Wi-Fi monitoring',
      'Monthly checkups',
      'Priority support'
    ]
  },
  {
    name: 'Monthly Support',
    price: '99',
    period: '/mo',
    popular: false,
    features: [
      'Monthly system health checks',
      'Ongoing IT & cybersecurity support',
      'Priority response times',
      'Cloud setup assistance',
      'Unlimited support calls'
    ]
  }
])

// Methods
const openCalendly = () => {
  window.open('https://calendly.com/miniguardtech-info/10min', '_blank')
}
</script>