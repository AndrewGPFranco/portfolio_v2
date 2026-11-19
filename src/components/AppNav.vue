<script setup lang="ts">
import { sections } from '@/data/portfolio'
import { useI18n } from '@/composables/useI18n'
import { useTheme } from '@/composables/useTheme'
import { useNav } from '@/composables/useNav'

const { lang, t, L, toggleLang } = useI18n()
const { theme, toggleTheme } = useTheme()
const { active, go } = useNav()
</script>

<template>
  <nav class="nav" :aria-label="t('Seções', 'Sections')">
    <div class="nav-in">
      <b>Andrew</b>
      <div class="seg">
        <a v-for="s in sections" :key="s.id" :href="'#' + s.id" :class="{ on: active === s.id }" @click.prevent="go(s.id)">{{ L(s.label) }}</a>
      </div>
      <button class="ctl" @click="go('contato')" :aria-label="t('Ir para contato', 'Go to contact')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg></button>
      <button class="ctl" @click="toggleLang" :aria-label="t('Switch to English', 'Mudar para português')" :lang="lang === 'pt' ? 'en' : 'pt-BR'">{{ lang === 'pt' ? 'EN' : 'PT' }}</button>
      <button class="ctl" @click="toggleTheme" :aria-label="theme === 'dark' ? t('Mudar para tema claro', 'Switch to light theme') : t('Mudar para tema escuro', 'Switch to dark theme')">
        <svg v-if="theme === 'dark'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z"/></svg>
      </button>
    </div>
  </nav>
</template>
