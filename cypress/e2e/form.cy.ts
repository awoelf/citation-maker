describe('template spec', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should have a light and dark theme', () => {
        cy.get('.header').should('exist');
        cy.get('html').should('have.class', 'light-theme');
        cy.dataTest('theme-button-sun').click();
        cy.get('html').should('have.class', 'dark-theme');
        cy.dataTest('theme-button-moon').click();
        cy.get('html').should('have.class', 'light-theme');
    });
    it('should visit citation page when button is clicked', () => {
        cy.dataTest('citations-button').should('exist').click();
        cy.location('pathname').should('equal', '/citations');
        cy.dataTest('home-button').should('exist').click();
        cy.location('pathname').should('equal', '/');
    });
    it('should have dropdowns that open and close when clicked', () => {
        cy.dataTest('citation-style-dropdown').should('have.attr', 'aria-expanded').should('equal', 'false');
        cy.dataTest('citation-style-dropdown').click();
        cy.dataTest('citation-style-dropdown').should('have.attr', 'aria-expanded').should('equal', 'true');
        cy.dataTest('citation-style-dropdown').click();
        cy.dataTest('citation-style-dropdown').should('have.attr', 'aria-expanded').should('equal', 'false');

        cy.dataTest('citation-source-dropdown').should('have.attr', 'aria-expanded').should('equal', 'false');
        cy.dataTest('citation-source-dropdown').click();
        cy.dataTest('citation-source-dropdown').should('have.attr', 'aria-expanded').should('equal', 'true');
        cy.dataTest('citation-source-dropdown').click();
        cy.dataTest('citation-source-dropdown').should('have.attr', 'aria-expanded').should('equal', 'false');
    });
    it.only('should show different inputs when the source changes', () => {
        cy.selectSource('Website');
        cy.dataTest('form-page-website').should('exist');
        cy.selectSource('Book');
        cy.dataTest('form-page-book').should('exist');
        cy.selectSource('Journal');
        cy.dataTest('form-page-journal').should('exist');
        cy.selectSource('Miscellaneous');
        cy.dataTest('form-page-misc').should('exist');
    })
});
