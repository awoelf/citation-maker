/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
export {};

declare global {
    namespace Cypress {
        interface Chainable {
            dataTest(dataTestSelector: string): Chainable<JQuery<HTMLElement>>;
            selectSource(type: string): void;
            addContributor(contributor: contributor): void;
            removeContributor(contributor: contributor): void;
            websiteCitation(submit?: boolean): void;
            miscCitation(submit?: boolean): void;
            checkCitations(exists?: boolean): void;
        }
    }
}

interface contributor {
    first: string;
    middle: string;
    last: string;
}

Cypress.Commands.add('dataTest', (dataTestSelector) => {
    return cy.get(`[data-test="${dataTestSelector}"]`);
});

Cypress.Commands.add('selectSource', (type) => {
    cy.dataTest('citation-source-dropdown').click();
    cy.dataTest('citation-source-dropdown-menu').within(() => {
        cy.contains(`${type}`).click();
    });
});

Cypress.Commands.add('websiteCitation', (submit: boolean = true) => {
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
    });
    if (submit) cy.dataTest('form-page-submit-button').click();
});

Cypress.Commands.add('miscCitation', (submit: boolean = true) => {
    cy.selectSource('Miscellaneous');
    cy.fixture('form-misc').then((form) => {
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
    });
    if (submit) cy.dataTest('form-page-submit-button').click();
});

Cypress.Commands.add('addContributor', (contributor: contributor) => {
    cy.dataTest('other-contributors-first').type(contributor.first);
    cy.dataTest('other-contributors-middle').type(contributor.middle);
    cy.dataTest('other-contributors-last').type(contributor.last);
    cy.dataTest('add-contributor-button').click();
    cy.contains(`${contributor.first} ${contributor.middle}. ${contributor.last}`).should('exist');
});

Cypress.Commands.add('removeContributor', (contributor: contributor) => {
    cy.dataTest(
        `remove-contributor-button-${contributor.first}-${contributor.middle}-${contributor.last}`
    ).click();
    cy.contains(`${contributor.first} ${contributor.middle}. ${contributor.last}`).should(
        'not.exist'
    );
});

Cypress.Commands.add('checkCitations', (exists: boolean = true) => {
    cy.fixture('citations-formatted').then((citations) => {
        if (exists) {
            cy.contains(citations.bartels).should('exist');
            cy.contains(citations.coleman).should('exist');
        } else {
            cy.contains(citations.bartels).should('not.exist');
            cy.contains(citations.coleman).should('not.exist');
        }
    });
});
