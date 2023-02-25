import '@testing-library/cypress/add-commands'

Cypress.Commands.add('findCarModelByName', (ModelName) => {
    cy.get('td:nth-child(3)')
      .each(($el, index, $list) => {
      const StoreText = $el.text();
    if(StoreText.includes(ModelName)){
      cy.get('td:nth-child(3)')
        .eq(index)
        .then(function (ModelColumn) {
          const CarModel = ModelColumn.text();
          expect(CarModel).to.equal(ModelName);
        })
    }
    })
});