class ShoppingCartPage{

    get items() { 
        return cy.get('.inventory_item_name') 
    }

    open() { 
        return cy.get('.shopping_cart_badge').click() 
    }

    get removeBackpack() {
        return cy.get('#remove-sauce-labs-backpack')
    }

    get checkoutBtn() {
        return cy.get('#checkout')
    }

}
export const shoppingCartPage = new ShoppingCartPage();