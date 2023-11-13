describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://xochicalli-production.up.railway.app/')

    // Esperar a que la URL cambie, lo que indica que la navegación ha terminado
    cy.url().should('include', 'xochicalli-production.up.railway.app')

    // Log del título actual antes de la aserción
    cy.title().then((title) => {
      cy.log('Título actual:', title);
    });

    // Verificar el título de la página
    cy.title().should('include', 'Xochicalli Commerce')
  })
})
