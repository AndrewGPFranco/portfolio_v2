import { extraNames, roles, techs, type Role, type YearMonth } from '@/data/portfolio'
import { useI18n } from './useI18n'

const PT_MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
const EN_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const today = new Date()
const nowYM: YearMonth = [today.getFullYear(), today.getMonth() + 1]
const diff = (a: YearMonth, b: YearMonth) => (b[0] - a[0]) * 12 + (b[1] - a[1]) + 1

export const year = today.getFullYear()
export const rolesAsc = roles
export const rolesDesc = [...roles].reverse()
export const monthsOf = (r: Role) => diff(r.start, r.end || nowYM)
export const totalMonths = diff(roles[0]!.start, nowYM)
export const nameOf = (id: string) => techs.find((x) => x.id === id)?.name ?? extraNames[id] ?? id

export function useFormat() {
  const { lang, t } = useI18n()
  const fmt = (m: number) => {
    const y = Math.floor(m / 12),
      mo = m % 12
    const ys = y ? y + t(y > 1 ? ' anos' : ' ano', y > 1 ? ' years' : ' year') : ''
    const ms = mo ? mo + t(mo > 1 ? ' meses' : ' mês', mo > 1 ? ' months' : ' month') : ''
    return [ys, ms].filter(Boolean).join(t(' e ', ' and '))
  }
  const label = (ym: YearMonth) =>
    lang.value === 'pt'
      ? PT_MONTHS[ym[1] - 1] + ' de ' + ym[0]
      : EN_MONTHS[ym[1] - 1] + ' ' + ym[0]
  return { fmt, label }
}
