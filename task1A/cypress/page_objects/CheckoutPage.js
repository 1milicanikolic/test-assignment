class CheckoutPage {

    fillInCheckoutForm(firstname, lastname, postalcode) {
        this.firstnameInput.type(firstname)
        this.lastnameInput.type(lastname)
        this.postalCodeInput.type(postalcode)
        this.continueBtn.click()
        this.finishBtn.click()
    }

    get firstnameInput() {
        return cy.get('#first-name')
    }

    get lastnameInput() {
        return cy.get('#last-name')
    }

    get postalCodeInput() {
        return cy.get('#postal-code')
    }

    get continueBtn() {
        return cy.get('#continue')
    }

    get finishBtn() {
        return cy.get('#finish')
    }

    get verificationHdng() {
        return cy.get('h2')
    }

    get verificationMsg() {
        return cy.get('.complete-text')
    }
}
export const checkoutPage = new CheckoutPage();