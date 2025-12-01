// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

require('../../support')({
  commandLog: 'all',
  elapsed: true,
})

describe('Every command timestamped', () => {
  it('stamps', function () {
    cy.wrap({ n: 42 })
      .wait(1000)
      .its('n')
      .wait(500)
      .then((n) => n * 2)
      .should('equal', 84)
  })
})
