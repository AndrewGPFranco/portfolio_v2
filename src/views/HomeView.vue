<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import CareerSection from '@/components/CareerSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import StackSection from '@/components/StackSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import { sectionIds, useNav } from '@/composables/useNav'

const { go, spy } = useNav()

onMounted(() => {
  window.addEventListener('scroll', spy, { passive: true })
  requestAnimationFrame(() => requestAnimationFrame(spy))
  const h = location.hash.slice(1)
  if (sectionIds.includes(h)) setTimeout(() => go(h), 50)
})
onBeforeUnmount(() => window.removeEventListener('scroll', spy))
</script>

<template>
  <main class="page">
    <HeroSection />
    <AboutSection />
    <CareerSection />
    <ProjectsSection />
    <StackSection />
    <ContactSection />
  </main>
</template>
