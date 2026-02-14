/// <reference types="cypress" />

declare function registerCypressTimestamps(
  on: Cypress.PluginEvents,
  config?: Cypress.PluginConfigOptions
): void

export = registerCypressTimestamps
