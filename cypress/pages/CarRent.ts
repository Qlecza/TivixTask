import { findByText } from "@testing-library/dom"

export const CarRentSelectors = {
    searchForm: ('#search_form'),
    countrySelect: ('#country'),
    citySelect: ('#city'),
    modelInput: ('#model'),
    pickUpDate: ('#pickup'),
    dropOffDate: ('#dropoff'),
    searchButton: ('[type="submit"]'),
    searchResults: ('#search-results'),
}

class CarRent {
    selectCountryByText(text){
        cy.get(CarRentSelectors.countrySelect).select(text);
    return this;
    }

    selectCityByText(text){
        cy.get(CarRentSelectors.citySelect).select(text);
    return this;
    }

    typeModelByText(text){
        cy.get(CarRentSelectors.modelInput).type(text);
    return this
    }

    addPickUpDate(value){
        cy.get(CarRentSelectors.pickUpDate).type(value);
        // YYYY-MM-DD
    return this
    }

    addDropOffDate(value){
        cy.get(CarRentSelectors.dropOffDate).type(value);
        // YYYY-MM-DD
    return this
    }

    visitPredefinedCarList(){
        cy.visit("?country=1&city=2&model=Skoda+Octavia&pickup=2023-04-01&dropoff=2023-04-03");
    return this
    }
}

export default CarRent