describe('App Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should add a product', () => {
    cy.get('[data-testid=btn-show-form-new-product]').click().then(() => {
      cy.get('[data-testid=form-name]')
        .as('form-name')
        .should('be.visible');
      cy.get('[data-testid=form-price]')
        .as('form-price')
        .should('be.visible');
      cy.get('[data-testid=form-quantity]')
        .as('form-quantity')
        .should('be.visible');

      cy.get('@form-name').focus();
      cy.get('@form-name').type('test a');

      cy.get('@form-price').focus();
      cy.get('@form-price').type('1,99');

      cy.get('@form-quantity').focus();
      cy.get('@form-quantity').type('1');

      cy.get('@form-name').should('have.value', 'test a');
      cy.get('@form-price').should('have.value', 'R$1,99');
      cy.get('@form-quantity').should('have.value', '1');

      cy.get('[data-testid=form-btn-submit]').click();

      cy.get('[data-testid=product-card-list]')
        .should('contain', 'test a')
        .should('contain', '1,99')
        .should('contain', '1');
    });
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

    cy.get('[data-testid=form-name]').as('form-name');
    cy.get('[data-testid=form-price]').as('form-price');
    cy.get('[data-testid=form-quantity]').as('form-quantity');

    cy.get('@form-name').type('test a');
    cy.get('@form-price').type('1,99');
    cy.get('@form-quantity').type('1');

    cy.get('[data-testid=form-btn-submit]').click();
    cy.get('[data-testid=dialog-btn-close]').click();

    cy.get('[data-testid=btn-remove]').click();
    cy.get('[data-testid=product-card-list]').should("not.exist");
  });

  it('Should search a product', () => {
    cy.get('[data-testid=btn-show-form-new-product]').click();

    cy.get('[data-testid=form-name]').as('form-name');
    cy.get('[data-testid=form-price]').as('form-price');
    cy.get('[data-testid=form-quantity]').as('form-quantity');

    for (let i = 0; i <= 1; i++) {
      cy.get('@form-name').clear();
      cy.get('@form-name').type(`test ${i}`);
      cy.get('@form-name').should('have.value', `test ${i}`);

      cy.get('@form-price').clear();
      cy.get('@form-price').type('1,99');
      cy.get('@form-price').should('have.value', 'R$1,99');

      cy.get('@form-quantity').clear();
      cy.get('@form-quantity').type('1');
      cy.get('@form-quantity').should('have.value', '1');

      cy.get('[data-testid=form-btn-submit]').click();
    }

    cy.get('[data-testid=dialog-btn-close]').click();

    cy.get('[data-testid=search-input]').type('1');
    cy.get('[data-testid=search-btn]').click();

    cy.get('[data-testid=product-card-list]')
      .as('product-list')
      .children()
      .should('have.lengthOf', '1');

    cy.get('@product-list').should('contain', '1,99');
    cy.get('@product-list').should('contain', '1');
  });
});
