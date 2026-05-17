# Uttero for Raycast

Control [Uttero](https://uttero.app) voice dictation directly from Raycast.

## Commands

| Command | Description |
|---|---|
| **Start Dictation** | Start voice dictation with the currently active style |
| **Select Style** | Browse and switch between your Uttero styles |
| **Insert Last Transcript** | Insert the most recent dictation at the cursor |
| **Open Uttero Settings** | Open the Uttero settings window |

## Requirements

- macOS 14+
- [Uttero](https://uttero.app) v1.4.9+ running in the background

## Development setup

```bash
cd uttero-raycast
npm ci
npm run dev
```

Raycast will detect the extension automatically and show it with a development indicator.

## How it works

The extension communicates with Uttero via a custom URL scheme (`uttero://`). Each command opens a URL that Uttero handles internally — no background processes, no polling.

## Distribution

When ready to publish to the Raycast Store, run `npm run publish` and follow the PR process at [raycast/extensions](https://github.com/raycast/extensions).
