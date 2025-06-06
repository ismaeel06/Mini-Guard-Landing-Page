<template>
  <!-- Success Modal -->
  <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 lg:p-8">
    <div class="bg-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 max-w-sm sm:max-w-md lg:max-w-lg w-full animate-scale-up border border-slate-700 shadow-2xl">
      <div class="text-center">
        <!-- Success Icon -->
        <div class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
          <svg class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        
        <!-- Title -->
        <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-white">Message Sent!</h3>
        
        <!-- Description -->
        <p class="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-0">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
        
        <!-- Action Buttons -->
        <div class="space-y-3 sm:space-y-4">
          <!-- Primary Close Button -->
          <button 
            @click="closeModal" 
            class="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            <span class="flex items-center justify-center gap-2">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Got it!
            </span>
          </button>
          
          <!-- Call Now Button -->
          <a 
            :href="phoneHref"
            class="w-full border-2 border-green-400 text-green-400 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-green-400 hover:text-slate-900 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-800 inline-flex items-center justify-center gap-2 no-underline"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
            </svg>
            <span class="hidden xs:inline">Call Now - (443) 319-3515</span>
            <span class="xs:hidden">Call (443) 319-3515</span>
          </a>
        </div>
        
        <!-- Additional Info -->
        <div class="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-700">
          <div class="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-4 text-xs sm:text-sm text-slate-400">
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
              </svg>
              Message delivered
            </span>
            <span class="hidden xs:block text-slate-600">•</span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
              </svg>
              24hr response
            </span>
          </div>
          
          <!-- Call Availability Info -->
          <div class="mt-3 sm:mt-4 text-xs text-slate-500 leading-relaxed">
            <div class="flex items-center justify-center gap-1">
              <svg class="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
              </svg>
              <span>Available Mon-Fri 9AM-6PM EST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  showModal: boolean
}

defineProps<Props>()
const emit = defineEmits(['close'])

// Company phone number
const phoneNumber = '4433193515'
const formattedPhone = '(443) 319-3515'

// Create tel: href for dialer
const phoneHref = computed(() => `tel:+1${phoneNumber}`)

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
@keyframes scale-up {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-scale-up {
  animation: scale-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Custom XS breakpoint for very small screens */
@media (min-width: 475px) {
  .xs\:inline {
    display: inline;
  }
  
  .xs\:hidden {
    display: none;
  }
  
  .xs\:flex-row {
    flex-direction: row;
  }
  
  .xs\:block {
    display: block;
  }
}

/* Enhanced backdrop blur for supported browsers */
@supports (backdrop-filter: blur(8px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(8px);
  }
}

/* Remove default link styling */
a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}
</style>