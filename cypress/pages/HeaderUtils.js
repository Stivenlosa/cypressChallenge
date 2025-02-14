class headerUtils{

    elements = {
        loginHeaderButton : () => cy.get(".nav-item #login2"),
        logOutBtn : () => cy.get(".nav-item #logout2"),
        welcomeUserLabel : () => cy.get(".nav-item #nameofuser"),
        showCartPageBtn : () => cy.get(".nav-item a#cartur"),
        goToPrincipal : () => cy.get("a#nava")
    }

    goToLoginModal(){
        this.elements.loginHeaderButton().click()
    }

    goToPrincipalPage(){
        this.elements.goToPrincipal().scrollIntoView().click();
    }

    goToCartPage(){
        this.elements.showCartPageBtn()
            .scrollIntoView()
            .click();
    }
   
}

module.exports = new headerUtils();