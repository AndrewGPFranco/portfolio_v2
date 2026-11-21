<script setup lang="ts">
import { projects } from '@/data/portfolio'
import { icons } from '@/data/icons'
import { covers } from '@/data/covers'
import { nameOf } from '@/composables/useCareer'
import { useI18n } from '@/composables/useI18n'
import { useUi } from '@/composables/useUi'

const { t, L } = useI18n()
const { openPreview } = useUi()
</script>

<template>
<section id="projetos" class="block">
  <header class="block-head">
    <h2>{{ t('Projetos', 'Projects') }}</h2>
    <p class="sub">{{ t('Os projetos pessoais em que mais trabalhei. O código é privado, então nos detalhes eu conto por que fiz, como funciona por dentro e o que vale destacar.', 'The personal projects I’ve worked on the most. The code is private, so the details cover why I built it, how it works under the hood and what’s worth pointing out.') }}</p>
  </header>
  <div class="block-body">
    <div class="projects">
      <article v-for="(pj, i) in projects" :key="pj.id" class="project">
        <div class="pj-art" aria-hidden="true" v-html="covers[pj.cover]"></div>

        <div class="pj-body">
          <div class="pj-top">
            <span class="pj-n" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
            <span v-if="pj.status" class="status" :class="{ ok: pj.live }">{{ L(pj.status) }}</span>
          </div>
          <h3>{{ L(pj.name) }}</h3>
          <p class="pj-desc">{{ L(pj.desc) }}</p>

          <ul class="pj-hl">
            <li v-for="(h, k) in pj.highlights.slice(0, 3)" :key="k">{{ L(h.title) }}</li>
          </ul>

          <div class="pj-foot">
            <ul class="pj-stack" :aria-label="t('Tecnologias', 'Tech')">
              <li v-for="s in pj.stack" :key="s" :title="nameOf(s)"><img :src="icons[s]" :alt="nameOf(s)"></li>
            </ul>
            <button class="pj-cta" @click="openPreview(pj)" :aria-label="t('Ver detalhes do ', 'See details of ') + L(pj.name)">
              {{ t('Ver detalhes', 'See details') }}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
</template>
