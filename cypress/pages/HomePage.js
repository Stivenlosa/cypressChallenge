import headerUtils, {elements as headElements} from "./HeaderUtils"
class homePage{
    elements ={       
        listOfCardsAvailable : () => cy.get("h4.card-title"),
        nextPage : () => cy.get(".page-item #next2")
    }

    openPage(){
        cy.visit('https://www.demoblaze.com/index.html')
    }

    validateUserNameLogin(){        
        headElements.welcomeUserLabel().invoke("text").should("be.eq","Welcome demoblaze")
    }

    validateLogOutButton(){
        headElements.logOutBtn().should('exist').and('be.visible').and("have.text","Log out")
    }

    validateProductsAreVisible(ListOfProductToValidate){
        cy.wait(5000)
        ListOfProductToValidate.forEach(productToValidate => {
            var itWasFound = false;
            do{
                this.elements.listOfCardsAvailable().then(($el) => {
                    if($el.filter(":contains('"+productToValidate+"')").length>0){
                     itWasFound = true;
                    }
                    else{
                        this.clickNext();
                    }
                })
            }while(!itWasFound && this.itHasAnotherPageToValidate());
            this.elements.listOfCardsAvailable().filter(":contains('"+productToValidate+"')").then(($el) => {
                cy.wrap($el).should("be.visible")    
            });
            headerUtils.goToPrincipalPage();
            cy.wait(2000);
        })
    }

    itHasAnotherPageToValidate(){
        return this.elements.nextPage().length > 0
    }

    clickNext(){
        this.elements.nextPage().scrollIntoView();
        return this.elements.nextPage().click()
    }

    goToAddToCart(productNameToGo){
        var itWasFound = false;
        do{
            this.elements.listOfCardsAvailable().then(($el) => {
                if($el.filter(":contains('"+productNameToGo+"')").length>0){
                 itWasFound = true;
                }
                else{
                    this.clickNext();
                }
            })
        }while(!itWasFound && this.itHasAnotherPageToValidate());
        this.elements.listOfCardsAvailable()
            .filter(":contains('"+productNameToGo+"')")
            .scrollIntoView()
            .click();
    }

}


module.exports = new homePage();