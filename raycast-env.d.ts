/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `start-dictation` command */
  export type StartDictation = ExtensionPreferences & {}
  /** Preferences accessible in the `select-style` command */
  export type SelectStyle = ExtensionPreferences & {}
  /** Preferences accessible in the `insert-last-transcript` command */
  export type InsertLastTranscript = ExtensionPreferences & {}
  /** Preferences accessible in the `open-settings` command */
  export type OpenSettings = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `start-dictation` command */
  export type StartDictation = {}
  /** Arguments passed to the `select-style` command */
  export type SelectStyle = {}
  /** Arguments passed to the `insert-last-transcript` command */
  export type InsertLastTranscript = {}
  /** Arguments passed to the `open-settings` command */
  export type OpenSettings = {}
}

