<script setup lang="ts">
import { contact } from '@/data/portfolio'
import { useI18n } from '@/composables/useI18n'
import { useNav } from '@/composables/useNav'
import CvButton from '@/components/CvButton.vue'

const { t } = useI18n()
const { go } = useNav()
</script>

<template>
  <div class="hero">
    <div>
      <p class="who">{{ t('Analista de Sistemas na Élin Duxus', 'Systems Analyst at Élin Duxus') }}</p>
      <h1>{{ t('Olá, Andrew aqui!', 'Hi, Andrew here!') }}</h1>
      <p class="lede">{{ t('Sou desenvolvedor full-stack. Trabalho com Java e Spring no back e Vue.js no front.', 'I’m a full-stack developer. I work with Java and Spring on the back end and Vue.js on the front end.') }}</p>
      <div class="actions">
        <button class="btn primary" @click="go('contato')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg>{{ t('Falar comigo', 'Get in touch') }}</button>
        <CvButton variant="ghost" />
      </div>
    </div>
    <picture v-if="contact.photo" class="hero-photo">
      <source media="(max-width: 719px)" :srcset="contact.photoSquare" width="112" height="112" />
      <img
        :src="contact.photo"
        :alt="t('Foto do Andrew', 'Photo of Andrew')"
        width="240"
        height="300"
        fetchpriority="high"
      />
    </picture>
  </div>
</template>
