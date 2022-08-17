import { checkoutPage } from "../page_objects/CheckoutPage"
import { loginPage } from "../page_objects/LoginPage"
import { productsPage } from "../page_objects/ProductsPage"
import { shoppingCartPage } from "../page_objects/ShoppingCartPage"
import { bikelightPage } from "../page_objects/BikelightPage"

describe('task1', () => {

    let firstname = "Grof"
    let lastname = "Kala"
    let postalcode = "21000"

    before('visit website and login', () => {
        cy.visit('/')
        loginPage.login(
            Cypress.env('VALID_USER_NAME'),
            Cypress.env('VALID_USER_PASSWORD')
        ) 
    })
    
    it('The whole flow', () => {    
        productsPage.shoppingCartBadge.should('not.exist') //making sure the badge on the cart does not exist.
        productsPage.addBackpack.click()
        productsPage.shoppingCartBadge.should('exist').and('contain.text', '1') //making sure badge does exist and shows 1 item in the cart
        productsPage.item.contains('Sauce Labs Bike Light').click()
        cy.url().should('contains', '/inventory-item.html?id=0') // making sure the user is redirected onto the right page
        bikelightPage.itemDesc.should('be.visible') //verifying the description is adequate
            .and('have.text',"A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.")
        bikelightPage.addToCart.click()
        productsPage.shoppingCart1.click()
        cy.url().should('contains', '/cart')

        shoppingCartPage.items.should('have.length', 2)
        shoppingCartPage.items.eq(0).should('contain.text','Sauce Labs Backpack')
        shoppingCartPage.items.eq(1).should('contain.text','Sauce Labs Bike Light')
        shoppingCartPage.removeBackpack.click()
        shoppingCartPage.items.should('have.length', 1)
        shoppingCartPage.items.eq(0).should('contain.text','Sauce Labs Bike Light')
        
        productsPage.shoppingCart1.click()
        shoppingCartPage.checkoutBtn.click()
        checkoutPage.fillInCheckoutForm(firstname, lastname, postalcode)
        checkoutPage.verificationHdng.should('exist')
            .and('have.text', 'THANK YOU FOR YOUR ORDER')
        checkoutPage.verificationMsg.should('be.visible')
            .and('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })      
})