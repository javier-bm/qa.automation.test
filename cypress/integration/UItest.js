import selectors from '../support/UI/all'

describe('Test suite of qa automation test', () => {

    let testText = "texto de prueba"
    let case4 = "This is a **Test** Case"

    it('case 1', () => {
        cy.visit('')
        selectors.publish().click()
        cy.contains('There was nothing to post. Go back!').should('be.visible')    
    })

    
    it('case 2', () => {
        cy.visit('')
        selectors.textbox().type(testText)
        selectors.publish().click() 
        cy.contains(testText).should('be.visible')    
    })

    
    it('case 3', () => {
        selectors.backLogo().click()
        selectors.publish().should('be.visible')
    })

    it('case 3', () => {
        selectors.textbox().type(case4)
        selectors.publish().click() 
        selectors.resultText().should('exist')
        selectors.resultText().should('have.css', 'font-weight', '400')
        selectors.resultText().find('strong').should('have.css', 'font-weight', '700')
    })
})