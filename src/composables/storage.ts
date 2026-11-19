/** localStorage tolerante a falhas (modo privado, bloqueio de cookies etc.). */
export const store = {
  get(k: string): string | null {
    try {
      return localStorage.getItem(k)
    } catch {
      return null
    }
  },
  set(k: string, v: string) {
    try {
      localStorage.setItem(k, v)
    } catch {
      /* ignora */
    }
  },
}
