<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
import TechSheet from '@/components/TechSheet.vue'
import ProjectPreviewSheet from '@/components/ProjectPreviewSheet.vue'
import { useUi } from '@/composables/useUi'

const { toast, current, close, preview, closePreview } = useUi()

const onKey = (e: KeyboardEvent) => {
  if (e.key !== 'Escape') return
  if (current.value) close()
  else if (preview.value) closePreview()
}
onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <AppNav />
  <RouterView />
  <AppFooter />

  <transition name="fade"><div v-if="toast" class="toast" role="status">{{ toast }}</div></transition>

  <ProjectPreviewSheet />
  <TechSheet />
</template>
