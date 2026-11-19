<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import { rolesAsc, rolesDesc, monthsOf, totalMonths, useFormat } from '@/composables/useCareer'

const { t, L } = useI18n()
const { fmt, label } = useFormat()
</script>

<template>
<section id="trajetoria" class="block">
  <h2>{{ t('Trajetória', 'Career') }}</h2>
  <p class="sub">{{ t('Comecei como estagiário e hoje sou analista. São ' + fmt(totalMonths) + ' na mesma empresa.', 'Started as an intern, now I’m an analyst. That’s ' + fmt(totalMonths) + ' at the same company.') }}</p>
  <div class="stairs" role="img" :aria-label="rolesAsc.map(r => L(r.title)).join(', ')">
    <div v-for="(r, i) in rolesAsc" :key="i" class="step" :class="{ now: !r.end }" :style="{ flex: monthsOf(r) }">
      <div class="bar" :style="{ height: (38 + i * 31) + '%' }"><b>{{ L(r.short) }}</b><span>{{ fmt(monthsOf(r)) }}</span></div>
    </div>
  </div>
  <div class="axis"><span>{{ label(rolesAsc[0]!.start) }}</span><span>{{ t('Hoje', 'Today') }}</span></div>

  <div class="company">
    <div class="logo" aria-hidden="true">ÉD</div>
    <div><h3>Élin Duxus Consultoria</h3><p>São Paulo, {{ fmt(totalMonths) }}</p></div>
  </div>
  <ol class="roles">
    <li v-for="(r, i) in rolesDesc" :key="i" class="role" :class="{ now: !r.end }">
      <span class="dot" aria-hidden="true"></span>
      <h4>{{ L(r.title) }}<span v-if="!r.end" class="pill-now">{{ t('Atual', 'Current') }}</span></h4>
      <p class="when">{{ label(r.start) }} {{ t('a', 'to') }} {{ r.end ? label(r.end) : t('hoje', 'present') }}, {{ fmt(monthsOf(r)) }}, {{ L(r.mode) }}</p>
    </li>
  </ol>
  <div class="edu">
    <h3>{{ t('Formação', 'Education') }}</h3>
    <div class="course">
      <b>{{ t('Análise e Desenvolvimento de Sistemas', 'Systems Analysis and Development') }}</b>
      <p class="place">{{ t('Tecnólogo, Centro Universitário FAM, 2023 a 2025', 'Associate degree, Centro Universitário FAM, 2023 to 2025') }}</p>
      <p class="note">{{ t('Antes disso, fiz um ano de Matemática na USJT.', 'Before that, I did a year of Mathematics at USJT.') }}</p>
    </div>
  </div>
</section>
</template>
