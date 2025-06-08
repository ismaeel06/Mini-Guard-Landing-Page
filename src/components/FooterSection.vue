<script setup lang="ts">
import ShieldIcon from '../assets/icons/ShieldIcon.vue';
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <!-- Footer -->
  <footer class="bg-slate-900 border-t border-slate-700 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
    <!-- Background accent -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
        <!-- Company Info -->
        <div class="sm:col-span-2 lg:col-span-2">
          <button 
        @click="scrollToTop"
        class="flex items-center space-x-2 sm:space-x-3 magnetic-element group hover:scale-105 transition-all duration-300 rounded-lg p-1"
      >
          <div class="flex items-center space-x-3 mb-4 sm:mb-6 group">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg flex-shrink-0">
              <ShieldIcon class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-slate-900 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span class="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
              MiniGuard<span class="text-yellow-400">Tech</span>
            </span>
          </div>
          </button>
          <p class="text-slate-300 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
            Cybersecurity made simple for small business. We protect what matters most to you with expert support you can actually understand.
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-3 sm:space-x-4">
            <a href="#" class="group w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all duration-300 border border-slate-700 hover:border-yellow-400">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="group w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all duration-300 border border-slate-700 hover:border-yellow-400">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="group w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all duration-300 border border-slate-700 hover:border-yellow-400">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.120.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.766-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
            <a href="#" class="group w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all duration-300 border border-slate-700 hover:border-yellow-400">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
          <ul class="space-y-2 sm:space-y-3">
            <li><a href="#services" class="text-slate-400 hover:text-yellow-400 hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base">Services</a></li>
            <li><a href="#pricing" class="text-slate-400 hover:text-yellow-400 hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base">Pricing</a></li>
            <li><a href="#about" class="text-slate-400 hover:text-yellow-400 hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base">About Us</a></li>
            <li><a href="#contact" class="text-slate-400 hover:text-yellow-400 hover:translate-x-1 transition-all duration-300 inline-block text-sm sm:text-base">Contact</a></li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Get in Touch</h4>
          <div class="space-y-3 sm:space-y-4">
            <a href="tel:+14433193515" class="group flex items-center space-x-2 sm:space-x-3 text-slate-400 hover:text-yellow-400 transition-colors duration-300">
              <div class="w-7 h-7 sm:w-8 sm:h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300 flex-shrink-0">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                </svg>
              </div>
              <span class="text-xs sm:text-sm">(443) 319-3515</span>
            </a>
            
            <a href="mailto:info@miniguardtech.com" class="group flex items-center space-x-2 sm:space-x-3 text-slate-400 hover:text-yellow-400 transition-colors duration-300">
              <div class="w-7 h-7 sm:w-8 sm:h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300 flex-shrink-0">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
              </div>
              <span class="text-xs sm:text-sm break-all">info@miniguardtech.com</span>
            </a>
            
            <div class="group flex items-start space-x-2 sm:space-x-3 text-slate-400">
              <div class="w-7 h-7 sm:w-8 sm:h-8 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                </svg>
              </div>
              <span class="text-xs sm:text-sm leading-relaxed">Serving Small Businesses Nationwide</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="border-t border-slate-800 pt-6 sm:pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <!-- Copyright -->
          <div class="text-center sm:text-left">
            <p class="text-slate-400 mb-1 text-sm sm:text-base">© 2025 MiniGuardTech. All rights reserved.</p>
            <p class="text-xs sm:text-sm text-slate-500">Cybersecurity made simple for small business</p>
          </div>
          
          <!-- Trust Indicators -->
          <div class="flex flex-col xs:flex-row items-center space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-6 text-xs sm:text-sm text-slate-500">
            <span class="flex items-center space-x-1">
              <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
              </svg>
              <span>SSL Secured</span>
            </span>
            <span class="flex items-center space-x-1">
              <svg class="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A3,3 0 0,1 15,5V7H20A1,1 0 0,1 21,8V20A1,1 0 0,1 20,21H4A1,1 0 0,1 3,20V8A1,1 0 0,1 4,7H9V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V7H13V5A1,1 0 0,0 12,4Z"/>
              </svg>
              <span>Privacy Protected</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>