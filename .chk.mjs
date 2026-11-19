import { chromium } from '@playwright/test'
const out = process.argv[2]
const b = await chromium.launch({ channel: 'chrome' })
const shots = [['hero-light', 1440, 820, 'light', 0], ['hero-dark', 1440, 820, 'dark', 0], ['stack-dark', 1440, 900, 'dark', '#stack'], ['mob', 390, 1800, 'dark', 0]]
for (const [n, w, h, scheme, target] of shots) {
  const p = await b.newPage({ viewport: { width: w, height: h }, colorScheme: scheme })
  await p.goto('http://localhost:5173/')
  await p.waitForTimeout(400)
  if (target) { await p.evaluate(t => document.querySelector(t).scrollIntoView(), target); await p.waitForTimeout(3300) }
  await p.screenshot({ path: `${out}/${n}.png` })
}
await b.close()
