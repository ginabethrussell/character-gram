describe('Charactergram Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays the home page', () => {
    cy.get('h1')
      .should('be.visible')
      .should('contain', 'Charactergram')
  })

  it('autocompletes the search by typing and pressing ENTER', () => {
    cy.get(`[data-testid=ArrowDropDownIcon]`).click()
      .type('Luke Sk{enter}')
    cy.get('#character-select').should('have.value', 'Luke Skywalker')
  })

  it('navigates to a profile page by typing in the search box and clicking the view button', () => {
    cy.get(`[data-testid=ArrowDropDownIcon]`).click()
      .type('R2-D2{enter}')
    cy.get('#view-btn').click()
    cy.url().should('include', '/star-wars/people')
  })

  it('navigates to the correct profile page by clicking a link', () => {
    cy.contains(`C-3PO`).click()
    cy.get('#character-name').contains('C-3PO')
  })
})

describe('Charactergram Profile Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/star-wars/people/1')
  })

  it('displays the profile page', () => {
    cy.get('#character-name')
      .contains('Luke Skywalker')
  })

  it('displays About Me, Films, and Starships', () => {
    cy.contains('About Me')
    cy.contains('Films')
    cy.contains('Starships')
  })

  it('displays home icon link, returns to home page onclick', () => {
    cy.get(`.iconLinks_homeIcon__2nrOE > path`).click()
    cy.url().should('not.contain', '/people')
    cy.contains('The Star Wars Edition')
  })

  it('displays home text link to return to home page', () => {
    cy.get(`.layout_backToHome__knf4J > a`).click()
    cy.url().should('not.contain', '/people')
    cy.contains('The Star Wars Edition')
  })
})




