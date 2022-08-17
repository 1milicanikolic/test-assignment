class ProductsPage{
    get addBackpack() {
        return cy.get('#add-to-cart-sauce-labs-backpack')
    }

    get addBikeLight() {
        return cy.get('#add-to-cart-sauce-labs-bike-light')
    }

    get shoppingCart() {
        return cy.get('#shopping_cart_container')
    }

    get shoppingCart1() {
        return cy.get('.shopping_cart_link')
    }

    get shoppingCartBadge() {
        return cy.get('.shopping_cart_badge')
    }

    get item() {
        return cy.get('.inventory_item_name')
    }

}
export const productsPage = new ProductsPage();