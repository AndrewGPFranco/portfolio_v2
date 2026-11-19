<script setup lang="ts">
import { contact } from '@/data/portfolio'
import { icons } from '@/data/icons'
import { useI18n } from '@/composables/useI18n'
import { useUi } from '@/composables/useUi'
import CvButton from '@/components/CvButton.vue'

const { t } = useI18n()
const { copyEmail } = useUi()
const pretty = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
</script>

<template>
<section id="contato" class="block">
  <h2>{{ t('Contato', 'Contact') }}</h2>
  <p class="sub">{{ t('Quer conversar sobre alguma vaga ou projeto? Me chama por e-mail, é onde respondo mais rápido.', 'Want to talk about a role or a project? Email me, that’s where I reply fastest.') }}</p>
  <div class="contact-list">
    <div class="c-item">
      <span class="c-ico mail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg></span>
      <div class="c-body"><b>E-mail</b><span>{{ contact.email }}</span></div>
      <button class="c-act" @click="copyEmail">{{ t('Copiar', 'Copy') }}</button>
    </div>
    <a class="c-item" :href="contact.linkedin" target="_blank" rel="noopener">
      <span class="c-ico"><img :src="icons.linkedin" alt=""></span>
      <div class="c-body"><b>LinkedIn</b><span>{{ pretty(contact.linkedin) }}</span></div>
      <span class="c-act">{{ t('Abrir', 'Open') }}</span>
    </a>
    <a class="c-item" :href="contact.github" target="_blank" rel="noopener">
      <span class="c-ico"><img :src="icons.github" alt=""></span>
      <div class="c-body"><b>GitHub</b><span>{{ pretty(contact.github) }}</span></div>
      <span class="c-act">{{ t('Abrir', 'Open') }}</span>
    </a>
  </div>
  <div class="cv-box">
    <p><b>{{ t('Currículo', 'Résumé') }}</b>{{ contact.cv ? t('Se o processo seletivo pedir o PDF, é só baixar aqui.', 'If the hiring process asks for the PDF, grab it here.') : t('Ainda estou finalizando o PDF. Logo ele fica disponível aqui.', 'I’m still finishing the PDF. It’ll be available here soon.') }}</p>
    <CvButton variant="primary" />
  </div>
</section>
</template>
