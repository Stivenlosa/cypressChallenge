import homePage from "../pages/HomePage"
import loginPage from "../pages/LoginPage"

describe('Validdating the login', () => {

  it('Should login to inventory page', () => {    
    homePage.openPage();  
    loginPage.login();
    homePage.validateUserNameLogin();
    homePage.validateLogOutButton();
  })

})
