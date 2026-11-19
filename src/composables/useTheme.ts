import { ref } from 'vue'
import { store } from './storage'

// O tema inicial é aplicado no index.html antes da pintura.
const theme = ref(document.documentElement.getAttribute('data-theme') || 'light')

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  store.set('theme', theme.value)
}

export function useTheme() {
  return { theme, toggleTheme }
}
