/// <reference types="cypress" />

/**
 * @description The items in the Hamburger Menu
 */
class BurgerMenu {
  // Define locators or data-testid attributes for page elements
  constructor() {  
    this.burgerMenuButton = '[data-testid="burger-menu-button"]';
    this.shopButton = '[data-testid="burger-click-Shop"]';
    this.learnButton = '[data-testid="burger-click-Learn"]';
    this.aboutButton = '[data-testid="burger-click-About"]';
  }
   openPage(pageButton){
    cy.get(this.burgerMenuButton).should('exist').click({force: true});
    cy.get(pageButton).click({force: true});
    }
  }
  const burgerMenu = new BurgerMenu();
  

    // Open the Shop Page
    export function openShopPage() {
      burgerMenu.openPage(burgerMenu.shopButton);
    }
    // Open the Learn Page
    export function openLearnPage() {
      burgerMenu.openPage(burgerMenu.learnButton);
    }
    // Open the About Page
    export function openAboutPage() {
      burgerMenu.openPage(burgerMenu.aboutButton);
    }
  
  //**
  //  * @description Open the About page from the Hamburger Menu
  //  */
  export class LearnPage {
    constructor() {  
      this.listItems = '.Header_nav-submenu-link__3WaQy';
    }
      openLearnPageItems(learnPageItem){
      cy.get(this.listItems).should('contain', learnPageItem).click();
      }
    }
 