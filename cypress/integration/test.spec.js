/// <reference types="cypress"/>
const config = require('../fixtures/example.json');

describe('Test Login Functionality', () =>{

    beforeEach(()=>{
        cy.visit('/')
    
    })
      
    it.skip('should login to the website', () => {
    
        cy.fixture('example').then(function (data){
    
            this.data = data
    
            cy.login(this.data.username, this.data.password)
        
            cy.get('h1').contains('Dashboard')
        
            cy.contains('Invalid credentials').should('exist')
        
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
        
            
    
        })
        
    
    })
    
    it.skip('should not login to the website', () => {
    
        cy.login('admin', 'admin')
    
        cy.contains('Invalid credentials').should('exist')
    
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials')
    })
    
    afterEach(() => {
    
        cy.logout()
    })

    
})




