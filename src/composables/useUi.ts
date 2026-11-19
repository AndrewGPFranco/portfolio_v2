import { ref, shallowRef } from 'vue'
import type { Project, Tech } from '@/data/portfolio'
import { contact } from '@/data/portfolio'
import { useI18n } from './useI18n'

/** Estado compartilhado: folha de detalhe da tecnologia, prévia de projeto e toast. */

const current = shallowRef<Tech | null>(null)
const preview = shallowRef<Project | null>(null)
const toast = ref('')

let opener: Element | null = null
let pvOpener: Element | null = null
let toastTimer: ReturnType<typeof setTimeout> | undefined

const refocus = (el: Element | null) => (el as HTMLElement | null)?.focus?.()

const open = (x: Tech) => {
  if (!current.value) opener = document.activeElement
  current.value = x
}
const close = () => {
  current.value = null
  refocus(opener)
}

const openPreview = (pj: Project) => {
  pvOpener = document.activeElement
  preview.value = pj
}
const closePreview = () => {
  preview.value = null
  refocus(pvOpener)
}

const showToast = (msg: string) => {
  toast.value = msg
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => (toast.value = ''), 2200)
}

const copyEmail = async () => {
  const { t } = useI18n()
  try {
    await navigator.clipboard.writeText(contact.email)
    showToast(t('E-mail copiado', 'Email copied'))
  } catch {
    showToast(contact.email)
  }
}

export function useUi() {
  return { current, open, close, preview, openPreview, closePreview, toast, copyEmail }
}
