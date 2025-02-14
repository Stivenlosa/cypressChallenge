import headerUtils from "./HeaderUtils"
class loginPage{


    elements = {        
        usernameInput : () => cy.get("#loginusername"),
        passwordInput : () => cy.get("#loginpassword"),
        loginModalBtn : () => cy.get("#logInModal .modal-footer button.btn-primary")
    }


    login(){
        headerUtils.goToLoginModal();
        cy.wait(1000)
        this.elements.usernameInput().type("demoblaze");
        cy.wait(1000)
        this.elements.passwordInput().type("demoblaze");
        this.elements.loginModalBtn().click();    
    }


}


module.exports = new loginPage();