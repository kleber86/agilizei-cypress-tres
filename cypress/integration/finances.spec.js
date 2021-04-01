/// <reference types="cypress" />

context('Suite de Testes', ()=> {


    it('Cadastrar entradas', ()=>{
        cy.visit('https://devfinance-agilizei.netlify.app')
        cy.get('#data-table tbody tr').should('have.length', 0)
        cy.get('#transaction .new').click()
        cy.get('#description').type('Mesada')
        cy.get('[name=amount]').type(12)
        cy.get('[type=date]').type('2021-03-21')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 1)
    })
 
    it('Cadastrar saidas', ()=> {
        cy.visit('https://devfinance-agilizei.netlify.app')
        cy.get('#data-table tbody tr').should('have.length', 0)
        cy.get('#transaction .new').click()
        cy.get('#description').type('Luz')
        cy.get('#amount').type(-100)
        cy.get('#date').type('2021-04-01')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 1)
    }) 
})
