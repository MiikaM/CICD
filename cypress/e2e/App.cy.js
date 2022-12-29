describe('Pokedex', function () {
  beforeEach(function () {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function () {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Pokemon page can be opened and the correct pokemon is displayed', function () {
    const venusaurPage = cy.contains('venusaur')
    venusaurPage.click()
    cy.get('[class="pokemon-ability-name"]:first').contains('overgrow')
    cy.get('[class="pokemon-ability-name"]:last').contains('chlorophyll')
  })
})