import { chromium } from '@playwright/test'
const [out, tag] = process.argv.slice(2)
const b = await chromium.launch({ channel: 'chrome' })
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, colorScheme: 'light' })
await p.goto('http://localhost:5173/')
await p.waitForTimeout(500)
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)) } scrollTo(0, 0) })
await p.waitForTimeout(3200)
const h = await p.evaluate(() => document.body.scrollHeight)
console.log('altura', h)
for (let i = 0, y = 0; y < h; i++, y += 1400) {
  await p.screenshot({ path: `${out}/${tag}-${i}.png`, fullPage: true, clip: { x: 0, y, width: 1440, height: Math.min(1400, h - y) } })
}
await b.close()
