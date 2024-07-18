/// <reference types="cypress" />

import { openAboutPage, openLearnPage, openShopPage } from "./pages/burgerMenu";
import { shopPage } from "./pages/shopPage";
import { inThisOrderPage } from "./pages/InThisOrderPage";
import { orderSummaryPage } from "./pages/orderSummaryPage";

const price = "$99.00";

describe('Website', () => {
  beforeEach(() =>{
    // Load the website before the test starts
    cy.visit('https://www.23andme.com/');
  });
  afterEach(() => {
    cy.log("done");
  })
  it('checks if the user can open the Shop page', () => {
    // Open the burger menu and navigate to the Shop page
    openShopPage();
  });
  xit('checks if the user can open the Learn page', () => {
    // Open the burger menu and navigate to the Learn page
    openLearnPage();
  });
  xit('checks if the user can open the About page', () => {
    // Open the burger menu and navigate to the About page
    openAboutPage();
  });
  it('checks if the user can get to the check out page with the correct price', () => {
    // Click on a product
    cy.get(shopPage.ancestryButton).click();
    // In the "In this order" page verify that the item price is correct 
    cy.get(inThisOrderPage.price).should('contain', price);
    // In the same page the Total is also the correct price
    cy.get(inThisOrderPage.total).should('contain', price);
    // Click on the checkout button
    cy.get(inThisOrderPage.checkOutButton).click();
    // In the Order Sumary page, the price is correct
    cy.get(orderSummaryPage.price).should('contain', price); 
  });

});