// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

require('../../support')({
  terminal: true,
  error: true,
  commandLog: true,
})

it('handles cy.then', () => {
  cy.wrap(null)
    // should not add timestamps for cy.then
    .then(console.log)
})
