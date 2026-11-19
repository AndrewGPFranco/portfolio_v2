<script setup lang="ts">
import { contact } from '@/data/portfolio'
import { useI18n } from '@/composables/useI18n'

defineProps<{ variant: 'primary' | 'ghost' }>()
const { t } = useI18n()
</script>

<template>
  <a v-if="contact.cv" :class="['btn', variant]" :href="contact.cv" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>{{ t('Baixar currículo', 'Download résumé') }}
  </a>
  <!-- Sem PDF ainda: botão bloqueado -->
  <button v-else type="button" :class="['btn', variant]" disabled :title="t('O currículo ainda não está disponível', 'The résumé isn’t available yet')">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>{{ t('Currículo em breve', 'Résumé coming soon') }}
  </button>
</template>
