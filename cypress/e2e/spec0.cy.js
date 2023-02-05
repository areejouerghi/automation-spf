// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://google.com')
//     cy.get('.gLFyf').type('fsegt{enter}')
//     cy.wait(6000)

//     //cy.get('[href="https://fsegt.rnu.tn/"] > .LC20lb').click()
//     //add a timeout
//     //cy.wait(3000)
//     cy.contains('Images').click()
//   })
// })

//Login
 it('passes', () => { 
   cy.visit('http://167.99.253.22:3000/')
   cy.get(':nth-child(2) > .css-k16l37 > .MuiPaper-root > .MuiGrid-root > .MuiButtonBase-root').click()
   cy.wait(8000)
   cy.contains('Login').click()
   cy.wait(8000)
   cy.contains('#E-Mail*',{timeout:3000}).type('areejouerghi2+1@gmail.com')
   cy.wait(8000)
    cy.get('#Password\*').type('Spf@2023')
    cy.wait(8000)
    cy.contains('Einloggin').click()
  
})
