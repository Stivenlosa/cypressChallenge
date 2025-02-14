import headerUtils from "./HeaderUtils";
class cartPage{


    elements = {        
        listOfProductInCart : () => cy.get("tr.success")
    }


    validateElementsAreVisibleOnCart(ListOfProductToValidate){
        headerUtils.goToCartPage();
        cy.wait(5000)
        this.elements.listOfProductInCart().should('have.length', ListOfProductToValidate.length)
        ListOfProductToValidate.forEach(productToValidate => {
          this.elements.listOfProductInCart()
            .filter(":contains('"+productToValidate+"')")
            .then(($el) => {
                cy.wrap($el).should("be.visible")    
            }); 
        })
    }


}


module.exports = new cartPage();