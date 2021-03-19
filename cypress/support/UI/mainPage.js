var mainPageSelectors = {
    publish: () => cy.get('.submit'),
    textbox: () => cy.get('[placeholder=Write]')
}

export default mainPageSelectors