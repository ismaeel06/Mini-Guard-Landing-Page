<script setup lang="ts">
import { ref } from 'vue'
import ScrollProgressIndicator from './components/ScrollProgressIndicator.vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PricingSection from './components/PricingSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import SuccessModal from './components/SuccessModal.vue'

const showSuccessModal = ref(false)

const handleFormSubmitted = () => {
  showSuccessModal.value = true
}
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-white overflow-x-hidden">
    <!-- Scroll Progress Indicator -->
    <ScrollProgressIndicator />
    
    <!-- Navigation -->
    <Navbar />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Pricing Section -->
    <PricingSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Contact Section -->
    <ContactSection @form-submitted="handleFormSubmitted" />

    <!-- Footer Section -->
    <FooterSection />

    <!-- Success Modal -->
    <SuccessModal :showModal="showSuccessModal" @close="showSuccessModal = false" />
  </div>
</template>