import { ref } from 'vue'
import { sections } from '@/data/portfolio'

export const sectionIds = ['sobre', ...sections.map((s) => s.id), 'contato']

const active = ref('')

const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

// Mantém o history.state do vue-router ao trocar o hash.
const replaceUrl = (url: string) => {
  try {
    history.replaceState(history.state, '', url)
  } catch {
    /* ignora */
  }
}

const go = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' })
  replaceUrl('#' + id)
}

const toTop = () => {
  window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' })
  replaceUrl(location.pathname + location.search)
}

const spy = () => {
  const line = window.innerHeight * 0.45
  let cur = ''
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top < line) cur = id
  }
  active.value = cur
}

export function useNav() {
  return { active, go, toTop, spy }
}
