// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('Timestamps', () => {
  beforeEach(() => {
    cy.wait(5000)
  })

  it('finishes the test', function () {
    cy.wait(1000)
    cy.wait(1000)
  })
})
