describe('add a todo item', () => {
  it('display a todo item in list', () => {
    cy.visit('http://localhost:5173/')

    const newItem = 'new todo'
    cy.get("[data-cy='input']").type(newItem)
    cy.get("[data-cy='add']").click()
    cy.get("[data-cy='input']").should('have.value', '')
    cy.get('.todo-list').should('contain', newItem)
  })
})