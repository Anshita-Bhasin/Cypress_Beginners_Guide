describe('Open cart Login Test', () => {
    before(() => {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    })
    it('Login using username and password', () => {
        cy.get('#input-email').type('test.qa@dispostable.com')
        cy.get('#input-password').type('Cypress123!!')
        cy.get('input.btn.btn-primary').click()
    })
})