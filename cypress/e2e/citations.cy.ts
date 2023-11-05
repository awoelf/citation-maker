describe('citations', () => {
    beforeEach(() => {
        cy.restoreLocalStorage('citations-snapshot');
        cy.visit('/citations');
    });
    // Run this once after starting cypress session
    it.skip('should create citations and save into local storage so that it can be used for testing', () => {
        cy.removeLocalStorage('citations');
        cy.fixture('citations-formatted').then((citations) => {
            cy.visit('/');
            cy.websiteCitation();
            cy.contains(citations.coleman).should('exist');
            cy.visit('/');
            cy.miscCitation();
            cy.contains(citations.bartels).should('exist');
        });

        cy.saveLocalStorage('citations-snapshot');
    });
    it('should not have any citations in local storage if snapshot is removed', () => {
        // Check that the citations do not exist in the dom
        const doesNotExist = false;

        cy.removeLocalStorage('citations');
        cy.wait(2000);
        cy.checkCitations(doesNotExist);
    });
    it('should display all citations from the local storage when opening /citations', () => {
        cy.checkCitations();
    });
    it('should remove all citations when the delete all button is clicked', () => {
        const doesNotExist = false;

        cy.dataTest('delete-all-button').click();
        cy.dataTest('confirm-delete-button').click();
        cy.checkCitations(doesNotExist);
    });
    it('should remove citations when the citation delete button is clicked', () => {
        const doesNotExist = false;
        cy.checkCitations();
        cy.fixture('citations-storage').then((citations) => {
            cy.dataTest(`delete-citation-button-${citations.bartels.id}`).click();
            cy.dataTest(`delete-citation-button-${citations.coleman.id}`).click();
        });
        cy.checkCitations(doesNotExist);
    });
    it('should copy the formatted citation to the clipboard', () => {
        cy.fixture('citations-storage').then((citations) => {
            cy.dataTest(`copy-citation-button-${citations.bartels.id}`).click();
        });
        cy.fixture('citations-formatted').then((citations) => {
            cy.window()
                .its('navigator.clipboard')
                .then((clip) => clip.readText())
                .should('equal', citations.bartels);
        });

        cy.fixture('citations-storage').then((citations) => {
            cy.dataTest(`copy-citation-button-${citations.coleman.id}`).click();
        });
        cy.fixture('citations-formatted').then((citations) => {
            cy.window()
                .its('navigator.clipboard')
                .then((clip) => clip.readText())
                .should('equal', citations.coleman);
        });
    });
    it('should have a light and dark theme', () => {
        cy.get('.header').should('exist');
        cy.get('html').should('have.class', 'light-theme');
        cy.dataTest('theme-button-sun').click();
        cy.get('html').should('have.class', 'dark-theme');
        cy.dataTest('theme-button-moon').click();
        cy.get('html').should('have.class', 'light-theme');
    });
    it('should visit form page when the button is clicked', () => {
        cy.dataTest('home-button').should('exist').click();
        cy.location('pathname').should('equal', '/');
        cy.dataTest('citations-button').should('exist').click();
        cy.location('pathname').should('equal', '/citations');
        cy.dataTest('header-text-link').should('exist').click();
        cy.location('pathname').should('equal', '/');
    });
    it('should display the number of citations on the citation button', () => {
        cy.visit('/');
        cy.dataTest('citations-badge').should('contain', '2');
    });
    it.only('should fill the form with current values when the edit button is clicked', () => {
        cy.fixture('citations-storage').then((citations) => {
            cy.dataTest(`edit-citation-button-${citations.coleman.id}`).click();
            cy.dataTest('input-title').should('have.value', citations.coleman.title);
            cy.dataTest('input-url').should('have.value', citations.coleman.url);
            cy.dataTest('input-source').should('have.value', citations.coleman.source);
            cy.dataTest('input-first').should('have.value', citations.coleman.first);
            cy.dataTest('input-last').should('have.value', citations.coleman.last);
            cy.dataTest('input-publisher').should('have.value', citations.coleman.publisher);
            cy.dataTest('input-day-published').should('have.value', citations.coleman.dayPublished);
            cy.dataTest('input-month-published').should(
                'have.value',
                citations.coleman.monthPublished
            );
            cy.dataTest('input-year-published').should(
                'have.value',
                citations.coleman.yearPublished
            );
            cy.dataTest('input-day-accessed').should('have.value', citations.coleman.dayAccessed);
            cy.dataTest('input-month-accessed').should(
                'have.value',
                citations.coleman.monthAccessed
            );
            cy.dataTest('input-year-accessed').should('have.value', citations.coleman.yearAccessed);
        });

        cy.fixture('citations-edited').then((form) => {
            cy.dataTest('input-title').clear().type(form.articleTitle);
            cy.dataTest('input-url').clear().type(form.url);
            cy.dataTest('input-source').clear().type(form.websiteName);
            cy.dataTest('input-first').clear().type(form.authorFirst);
            cy.dataTest('input-last').clear().type(form.authorLast);
            cy.dataTest('input-publisher').clear().type(form.publisher);
            cy.dataTest('input-day-published').clear().type(form.dayPublished);
            cy.dataTest('input-month-published').click();
            cy.dataTest('input-month-published-menu').within(() => {
                cy.contains(`${form.monthPublished} - `).click();
            });
            cy.dataTest('input-year-published').clear().type(form.yearPublished);
            cy.dataTest('input-day-accessed').clear().type(form.dayAccessed);
            cy.dataTest('input-month-accessed').click();
            cy.dataTest('input-month-accessed-menu').within(() => {
                cy.contains(`${form.monthAccessed} - `).click();
            });
            cy.dataTest('input-year-accessed').clear().type(form.yearAccessed);
            cy.dataTest('form-page-submit-button').click();
            cy.contains(form.citation).should('exist');
        });

        cy.fixture('form-website').then((form) => {
            cy.contains(form.citation).should('not.exist');
        })
    });
});
