<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { contact, sections } from '@/data/portfolio'
import { icons } from '@/data/icons'
import { year } from '@/composables/useCareer'
import { useI18n } from '@/composables/useI18n'
import { useNav } from '@/composables/useNav'
import { useUi } from '@/composables/useUi'

const { lang, t, L } = useI18n()
const { go, toTop } = useNav()
const { copyEmail } = useUi()

const footNav = [
  { id: 'sobre', label: { pt: 'Sobre mim', en: 'About' } },
  ...sections,
  { id: 'contato', label: { pt: 'Contato', en: 'Contact' } },
]

const spFmt = () =>
  new Intl.DateTimeFormat(lang.value === 'pt' ? 'pt-BR' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date())
const spTime = ref(spFmt())
const timer = setInterval(() => (spTime.value = spFmt()), 30000)
watch(lang, () => (spTime.value = spFmt()))
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
<footer class="foot">
  <div class="foot-in">
    <div class="foot-top">
      <div>
        <p class="foot-name">Andrew</p>
        <p class="foot-tag">{{ t('Desenvolvedor full-stack. Java e Spring no back, Vue.js no front.', 'Full-stack developer. Java and Spring on the back end, Vue.js on the front end.') }}</p>
      </div>
      <div class="foot-cols">
        <nav :aria-label="t('Rodapé', 'Footer')">
          <h4>{{ t('Navegar', 'Explore') }}</h4>
          <ul class="foot-links">
            <li v-for="s in footNav" :key="s.id"><a :href="'#' + s.id" @click.prevent="go(s.id)">{{ L(s.label) }}</a></li>
          </ul>
        </nav>
        <div>
          <h4>{{ t('Contato', 'Contact') }}</h4>
          <ul class="foot-links">
            <li><button @click="copyEmail"><span class="mailico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg></span>E-mail</button></li>
            <li><a :href="contact.linkedin" target="_blank" rel="noopener"><img :src="icons.linkedin" alt="">LinkedIn</a></li>
            <li><a :href="contact.github" target="_blank" rel="noopener"><img :src="icons.github" alt="">GitHub</a></li>
            <li v-if="contact.cv"><a :href="contact.cv" target="_blank" rel="noopener">{{ t('Currículo (PDF)', 'Résumé (PDF)') }}</a></li>
            <li v-else><span class="soon">{{ t('Currículo (em breve)', 'Résumé (soon)') }}</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© {{ year }} Andrew</span>
      <span class="made">{{ t('Feito no Neovim, no Fedora', 'Made in Neovim, on Fedora') }}</span>
      <button class="totop" @click="toTop"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>{{ t('Voltar ao topo', 'Back to top') }}</button>
    </div>
  </div>
</footer>
</template>
