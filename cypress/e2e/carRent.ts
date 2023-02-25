import { Given, Then , When} from "@badeball/cypress-cucumber-preprocessor";
import { each } from "cypress/types/bluebird";
import { takeRight } from "cypress/types/lodash";
import CarRent, { CarRentSelectors } from "../pages/CarRent";
import { CarRentDetailsSelectors } from "../pages/CarRentDetails";

const carRent = new CarRent();

// Scenario: Visiting the car rental page
Given("I visit qalab.pl.tivixlabs.com", () => {
  cy.visit("qalab.pl.tivixlabs.com");
});

Then("I should see car rental form", () => {
  cy.get(CarRentSelectors.searchForm).should('be.visible');
  cy.get(CarRentSelectors.countrySelect).should('exist');
  cy.get(CarRentSelectors.citySelect).should('exist');
  cy.get(CarRentSelectors.modelInput).should('exist');
  cy.get(CarRentSelectors.pickUpDate).should('exist');
  cy.get(CarRentSelectors.dropOffDate).should('exist');
  cy.get(CarRentSelectors.searchButton).should('exist');
});

// Scenario: Filling car rental form
Given("I visit qalab car rental page" , () => {
  cy.visit("/");
});

When("I fill car rent form", () => {
  carRent
    .selectCountryByText("Poland")
    .selectCityByText("Cracow")
    .typeModelByText("Skoda Octavia")
    .addPickUpDate("2023-04-01")
    .addDropOffDate("2023-04-03");
  cy.get(CarRentSelectors.searchButton).should("have.text", "Search").click();
});

Then("I should see specified car list", () => {
  cy.get(CarRentSelectors.searchResults).should('be.visible');
  cy.findCarModelByName("Skoda Octavia");
});

// Scenario: View car rental details
Given("I visit predefined car list", () => {
  carRent.visitPredefinedCarList();
});

When("I click 'Rent' button", () => {
  cy.findCarModelByName("Skoda Octavia").first().then(() => {
    cy.get(':nth-child(1) > :nth-child(7) > .btn').click();
  })
});

Then("I should see car details", () => {
  cy.url().should('include', 'details');
  cy.get(CarRentDetailsSelectors.cardHeader).should('include.text', "Skoda Octavia");
  cy.get(CarRentDetailsSelectors.cardBody).within(() => {
    cy.contains("Price per day:").should('exist');
    cy.contains("Location:").should('exist');
    cy.contains("License plate:").should('exist');
    cy.contains("Pickup date:").should('exist');
    cy.contains("Dropoff date:").should('exist');
  })
  cy.contains("Rent!")
    .should('be.visible')
    .and('have.attr', 'href');
})