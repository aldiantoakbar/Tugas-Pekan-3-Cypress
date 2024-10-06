describe('Login to SauceDemo', () => {
    it('Should login with valid credentials', () => {
        cy.visit('https://www.saucedemo.com')  // Kunjungi situs web
        cy.get('#user-name').type('standard_user')  // Masukkan username
        cy.get('#password').type('secret_sauce')  // Masukkan password
        cy.get('#login-button').click()  // Klik tombol login
        cy.url().should('include', '/inventory.html')  // Pastikan user masuk ke halaman inventaris
    })
})

describe('Login to SauceDemo', () => {
    it('Should fail login with invalid credentials', () => {
        cy.visit('https://www.saucedemo.com')  // Kunjungi situs web
        cy.get('#user-name').type('invalid_user')  // Masukkan username salah
        cy.get('#password').type('wrong_password')  // Masukkan password salah
        cy.get('#login-button').click()  // Klik tombol login
        cy.get('.error-message-container').should('contain', 'Epic sadface')  // Pastikan pesan error muncul
    })
})
