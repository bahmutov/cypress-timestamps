// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

require('../../support')({
  terminal: true,
  error: true,
  commandLog: true,
})

describe('Timestamps', () => {
  beforeEach(() => {
    cy.wait(5000)
  })

  it('finishes the test', function () {
    cy.wait(1000)
    cy.wait(1000)

    cy.log('**next wait should not have a timestamp**')
    cy.wait(1000, { log: false })
  })
})
