/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays 163 items', () => {
    cy.get('ul li').should('have.length', 163);
  })

  it('all 163 items have the correct values', () => {
    cy.get('ul>li').each(($el, index, $list) => {
      cy.wrap($el).should('have.text', index);
    })
  })
})
