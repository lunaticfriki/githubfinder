describe('Search user', () => {
  it('should show the user info', () => {
    const user = 'getify'
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="input"]').type(user)
    cy.get('[data-testid="submit"]').click()
    cy.get('[data-testid="card-component"]').should('be.visible')
    cy.get('[data-testid="username"]').should('be.visible')
  })

  it('should go to repo page', () => {
    const user = 'getify'
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="input"]').type(user)
    cy.get('[data-testid="submit"]').click()
    cy.get('[data-testid="repo-url"]')
      .eq(0)
      .invoke('removeAttr', 'target')
      .click()
    cy.url().should('include', 'github')
  })
})
