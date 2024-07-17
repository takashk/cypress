/// <reference types="cypress" />

/**
 * @description The shop page items
 */
class OrderSummaryPage {
    constructor() {  
        this.price = '.spc-order-price-text';
    }
}
export const orderSummaryPage = new OrderSummaryPage;
