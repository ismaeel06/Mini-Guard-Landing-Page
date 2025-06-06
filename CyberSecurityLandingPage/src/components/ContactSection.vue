<template>  
  <!-- Contact Section -->
  <section id="contact" class="py-32 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-slate-800"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div class="inline-block mb-6">
            <span class="text-yellow-400 font-semibold text-lg tracking-wider uppercase">Get Started</span>
            <div class="h-1 w-20 bg-yellow-400 mx-auto mt-2"></div>
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-white">
            Ready to Secure Your Business?
          </h2>
          <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Get in touch for your free cybersecurity consultation
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Info -->
          <div class="space-y-12">
            <!-- Contact Methods -->
            <div>
              <h3 class="text-3xl font-bold mb-8 text-white">Get in Touch</h3>
              <div class="space-y-6">
                <!-- Phone Contact -->
                <div class="group flex items-center space-x-6 p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-yellow-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div class="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg class="w-7 h-7 text-slate-900 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-xl font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">Call Us</h4>
                    <p class="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Ready to talk? Give us a call</p>
                    <button @click="makeCall" class="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                      (555) 123-4567
                    </button>
                  </div>
                  <!-- Hover accent -->
                  <div class="w-0 h-8 bg-yellow-400 group-hover:w-1 transition-all duration-300 rounded-full"></div>
                </div>
                
                <!-- Email Contact -->
                <div class="group flex items-center space-x-6 p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-yellow-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div class="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg class="w-7 h-7 text-slate-900 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-xl font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">Email Us</h4>
                    <p class="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Drop us a line anytime</p>
                    <button @click="sendEmail" class="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                      info@miniguardtech.com
                    </button>
                  </div>
                  <!-- Hover accent -->
                  <div class="w-0 h-8 bg-yellow-400 group-hover:w-1 transition-all duration-300 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <!-- Quick Actions -->
            <div class="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-slate-600 transition-colors duration-300">
              <h4 class="text-2xl font-bold mb-6 text-white">Quick Actions</h4>
              <div class="space-y-4">
                <button @click="openCalendly" class="group w-full bg-yellow-400 text-slate-900 p-4 rounded-xl font-semibold text-lg hover:bg-yellow-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 relative overflow-hidden">
                  <!-- Button shine effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  <div class="relative flex items-center justify-center gap-3">
                    <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    Schedule Free Consultation
                  </div>
                </button>
                
                <button @click="downloadGuide" class="group w-full border-2 border-yellow-400 text-yellow-400 p-4 rounded-xl font-semibold hover:bg-yellow-400 hover:text-slate-900 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 relative overflow-hidden">
                  <!-- Background slide effect -->
                  <div class="absolute inset-0 bg-yellow-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <div class="relative flex items-center justify-center gap-3">
                    <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Download Security Guide
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="bg-slate-800 p-10 rounded-3xl border border-slate-700 hover:border-slate-600 transition-colors duration-300">
            <h3 class="text-3xl font-bold mb-8 text-white">Send us a Message</h3>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="group">
                  <label class="block text-sm font-semibold text-slate-300 mb-2 group-focus-within:text-yellow-400 transition-colors duration-300">First Name *</label>
                  <input 
                    v-model="form.firstName"
                    type="text" 
                    required 
                    class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 hover:border-slate-500 transition-all duration-300"
                    placeholder="John"
                  >
                </div>
                <div class="group">
                  <label class="block text-sm font-semibold text-slate-300 mb-2 group-focus-within:text-yellow-400 transition-colors duration-300">Last Name *</label>
                  <input 
                    v-model="form.lastName"
                    type="text" 
                    required 
                    class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 hover:border-slate-500 transition-all duration-300"
                    placeholder="Doe"
                  >
                </div>
              </div>
              
              <div class="group">
                <label class="block text-sm font-semibold text-slate-300 mb-2 group-focus-within:text-yellow-400 transition-colors duration-300">Email Address *</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  required 
                  class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 hover:border-slate-500 transition-all duration-300"
                  placeholder="john@company.com"
                >
              </div>
              
              <div class="group">
                <label class="block text-sm font-semibold text-slate-300 mb-2 group-focus-within:text-yellow-400 transition-colors duration-300">Phone Number</label>
                <input 
                  v-model="form.phone"
                  type="tel" 
                  class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 hover:border-slate-500 transition-all duration-300"
                  placeholder="(555) 123-4567"
                >
              </div>
              
              <div class="group">
                <label class="block text-sm font-semibold text-slate-300 mb-2 group-focus-within:text-yellow-400 transition-colors duration-300">Company Name</label>
                <input 
                  v-model="form.company"
                  type="text" 
                  class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 hover:border-slate-500 transition-all duration-300"
                  placeholder="Your Company"
                >
              </div>
              
              <div class="group">
                <label class="block text-sm font-semibold text-slate-300 mb-2 group-focus-within:text-yellow-400 transition-colors duration-300">Message *</label>
                <textarea 
                  v-model="form.message"
                  required 
                  rows="4"
                  class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 hover:border-slate-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your cybersecurity needs..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="group w-full bg-yellow-400 text-slate-900 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
              >
                <!-- Button shine effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span v-if="!isSubmitting" class="relative flex items-center justify-center gap-3">
                  <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Send Message
                </span>
                <span v-else class="relative flex items-center justify-center gap-3">
                  <svg class="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

// Methods
const openCalendly = () => {
  window.open('https://calendly.com/miniguardtech-info/10min', '_blank')
}

const makeCall = () => {
  window.open('tel:+15551234567', '_self')
}

const sendEmail = () => {
  window.open('mailto:info@miniguardtech.com', '_self')
}

const downloadGuide = () => {
  // In a real app, this would download a PDF
  console.log('Downloading cybersecurity guide...')
}

const submitForm = async () => {
  isSubmitting.value = true

  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScyX6lkYQzzqKpRmC-zD1lcOV7O6PUzlz3YXJWqai3R-c8_Ow/formResponse'

  const formData = new FormData()
  formData.append('entry.420612060', form.value.firstName) // First Name
  formData.append('entry.2075823586', form.value.lastName) // Last Name
  formData.append('entry.877119138', form.value.email)     // Email
  formData.append('entry.246506156', form.value.phone)     // Phone
  formData.append('entry.1508601139', form.value.company)  // Company
  formData.append('entry.1773674609', form.value.message)  // Message

  try {
    await fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors', // Important for Google Forms
      body: formData,
    })

    emit('form-submitted', true) // optional

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
    emit('form-submitted', false) // optional
  } finally {
    isSubmitting.value = false
  }
}
</script>