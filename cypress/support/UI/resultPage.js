var resultPageSelectors = {
    backLogo: () => cy.get('#logo'),
    resultText: () => cy.get('article > :nth-child(1)')
}

export default resultPageSelectors