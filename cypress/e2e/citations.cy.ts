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
            cy.contains(citations.data[0]).should('exist');
            cy.visit('/');
            cy.miscCitation();
            cy.contains(citations.data[1]).should('exist');
        })
        
        cy.saveLocalStorage('citations-snapshot');
    });
    it('should not have any citations in local storage if snapshot is removed', () => {
        // Check that the citations do not exist in the dom
        const doesNotExist = false;

        cy.removeLocalStorage('citations');
        cy.wait(2000)
        cy.checkCitations(doesNotExist);
    })
    it('should display all citations from the local storage when opening /citations', () => {
        cy.checkCitations();
    });
    it('should remove all citations when the delete all button is clicked', () => {
        const doesNotExist = false;
        
        cy.dataTest('delete-all-button').click();
        cy.dataTest('confirm-delete-button').click();
        cy.checkCitations(doesNotExist);
    })
    it('should remove citations when the citation delete button is clicked', () => {
        const doesNotExist = false;
        cy.checkCitations();
        cy.fixture('citations-storage').then((citations) => {
            cy.dataTest(`delete-citation-button-${citations.data[0].id}`).click();
            cy.dataTest(`delete-citation-button-${citations.data[1].id}`).click();
        })
        cy.checkCitations(doesNotExist);
    });
    it.only('should copy the formatted citation to the clipboard')
});
