<template>  
  <!-- Contact Section -->
  <section id="contact" class="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-slate-800"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12 sm:mb-16 lg:mb-20">
          <div class="inline-block mb-4 sm:mb-6">
            <span class="text-yellow-400 font-semibold text-sm sm:text-base lg:text-lg tracking-wider uppercase">Get Started</span>
            <div class="h-1 w-16 sm:w-20 bg-yellow-400 mx-auto mt-2"></div>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white leading-tight">
            Ready to Secure Your Business?
          </h2>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Get in touch for your free cybersecurity consultation
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <!-- Contact Info -->
          <div class="space-y-8 sm:space-y-12">
            <!-- Contact Methods -->
            <div>
              <h3 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white">Get in Touch</h3>
              <div class="space-y-4 sm:space-y-6">
                <!-- Phone Contact -->
                <div @click="makeCall" class="group flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-800 border border-slate-700 hover:border-yellow-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div class="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                    <svg class="w-6 h-6 sm:w-7 sm:h-7 text-slate-900 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">Call Us</h4>
                    <p class="text-sm sm:text-base text-slate-300 group-hover:text-slate-200 transition-colors duration-300 mb-1">Ready to talk? Give us a call</p>
                    <button @click="makeCall" class="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors text-sm sm:text-base">
                      (443) 319-3515
                    </button>
                  </div>
                  <div class="w-0 h-6 sm:h-8 bg-yellow-400 group-hover:w-1 transition-all duration-300 rounded-full flex-shrink-0"></div>
                </div>
                
                <!-- Email Contact -->
                <div @click="sendEmail" class="group flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-800 border border-slate-700 hover:border-yellow-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div class="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                    <svg class="w-6 h-6 sm:w-7 sm:h-7 text-slate-900 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">Email Us</h4>
                    <p class="text-sm sm:text-base text-slate-300 group-hover:text-slate-200 transition-colors duration-300 mb-1">Drop us a line anytime</p>
                    <button @click="sendEmail" class="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors text-sm sm:text-base break-all">
                      info@miniguardtech.com
                    </button>
                  </div>
                  <div class="w-0 h-6 sm:h-8 bg-yellow-400 group-hover:w-1 transition-all duration-300 rounded-full flex-shrink-0"></div>
                </div>
              </div>
            </div>
            
            <!-- Quick Actions -->
            <div class="bg-slate-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-700 hover:border-slate-600 transition-colors duration-300">
              <h4 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Quick Actions</h4>
              <div class="space-y-3 sm:space-y-4">
                <!-- Schedule Free Consultation Button -->
                <button @click="openCalendlyPopup" class="group w-full bg-yellow-400 text-slate-900 p-3 sm:p-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:bg-yellow-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  <div class="relative flex items-center justify-center gap-2 sm:gap-3">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span class="hidden xs:inline">Schedule Free Consultation</span>
                    <span class="xs:hidden">Schedule Free Consultation</span>
                  </div>
                </button>
                
                <button @click="downloadGuide" class="group w-full border-2 border-yellow-400 text-yellow-400 p-3 sm:p-4 rounded-lg sm:rounded-xl font-semibold hover:bg-yellow-400 hover:text-slate-900 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 relative overflow-hidden text-sm sm:text-base">
                  <div class="absolute inset-0 bg-yellow-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <div class="relative flex items-center justify-center gap-2 sm:gap-3">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    <span class="hidden xs:inline">Download Security Guide</span>
                    <span class="xs:hidden">Get Guide</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="bg-slate-800 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-700 hover:border-slate-600 transition-colors duration-300">
            <h3 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white">Send us a Message</h3>
            <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-6">
              <!-- Name Fields -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div class="group">
                  <label class="block text-sm font-semibold text-slate-300 mb-2 group-focus-within:text-yellow-400 transition-colors duration-300">First Name *</label>
                  <input 
                    v-model="form.firstName"
                    type="text" 
                    required 
                    class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 hover:border-slate-500 transition-all duration-300 text-sm sm:text-base"
                    placeholder="First Name"
                  >
                </div>
                <div class="group">
                  <label class="block text-sm font-semibold text-slate-300 mb-2 group-focus-within:text-yellow-400 transition-colors duration-300">Last Name *</label>
                  <input 
                    v-model="form.lastName"
                    type="text" 
                    required 
                    class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 hover:border-slate-500 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Last Name"
                  >
                </div>
              </div>
              
              <!-- Email Field -->
              <div class="group">
                <label class="block text-sm font-semibold text-slate-300 mb-2 group-focus-within:text-yellow-400 transition-colors duration-300">Email Address *</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  required 
                  class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 hover:border-slate-500 transition-all duration-300 text-sm sm:text-base"
                  placeholder="abc@company.com"
                >
              </div>
              
              <!-- Phone Field -->
              <div class="group">
                <label class="block text-sm font-semibold text-slate-300 mb-2 group-focus-within:text-yellow-400 transition-colors duration-300">Phone Number</label>
                <input 
                  v-model="form.phone"
                  type="tel" 
                  class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 hover:border-slate-500 transition-all duration-300 text-sm sm:text-base"
                  placeholder="(443) 319-3515"
                >
              </div>
              
              <!-- Company Field -->
              <div class="group">
                <label class="block text-sm font-semibold text-slate-300 mb-2 group-focus-within:text-yellow-400 transition-colors duration-300">Company Name</label>
                <input 
                  v-model="form.company"
                  type="text" 
                  class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 hover:border-slate-500 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Your Company"
                >
              </div>
              
              <!-- Message Field -->
              <div class="group">
                <label class="block text-sm font-semibold text-slate-300 mb-2 group-focus-within:text-yellow-400 transition-colors duration-300">Message *</label>
                <textarea 
                  v-model="form.message"
                  required 
                  rows="4"
                  class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 hover:border-slate-500 transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell us about your cybersecurity needs..."
                ></textarea>
              </div>
              
              <!-- Submit Button -->
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="group w-full bg-yellow-400 text-slate-900 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span v-if="!isSubmitting" class="relative flex items-center justify-center gap-2 sm:gap-3">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Send Message
                </span>
                <span v-else class="relative flex items-center justify-center gap-2 sm:gap-3">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  Sending...
                </span>
              </button>

              <!-- Alternative: Call Instead Button -->
              <div class="text-center pt-2">
                <p class="text-slate-400 text-xs sm:text-sm mb-2 sm:mb-3">Or skip the form and</p>
                <button 
                  type="button"
                  @click="makeCall"
                  class="inline-flex items-center gap-1.5 sm:gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 text-sm sm:text-base"
                >
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Call us directly
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Your Calendly Configuration
const CALENDLY_URL = 'https://calendly.com/miniguardtech-info/10min'

// Form state
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

const isSubmitting = ref(false)

// Emit events to parent
const emit = defineEmits(['form-submitted'])

// Calendly Method - Use same popup approach everywhere
const openCalendlyPopup = () => {
  // Use Calendly's popup widget if available
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: CALENDLY_URL,
      parentElement: document.body,
      rootElement: document.body,
      prefill: {
        name: 'Contact Form Visitor',
        email: '',
        customAnswers: {
          a1: 'Contact Section - Schedule Free Consultation'
        }
      },
      utm: {
        utmCampaign: 'contact-consultation',
        utmSource: 'miniguardtech-site',
        utmMedium: 'web'
      }
    })
  } else {
    // Fallback to new tab
    window.open(CALENDLY_URL, '_blank')
  }
}

// Phone and Email methods
const makeCall = () => {
  window.open('tel:+14433193515', '_self')
}

const sendEmail = () => {
  window.open('mailto:info@miniguardtech.com', '_self')
}

const downloadGuide = () => {
  console.log('Downloading cybersecurity guide...')
  // Add actual download logic here
}

const submitForm = async () => {
  isSubmitting.value = true

  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScyX6lkYQzzqKpRmC-zD1lcOV7O6PUzlz3YXJWqai3R-c8_Ow/formResponse'

  const formData = new FormData()
  formData.append('entry.420612060', form.value.firstName)
  formData.append('entry.2075823586', form.value.lastName)
  formData.append('entry.877119138', form.value.email)
  formData.append('entry.246506156', form.value.phone)
  formData.append('entry.1508601139', form.value.company)
  formData.append('entry.1773674609', form.value.message)

  try {
    await fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })

    emit('form-submitted', true)

    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    }
  } catch (error) {
    console.error('Form submission error:', error)
    emit('form-submitted', false)
  } finally {
    isSubmitting.value = false
  }
}
</script>