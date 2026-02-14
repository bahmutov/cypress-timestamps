declare namespace registerCypressTimestamps {
  interface Options {
    terminal?: boolean
    error?: boolean
    commandLog?: boolean | 'all'
    elapsed?: boolean
  }
}

declare function registerCypressTimestamps(
  options?: registerCypressTimestamps.Options
): void

export = registerCypressTimestamps
