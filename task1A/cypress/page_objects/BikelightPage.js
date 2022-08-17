class BikelightPage{

    get addToCart() {
        return cy.get('#add-to-cart-sauce-labs-bike-light')
    }

    get itemDesc() {
        return cy.get('.inventory_details_desc.large_size')
    }
}
export const bikelightPage = new BikelightPage();