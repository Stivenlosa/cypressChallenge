import {default as purchaseClientInfo} from "../data/purchaseClientInfo.json"
class placeHolderForm{


    elements = {        
        nameInput : () => cy.get("input#name"),
        countryInput : () => cy.get("input#country"),
        cityInput : () => cy.get("input#city"),
        cardInput : () => cy.get("input#card"),
        monthInput : () => cy.get("input#month"),
        yearInput : () => cy.get("input#year"),
        purchaseBtn : () => cy.get("#orderModal .modal-footer .btn-primary"),
        successLabelMessage : () => cy.get(".showSweetAlert h2")
    }


    fillDataForPurchase(){
        cy.wait(2000)
        this.elements.nameInput().type(purchaseClientInfo.name);
        this.elements.countryInput().type(purchaseClientInfo.Country)
        this.elements.cityInput().type(purchaseClientInfo.City)
        this.elements.cardInput().type(purchaseClientInfo.Credit_Card)
        this.elements.monthInput().type(purchaseClientInfo.Month)
        this.elements.yearInput().type(purchaseClientInfo.year)
        this.elements.purchaseBtn().click()
    }

    validateSuccessMessageAfterBuy(){
        this.elements.successLabelMessage().should("have.text","Thank you for your purchase!")
    }


}


module.exports = new placeHolderForm();