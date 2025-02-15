import headerUtils from "./HeaderUtils";
class cartPage{


    elements = {        
        listOfProductInCart : () => cy.get("tr.success"),
        placeHolderBtn : () => cy.get("button[data-target='#orderModal']")
    }


    validateElementsAreVisibleOnCart(ListOfProductToValidate){
        this.goToCartPage()
        this.elements.listOfProductInCart().should('have.length', ListOfProductToValidate.length)
        ListOfProductToValidate.forEach(productToValidate => {
          this.elements.listOfProductInCart()
            .filter(":contains('"+productToValidate+"')")
            .then(($el) => {
                cy.wrap($el).should("be.visible")    
            }); 
        })
    }

    goToCartPage(){
        headerUtils.goToCartPage();
        cy.wait(5000)
    }

    showPlaceHolderForm(){
        this.elements.placeHolderBtn().click();
        cy.wait(2000)
    }


}


module.exports = new cartPage();