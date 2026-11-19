<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
<section id="sobre" class="block">
  <h2>{{ t('Sobre mim', 'About me') }}</h2>
  <div class="about">
    <div class="about-text">
      <p>{{ t('Trabalho como desenvolvedor full-stack, mais no backend com Java e Spring e no frontend com Vue.js. Gosto bastante de mexer com cache distribuído, processamento de grande volume de dados e automação de processos.', 'I work as a full-stack developer, mostly on the back end with Java and Spring and on the front end with Vue.js. I really enjoy working with distributed caching, processing large volumes of data and process automation.') }}</p>
      <p>{{ t('Comecei na Élin Duxus como estagiário e hoje sou Analista de Sistemas lá. Fora do trabalho, toco uns projetos pessoais e tenho estudado Go.', 'I joined Élin Duxus as an intern and today I’m a Systems Analyst there. Outside work, I keep a few personal projects going and I’ve been studying Go.') }}</p>
      <div class="facts">
        <span>{{ t('Cidade', 'City') }}: <b>São Paulo, {{ t('Brasil', 'Brazil') }}</b></span>
        <span>{{ t('Trabalho', 'Work') }}: <b>{{ t('remoto', 'remote') }}</b></span>
        <span>{{ t('Foco', 'Focus') }}: <b>{{ t('backend e sistemas distribuídos', 'backend and distributed systems') }}</b></span>
      </div>
    </div>
  </div>
</section>
</template>
