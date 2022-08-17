class LoginPage{
    get usernameInput() {
        return cy.get('#user-name')
    }

    get passwordInput() {
        return cy.get('#password')
    }

    get loginBtn() {
        return cy.get('#login-button')
    }

    login(username, password) {
            this.usernameInput.type(username)
            this.passwordInput.type(password)
            this.loginBtn.click()
    }
}
export const loginPage = new LoginPage();