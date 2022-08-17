import { productsPage } from "../page_objects/ProductsPage"
import { loginPage } from "../page_objects/LoginPage"

Cypress.Commands.add('buildForSecondTest', () => { 
    productsPage.addBackpack.click()
    productsPage.addBikeLight.click()
})


