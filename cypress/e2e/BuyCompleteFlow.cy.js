import homePage from "../pages/HomePage"
import loginPage from "../pages/LoginPage"
import addToCartPage from "../pages/AddToCartPage"
import cartPage from "../pages/CartPage"
import placeHolderForm from "../pages/PlaceHolderForm"
import {default as ExamplesToAddIntoCart} from "../data/productsToAddIntoCart.json"

ExamplesToAddIntoCart.examples.forEach(example => {
  describe('Validating all Payment Flow ' + example.name, { testIsolation: false }, () => {

    before(() => {
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();
      cy.clearAllCookies();
      homePage.openPage();
      loginPage.login();
      cy.wait(5000)
      example.listOfProducts.forEach(productToValidate => {
        homePage.goToAddToCart(productToValidate);
        addToCartPage.clickAddToCart();
      })
      cartPage.goToCartPage()
    })

    it('Fill Place Holder Form', () => {          
      cartPage.showPlaceHolderForm();
      placeHolderForm.fillDataForPurchase();
    })

    it('Validate Success Response', () => {                
      placeHolderForm.validateSuccessMessageAfterBuy();
    })
  
  })

})
