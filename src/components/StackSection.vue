<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { layers, techs } from '@/data/portfolio'
import { icons } from '@/data/icons'
import { useI18n } from '@/composables/useI18n'
import { useUi } from '@/composables/useUi'

const { t, L } = useI18n()
const { open } = useUi()
const techsOf = (id: string) => techs.filter((x) => x.layer === id)

// A animação da trilha só começa quando a seção entra na tela.
const stackLive = ref(false)
const stackEl = ref<HTMLElement | null>(null)
let io: IntersectionObserver | null = null

onMounted(() => {
  io = new IntersectionObserver(
    (es) => es.forEach((e) => { if (e.isIntersecting) stackLive.value = true }),
    { threshold: 0.15 },
  )
  if (stackEl.value) io.observe(stackEl.value)
})
onBeforeUnmount(() => io?.disconnect())
</script>

<template>
<section id="stack" class="block">
  <h2>Stack</h2>
  <p class="sub">{{ t('Separei por camada, do front até a infra. Clica em uma tecnologia pra ver mais.', 'Split by layer, from front end to infra. Tap one to see more.') }}</p>
  <div class="legend">
    <span><i class="sw"></i>{{ t('Uso no dia a dia', 'Daily use') }}</span>
    <span><i class="sw dash"></i>{{ t('Estudando', 'Studying') }}</span>
  </div>
  <div class="stack" :class="{ live: stackLive }" ref="stackEl">
    <span class="pulse" aria-hidden="true"></span>
    <section class="layer" v-for="(layer, i) in layers" :key="layer.id">
      <span class="node" :style="{ '--d': (0.5 + i * 0.36) + 's' }" aria-hidden="true"></span>
      <div><h3>{{ L(layer.name) }}</h3><p>{{ L(layer.desc) }}</p></div>
      <div class="techs">
        <button v-for="tc in techsOf(layer.id)" :key="tc.id" class="tech" :class="{ deep: tc.deepening }" @click="open(tc)">
          <span class="tile"><img :src="icons[tc.id]" alt=""></span>
          <span>{{ tc.name }}<small v-if="tc.deepening">{{ t('Estudando', 'Studying') }}</small></span>
        </button>
      </div>
    </section>
  </div>
</section>
</template>
