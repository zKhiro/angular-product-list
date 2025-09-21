describe('App Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should add a product', () => {
    cy.get('[data-testid=btn-show-form-new-product]').click();

    const formNameEl = cy.get('[data-testid=form-name]');
    const formPriceEl = cy.get('[data-testid=form-price]');
    const formQuantityEl = cy.get('[data-testid=form-quantity]');

    formNameEl.type('test a');
    formNameEl.should('have.value', 'test a');

    formPriceEl.type('1,99');
    formPriceEl.should('have.value', 'R$1,99');

    formQuantityEl.type('1');
    formQuantityEl.should('have.value', '1');

    cy.get('[data-testid=form-btn-submit]').click();

    cy.get('[data-testid=product-card-list]').as('product-list').should('contain', 'test a');
    cy.get('@product-list').should('contain', '1.99');
    cy.get('@product-list').should('contain', '1');
  });

  it('Input should inform its required', () => {
    cy.get('[data-testid=btn-show-form-new-product]').click();

    cy.get('[data-testid=form-btn-submit]').click();

    cy.get('[data-testid=error-msg]')
      .should('have.lengthOf', '3')
      .should('contain', 'Campo obrigatório.');
  });

  it('Price input should inform its required to have value bigger then 0', () => {
    cy.get('[data-testid=btn-show-form-new-product]').click();

    cy.get('[data-testid=form-name]').type('test a');
    cy.get('[data-testid=form-quantity]').type('1');

    cy.get('[data-testid=form-price]').type('0');

    cy.get('[data-testid=form-btn-submit]').click();

    cy.get('[data-testid=error-msg]')
      .should('have.lengthOf', '1')
      .should('contain', 'Este valor é incabível.');
  });

  it('Should remove a product', () => {
    cy.get('[data-testid=btn-show-form-new-product]').click();

    const formNameEl = cy.get('[data-testid=form-name]');
    const formPriceEl = cy.get('[data-testid=form-price]');
    const formQuantityEl = cy.get('[data-testid=form-quantity]');

    formNameEl.type('test a');
    formPriceEl.type('1,99');
    formQuantityEl.type('1');

    cy.get('[data-testid=form-btn-submit]').click();

    cy.get('[data-testid=btn-remove]').click();
    cy.get('[data-testid=product-card-list]').should("not.exist");
  });

  it('Should search a product', () => {
    cy.get('[data-testid=btn-show-form-new-product]').click();

    const formNameEl = cy.get('[data-testid=form-name]');
    const formPriceEl = cy.get('[data-testid=form-price]');
    const formQuantityEl = cy.get('[data-testid=form-quantity]');

    for (let i = 0; i <= 1; i++) {
      formNameEl.clear();
      formNameEl.type(`test ${i}`);
      formNameEl.should('have.value', `test ${i}`);

      formPriceEl.clear();
      formPriceEl.type('1,99');
      formPriceEl.should('have.value', 'R$1,99');

      formQuantityEl.clear();
      formQuantityEl.type('1');
      formQuantityEl.should('have.value', '1');

      cy.get('[data-testid=form-btn-submit]').click();
    }

    cy.get('[data-testid=search-input]').type('1');
    cy.get('[data-testid=search-btn]').click();

    cy.get('[data-testid=product-card-list]')
      .as('product-list')
      .children()
      .should('have.lengthOf', '1');

    cy.get('@product-list').should('contain', '1.99');
    cy.get('@product-list').should('contain', '1');
  });
});
