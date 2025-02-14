import homePage from "../pages/HomePage"
import loginPage from "../pages/LoginPage"
import addToCartPage from "../pages/AddToCartPage"
import cartPage from "../pages/CartPage"
import {default as ExamplesToAddIntoCart} from "../data/productsToAddIntoCart.json"

ExamplesToAddIntoCart.examples.forEach(example => {
  describe('Validdating add to cart flow ' + example.name, { testIsolation: false }, () => {

    before(() => {
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();
      cy.clearAllCookies();
      homePage.openPage();
      loginPage.login();
    })

    it('Validate the products are visibles in the page', () => {    
      //homePage.validateProductsAreVisible(example.listOfProducts)
    })

    it('Add products to cart', () => {    
      cy.wait(5000)
      example.listOfProducts.forEach(productToValidate => {
          homePage.goToAddToCart(productToValidate);
          addToCartPage.clickAddToCart();
      })
    })

    it('Validate Elements Are visible on Cart Page', () => {          
      cartPage.validateElementsAreVisibleOnCart(example.listOfProducts)
    })
  
  })

})
