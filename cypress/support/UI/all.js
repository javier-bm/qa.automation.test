import mainPage from './mainPage'
import resultPage from './resultPage'

var selectors = {}

Cypress._.merge(selectors, mainPage)
Cypress._.merge(selectors, resultPage)

export default selectors