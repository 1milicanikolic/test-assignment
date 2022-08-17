import { productsPage } from "../page_objects/ProductsPage"
import { loginPage } from "../page_objects/LoginPage"

Cypress.Commands.add('buildForSecondTest', () => { 
    //cy.visit('/')
    loginPage.login(
        Cypress.env('VALID_USER_NAME'),
        Cypress.env('VALID_USER_PASSWORD')
    ) 
    productsPage.addBackpack.click()
    productsPage.addBikeLight.click()
})


