<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { icons } from '@/data/icons'
import { nameOf } from '@/composables/useCareer'
import { useI18n } from '@/composables/useI18n'
import { useUi } from '@/composables/useUi'

const { t, L } = useI18n()
const { preview, closePreview } = useUi()

const screens = computed(() => preview.value?.screens ?? [])
const pvSheet = ref<HTMLElement | null>(null)
const gal = ref<HTMLElement | null>(null)
const galIdx = ref(0)

// Clipe só toca sozinho se o usuário não pediu menos movimento.
const reduceMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches

const onGal = () => {
  const g = gal.value
  if (g) galIdx.value = Math.round(g.scrollLeft / g.clientWidth)
}

watch(preview, (pj) => {
  if (!pj) return
  galIdx.value = 0
  nextTick(() => {
    pvSheet.value?.focus()
    pvSheet.value?.scrollTo?.(0, 0)
  })
})
</script>

<template>
<transition name="fade"><div v-if="preview" class="scrim" @click="closePreview"></div></transition>
<transition name="up">
  <div v-if="preview" class="sheet wide pv" role="dialog" aria-modal="true" :aria-label="t('Detalhes do ', 'Details of ') + L(preview.name)" ref="pvSheet" tabindex="-1">
    <div class="grab" aria-hidden="true"></div>

    <header class="pv-head">
      <h3>{{ L(preview.name) }}<span v-if="preview.status" class="status" :class="{ ok: preview.live }">{{ L(preview.status) }}</span></h3>
      <p class="pv-context">{{ L(preview.context) }}</p>
      <ul class="pv-facts">
        <li v-for="(f, k) in preview.facts" :key="k">{{ L(f) }}</li>
      </ul>
    </header>

    <section class="pv-block">
      <h4>{{ t('Como funciona', 'How it works') }}</h4>
      <div class="flows">
        <div v-for="(fl, i) in preview.flows" :key="i" class="flow">
          <span class="flow-title">{{ L(fl.title) }}</span>
          <ol class="flow-row">
            <li v-for="(n, j) in fl.nodes" :key="j" class="fnode" :class="{ key: n.key }">
              <b>{{ L(n.name) }}</b>
              <small v-if="n.note">{{ L(n.note) }}</small>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="pv-block">
      <h4>{{ t('O que eu destacaria', 'What I’d point out') }}</h4>
      <div class="hl-grid">
        <article v-for="(h, k) in preview.highlights" :key="k" class="hl">
          <span class="hl-n" aria-hidden="true">{{ String(k + 1).padStart(2, '0') }}</span>
          <h5>{{ L(h.title) }}</h5>
          <p>{{ L(h.text) }}</p>
        </article>
      </div>
    </section>

    <section v-if="preview.clip" class="pv-block">
      <h4>{{ L(preview.clip.title) }}</h4>
      <div class="win">
        <div class="win-bar"><i></i><i></i><i></i><span>{{ preview.url }}</span></div>
        <div class="viewport">
          <video :src="preview.clip.src" :poster="preview.clip.poster" :autoplay="!reduceMotion" :controls="reduceMotion" muted loop playsinline preload="metadata"></video>
        </div>
      </div>
    </section>

    <section v-if="screens.length" class="pv-block">
      <h4>{{ t('Telas', 'Screens') }}</h4>
      <div class="gallery" ref="gal" @scroll.passive="onGal">
        <figure class="shot" v-for="(s, k) in screens" :key="k">
          <div class="win">
            <div class="win-bar"><i></i><i></i><i></i><span>{{ preview.url }}</span></div>
            <div class="viewport"><img :src="s.src" :alt="L(s.title)" loading="lazy"></div>
          </div>
          <figcaption>{{ L(s.title) }}</figcaption>
        </figure>
      </div>
      <div v-if="screens.length > 1" class="dots" aria-hidden="true"><i v-for="(s, k) in screens" :key="k" :class="{ on: k === galIdx }"></i></div>
    </section>

    <section class="pv-block">
      <h4>Stack</h4>
      <div class="mini"><span v-for="s in preview.stack" :key="s"><img :src="icons[s]" alt="">{{ nameOf(s) }}</span></div>
    </section>

    <button class="close" @click="closePreview">{{ t('Fechar', 'Close') }}</button>
  </div>
</transition>
</template>
