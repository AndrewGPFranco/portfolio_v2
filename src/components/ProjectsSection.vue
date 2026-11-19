<script setup lang="ts">
import { reactive } from 'vue'
import { projects } from '@/data/portfolio'
import { icons } from '@/data/icons'
import { covers } from '@/data/covers'
import { nameOf } from '@/composables/useCareer'
import { useI18n } from '@/composables/useI18n'
import { useUi } from '@/composables/useUi'

const { t, L } = useI18n()
const { openPreview } = useUi()
const shown = reactive<Record<string, boolean>>({})
</script>

<template>
<section id="projetos" class="block">
  <header class="block-head">
    <h2>{{ t('Projetos', 'Projects') }}</h2>
    <p class="sub">{{ t('Os projetos pessoais em que mais trabalhei. O código é privado, mas dá pra ver as telas na prévia.', 'The personal projects I’ve worked on the most. The code is private, but you can see the screens in the preview.') }}</p>
  </header>
  <div class="block-body">
    <div class="projects">
      <article v-for="pj in projects" :key="pj.id" class="project">
        <button class="cover" @click="openPreview(pj)" :aria-label="t('Ver prévia do ', 'Preview ') + L(pj.name)">
          <span v-html="covers[pj.cover]"></span>
          <span class="play"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>{{ t('Prévia', 'Preview') }}</span>
        </button>
        <div class="in">
          <h3>{{ L(pj.name) }}<span v-if="pj.status" class="status" :class="{ ok: pj.live }">{{ L(pj.status) }}</span></h3>
          <p>{{ L(pj.desc) }}</p>
          <div class="pfoot">
            <button class="linkbtn" @click="openPreview(pj)">{{ t('Ver telas', 'See screens') }}</button>
            <button class="tbtn" :aria-expanded="!!shown[pj.id]" @click="shown[pj.id] = !shown[pj.id]">
              <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>
              {{ t('Tecnologias', 'Tech') }}
            </button>
          </div>
          <div class="reveal" :class="{ open: shown[pj.id] }"><div>
            <div class="mini"><span v-for="s in pj.stack" :key="s"><img :src="icons[s]" alt="">{{ nameOf(s) }}</span></div>
          </div></div>
        </div>
      </article>
    </div>
  </div>
</section>
</template>
