<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { layers, techs, type Tech } from '@/data/portfolio'
import { icons } from '@/data/icons'
import { useI18n } from '@/composables/useI18n'
import { useUi } from '@/composables/useUi'

const { t, L } = useI18n()
const { current, open, close } = useUi()

const sheet = ref<HTMLElement | null>(null)
const layerOf = (x: Tech) => layers.find((l) => l.id === x.layer)!
const relatedOf = (x: Tech) =>
  (x.related || []).map((id) => techs.find((y) => y.id === id)).filter((y): y is Tech => !!y)

watch(current, (x) => {
  if (!x) return
  nextTick(() => {
    if (sheet.value) {
      sheet.value.scrollTop = 0
      sheet.value.focus()
    }
  })
})
</script>

<template>
<transition name="fade"><div v-if="current" class="scrim" @click="close"></div></transition>
<transition name="up">
  <div v-if="current" class="sheet" role="dialog" aria-modal="true" :aria-label="current.name" ref="sheet" tabindex="-1">
    <div class="grab" aria-hidden="true"></div>
    <div class="sheet-head">
      <span class="tile"><img :src="icons[current.id]" alt=""></span>
      <div>
        <h3>{{ current.name }}</h3>
        <p class="where">{{ L(layerOf(current).name) }}<template v-if="current.deepening">, {{ t('estudando', 'studying') }}</template></p>
      </div>
    </div>
    <p class="text">{{ L(current.desc) }}</p>
    <div class="practice" v-if="current.practice"><b>{{ t('Onde usei', 'Where I used it') }}</b>{{ L(current.practice) }}</div>
    <div class="related" v-if="relatedOf(current).length">
      <h4>{{ t('Uso junto com', 'I use it with') }}</h4>
      <div class="techs">
        <button v-for="r in relatedOf(current)" :key="r.id" class="tech" :class="{ deep: r.deepening }" @click="open(r)">
          <span class="tile"><img :src="icons[r.id]" alt=""></span><span>{{ r.name }}</span>
        </button>
      </div>
    </div>
    <button class="close" @click="close">{{ t('Fechar', 'Close') }}</button>
  </div>
</transition>
</template>
