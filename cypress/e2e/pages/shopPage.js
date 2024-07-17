/// <reference types="cypress" />

/**
 * @description The shop page items
 */
class ShopPage {
    constructor() {  
        this.ancestryButton = '[data-testid="ancestry-product-card-store-link"]';
        this.healthAndAncestryButton = '[data-testid="health-product-card-store-link"]';
        this.premium = '[data-testid="subscription-product-card-store-link"]';
        this.totalHealth = '[data-testid="totalHealth-product-card-store-link"]';
    }
}
export const shopPage = new ShopPage;

