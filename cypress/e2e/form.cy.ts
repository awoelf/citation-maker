import * as dayjs from 'dayjs';
describe('form', () => {
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
    it('should visit citation page when the button is clicked', () => {
        cy.dataTest('citations-button').should('exist').click();
        cy.location('pathname').should('equal', '/citations');
        cy.dataTest('home-button').should('exist').click();
        cy.location('pathname').should('equal', '/');
    });
    it('should have dropdowns that open and close when clicked', () => {
        cy.dataTest('citation-style-dropdown')
            .should('have.attr', 'aria-expanded')
            .should('equal', 'false');
        cy.dataTest('citation-style-dropdown').click();
        cy.dataTest('citation-style-dropdown')
            .should('have.attr', 'aria-expanded')
            .should('equal', 'true');
        cy.dataTest('citation-style-dropdown').click();
        cy.dataTest('citation-style-dropdown')
            .should('have.attr', 'aria-expanded')
            .should('equal', 'false');

        cy.dataTest('citation-source-dropdown')
            .should('have.attr', 'aria-expanded')
            .should('equal', 'false');
        cy.dataTest('citation-source-dropdown').click();
        cy.dataTest('citation-source-dropdown')
            .should('have.attr', 'aria-expanded')
            .should('equal', 'true');
        cy.dataTest('citation-source-dropdown').click();
        cy.dataTest('citation-source-dropdown')
            .should('have.attr', 'aria-expanded')
            .should('equal', 'false');
    });
    it('should show different inputs when the source changes', () => {
        cy.selectSource('Website');
        cy.dataTest('form-page-website').should('exist');
        cy.selectSource('Book');
        cy.dataTest('form-page-book').should('exist');
        cy.selectSource('Journal');
        cy.dataTest('form-page-journal').should('exist');
        cy.selectSource('Miscellaneous');
        cy.dataTest('form-page-misc').should('exist');
    });
    it('should create a citation when data is input into the form', () => {
        cy.selectSource('Website');
        cy.fixture('form-website').then((form) => {
            cy.dataTest('input-title').type(form.articleTitle);
            cy.dataTest('input-url').type(form.url);
            cy.dataTest('input-source').type(form.websiteName);
            cy.dataTest('input-first').type(form.first);
            cy.dataTest('input-last').type(form.last);
            cy.dataTest('input-publisher').type(form.publisher);
            cy.dataTest('input-day-published').type(form.dayPublished);
            cy.dataTest('input-month-published').click();
            cy.dataTest('input-month-published-menu').within(() => {
                cy.contains(`${form.monthPublished} - `).click();
            });
            cy.dataTest('input-year-published').type(form.yearPublished);
            cy.dataTest('input-day-accessed').type(form.dayAccessed);
            cy.dataTest('input-month-accessed').click();
            cy.dataTest('input-month-accessed-menu').within(() => {
                cy.contains(`${form.monthAccessed} - `).click();
            });
            cy.dataTest('input-year-accessed').type(form.yearAccessed);
            cy.dataTest('form-page-submit-button').click();
            cy.contains(form.citation).should('exist');
        });
    });
    it('should clear form contents when the clear form button is clicked', () => {
        // Input data for a misc citation, but do not automatically submit it
        const submitData = false;
        cy.miscCitation(submitData);
        cy.dataTest('input-title').should('not.have.value', '');
        cy.dataTest('input-url').should('not.have.value', '');
        cy.dataTest('input-source').should('not.have.value', '');
        cy.dataTest('input-first').should('not.have.value', '');
        cy.dataTest('input-last').should('not.have.value', '');
        cy.dataTest('input-publisher').should('not.have.value', '');
        cy.dataTest('input-day-published').should('not.have.value', '');
        cy.dataTest('input-month-published').should('not.have.value', '');
        cy.dataTest('input-year-published').should('not.have.value', '');
        cy.dataTest('input-day-accessed').should('not.have.value', '');
        cy.dataTest('input-month-accessed').should('not.have.value', '');
        cy.dataTest('input-year-accessed').should('not.have.value', '');

        cy.dataTest('clear-form-button').click();
        cy.dataTest('input-title').should('have.value', '');
        cy.dataTest('input-url').should('have.value', '');
        cy.dataTest('input-source').should('have.value', '');
        cy.dataTest('input-first').should('have.value', '');
        cy.dataTest('input-last').should('have.value', '');
        cy.dataTest('input-publisher').should('have.value', '');
        cy.dataTest('input-day-published').should('have.value', '');
        cy.dataTest('input-month-published').should('have.value', '');
        cy.dataTest('input-year-published').should('have.value', '');
        cy.dataTest('input-day-accessed').should('have.value', '');
        cy.dataTest('input-month-accessed').should('have.value', '');
        cy.dataTest('input-year-accessed').should('have.value', '');
    });
    it("should input today's date when the date button is clicked", () => {
        cy.dataTest('today-date-button').click();
        cy.dataTest('input-day-accessed').should('have.value', dayjs().date());
        cy.dataTest('input-month-accessed').should('have.value', dayjs().month() + 1);
        cy.dataTest('input-year-accessed').should('have.value', dayjs().year());
    });
    it('should display tooltips when the ? icon is hovered', () => {
        cy.selectSource('Miscellaneous');
        cy.fixture('form-tooltips').then((tooltip) => {
            cy.dataTest('source-tooltip').click();
            cy.contains(tooltip.source).should('exist');
            cy.dataTest('suffix-tooltip').click();
            cy.contains(tooltip.suffix).should('exist');
        });
    });
    it.only('should input contributors to the list and remove them', () => {
        const submitData = false;
        cy.miscCitation(submitData);
        cy.fixture('form-contributors').then((data) => {
            cy.dataTest('other-contributors-dropdown').click();
            cy.addContributor(data.contributors[0]);
            cy.addContributor(data.contributors[1]);
            cy.addContributor(data.contributors[2]);

            cy.removeContributor(data.contributors[0]);

            cy.dataTest('form-page-submit-button').click();
            cy.contains(data.citation).should('exist');
        })
    });
});
