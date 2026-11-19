import { ref, watch } from 'vue'
import type { Lang, Localized } from '@/data/portfolio'
import { store } from './storage'

const saved = store.get('lang')
const lang = ref<Lang>(
  saved === 'pt' || saved === 'en'
    ? saved
    : (navigator.language || 'pt').toLowerCase().startsWith('pt')
      ? 'pt'
      : 'en',
)

const t = (pt: string, en: string) => (lang.value === 'pt' ? pt : en)
const L = (v: Localized | string) => (v && typeof v === 'object' ? v[lang.value] : v)

const applyLang = () => {
  document.documentElement.lang = lang.value === 'pt' ? 'pt-BR' : 'en'
  document.title = t('Andrew | Desenvolvedor full-stack', 'Andrew | Full-stack developer')
}
watch(lang, applyLang)
applyLang()

const toggleLang = () => {
  lang.value = lang.value === 'pt' ? 'en' : 'pt'
  store.set('lang', lang.value)
}

export function useI18n() {
  return { lang, t, L, toggleLang }
}
