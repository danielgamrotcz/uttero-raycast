# Uttero Raycast Extension

Raycast extension pro ovládání Uttero hlasové diktace. Umožňuje spustit diktaci, přepínat styly, procházet historii přepisů a sledovat denní statistiky v menu baru.

## Tech Stack

- TypeScript, Raycast API (`@raycast/api`)
- Node.js
- Komunikace s Uttero přes URL scheme (`uttero://`) a distributed notifications

## Commands

- Build: `npm run build`
- Dev: `npm run dev`
- Lint: `npm run lint`

## Key Files

- `src/start-dictation.ts` — spustí diktaci (URL scheme `uttero://dictate`)
- `src/dictate-with-mode.tsx` — výběr stylu + spuštění
- `src/transcript-history.tsx` — posledních 20 přepisů z `history-snapshot.json`
- `src/menu-bar-status.tsx` — denní word count v menu baru
- `src/select-style.tsx` — přepínání stylů
- `src/toggle-offline.ts` — přepínání cloud/offline režimu

## Architecture

Extension komunikuje s Uttero výhradně přes:
1. URL scheme (`uttero://dictate`, `uttero://settings`)
2. Distributed notifications pro Raycast-started dictation
3. Čtení `history-snapshot.json` pro historii přepisů

Žádné přímé volání API — vše jde přes Uttero jako prostředníka.

## Napojení na webinář

Uttero extension je živý příklad vlastní Raycast extension (Blok 7 webináře). Ukazuje "kam to celé může zajít".

## Rules

- Testovat změny v Raycastu (`npm run dev` a importovat extension)
- URL scheme musí odpovídat tomu, co Uttero skutečně zpracovává
