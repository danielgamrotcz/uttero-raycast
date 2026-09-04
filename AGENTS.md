# Uttero pro Raycast

## Účel a orientace

- Raycast extension ovládá a čte lokální Uttero bez převzetí vlastnictví nad
  macOS aplikací.
- `src/` obsahuje příkazy rozšíření, `assets/` distribuované assety a
  `package.json` ověřené skripty Raycastu.
- Produktový a IPC kontrakt vlastní hlavní repozitář `../uttero`.

## Příkazy a hranice

```bash
npm ci
npm run build
```

- Pro vývoj lze použít `npm run dev`; `npm run publish` je externí publikace a
  bez samostatného výslovného pokynu se nespouští.
- Změna notifikací, cest nebo formátu snapshotu musí být ověřena proti aktuální
  implementaci Uttero, ne jen proti historickému `CLAUDE.md`.
- Operativní práci řídí `TASKS.md`; WIP limit je jeden.
- Bez pokynu necommituj, nepushuj ani nepublikuj do Raycast Store.

## Hotovo znamená

Build prošel po poslední změně a relevantní příkaz byl ověřen proti běžící
lokální aplikaci nebo je tato integrační kontrola výslovně označena jako
neprovedená.
