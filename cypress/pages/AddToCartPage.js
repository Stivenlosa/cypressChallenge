import headerUtils from "./HeaderUtils";
class addToCart{


    elements = {        
        addToCartBtn : () => cy.get("div a.btn-success")
    }


    clickAddToCart(){
        cy.wait(5000)
        this.elements.addToCartBtn().dblclick();
        cy.go('back')
        headerUtils.goToPrincipalPage();
    }


}


module.exports = new addToCart();