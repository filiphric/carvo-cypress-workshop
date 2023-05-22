it('creates a new list with a card in it', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="add-list-input"]')
    .type('new list{enter}')

  cy.contains('Add another card')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('new card{enter}')

});

it('bookmarks a board', () => {

  cy.visit('/')

  cy.get('.star')
    .first()
    .click({force: true})

})

it('cards are visible (assertions)', () => {

  cy.visit('/board/2')

  cy.get('[data-cy="card"]')
    .should('be.visible')

  // create another card
  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('bread{enter}')

  cy.get('[data-cy="card"]')
    .should('have.length', 2)

})

