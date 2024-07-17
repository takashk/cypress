/// <reference types="cypress" />

/**
 * @description The shop page items
 */
class InThisOrderPage {
    constructor() {  
        this.price = '.item-price';
        this.total = '#text_items_total_with_discount';
        this.checkOutButton = ':nth-child(1) > .submit';
    }
}
export const inThisOrderPage = new InThisOrderPage;
