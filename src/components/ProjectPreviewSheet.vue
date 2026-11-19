<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { covers } from '@/data/covers'
import { useI18n } from '@/composables/useI18n'
import { useUi } from '@/composables/useUi'

const { t, L } = useI18n()
const { preview, closePreview } = useUi()

const screens = computed(() => preview.value?.screens ?? [])
const pvSheet = ref<HTMLElement | null>(null)
const gal = ref<HTMLElement | null>(null)
const galIdx = ref(0)

const onGal = () => {
  const g = gal.value
  if (g) galIdx.value = Math.round(g.scrollLeft / g.clientWidth)
}

watch(preview, (pj) => {
  if (!pj) return
  galIdx.value = 0
  nextTick(() => pvSheet.value?.focus())
})
</script>

<template>
<transition name="fade"><div v-if="preview" class="scrim" @click="closePreview"></div></transition>
<transition name="up">
  <div v-if="preview" class="sheet wide" role="dialog" aria-modal="true" :aria-label="t('Prévia do ', 'Preview of ') + L(preview.name)" ref="pvSheet" tabindex="-1">
    <div class="grab" aria-hidden="true"></div>
    <h3>{{ L(preview.name) }}</h3>

    <template v-if="screens.length">
      <p class="pv-note">{{ t('Algumas telas do projeto. Arrasta pro lado pra ver as outras.', 'A few screens from the project. Swipe to see the rest.') }}</p>
      <div class="gallery" ref="gal" @scroll.passive="onGal">
        <figure class="shot" v-for="(s, k) in screens" :key="k">
          <div class="win">
            <div class="win-bar"><i></i><i></i><i></i><span>{{ preview.url }}</span></div>
            <div class="viewport"><img :src="s.src" :alt="L(s.title)" loading="lazy"></div>
          </div>
          <figcaption>{{ L(s.title) }}</figcaption>
        </figure>
      </div>
      <div class="dots" aria-hidden="true"><i v-for="(s, k) in screens" :key="k" :class="{ on: k === galIdx }"></i></div>
    </template>

    <div v-else class="pv-wip win">
      <div class="win-bar"><i></i><i></i><i></i><span>{{ preview.url }}</span></div>
      <div class="viewport">
        <span aria-hidden="true" v-html="covers[preview.cover]"></span>
        <div class="pv-wip-msg" role="status">
          <span class="pill-now"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>{{ t('Em desenvolvimento', 'In progress') }}</span>
          <b>{{ t('Prévia chegando em breve', 'Preview coming soon') }}</b>
          <p>{{ t('Ainda estou preparando os prints desse projeto. Logo eles aparecem aqui.', 'I’m still putting together the screenshots for this project. They’ll show up here soon.') }}</p>
        </div>
      </div>
    </div>

    <button class="close" @click="closePreview">{{ t('Fechar', 'Close') }}</button>
  </div>
</transition>
</template>
