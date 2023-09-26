/// <reference types="cypress" />

describe('citation maker form', () => {
  beforeEach(() => {
    cy.visit('https://citation-maker.netlify.app');
  });

  it('displays the header, form contents, and footer', () => {
    cy.get('.layout').should('have.length', 3);
  });
});
