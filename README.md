# Cypress Regression Testing

## Project Overview

This project contains automated regression tests using Cypress. The tests cover critical functionalities such as adding items to the cart, completing a purchase, and login validations.

## Project Structure

The regression tests are stored in the following paths:

- **AddToCart Test**: `cypress/e2e/AddToCart.cy.js`
- **BuyCompleteFlow Test**: `cypress/e2e/BuyCompleteFlow.cy.js`
- **LoginValidations Test**: `cypress/e2e/LoginValidations.cy.js`

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended LTS version)
- [Cypress](https://www.cypress.io/) (Installed via npm)

### Installation

If you haven’t installed Cypress yet, you can do so by running:

```sh
npm install cypress --save-dev
```

## Running the Tests

You can execute each regression test using the Cypress CLI.

### Run All Tests in Headed Mode

```sh
npm run cy:run
```

### Run All Tests with Cypress UI

```sh
npx cypress open
```

### Running Specific Tests

You can run individual test files using:

#### AddToCart Test

```sh
npx cypress run --spec cypress/e2e/AddToCart.cy.js
```

#### BuyCompleteFlow Test

```sh
npx cypress run --spec cypress/e2e/BuyCompleteFlow.cy.js
```

#### LoginValidations Test

```sh
npx cypress run --spec cypress/e2e/LoginValidations.cy.js
```

## Reporting

Reports are being generated on Mocha Awesome Plugin

#### Merge the Jsons File of All the test

```sh
npm run mocha:merge
```

#### Generate the HTML report

```sh
npm run mocha:generate
```

## CI/CD Integration

You can integrate Cypress tests into CI/CD pipelines using tools like Jenkins, GitHub Actions, or Harness.

## Contributing

If you’d like to contribute to this project, follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit them (`git commit -m 'Added new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

