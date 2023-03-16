/// <reference types="cypress" />

describe('my first suit', () => {

    it('first test', () => {

        cy.visit('/')
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click()

        // by tag name
        cy.get('input')

        // by id
        cy.get('#inputEmail1')

        // by class name
        cy.get('.input-full-width')

        // by attribute name
        cy.get('[placeholder]')

        // by attribute name and value
        cy.get('[placeholder=Email]')

        // by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // the most remmended way by cypress
        cy.get('[data-cy="imputEmail1"]')
    })
    
   
})