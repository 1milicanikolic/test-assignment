import { productsPage } from "../page_objects/ProductsPage"

Cypress.Commands.add('buildForSecondTest', () => { 
    productsPage.addBackpack.click()
    productsPage.addBikeLight.click()
})


