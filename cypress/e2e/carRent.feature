Feature: Car Rent - QA Lab
  Scenario: Visiting the car rental page
    Given I visit qalab.pl.tivixlabs.com
    Then I should see car rental form

Scenario: Filling car rental form
  Given I visit qalab car rental page
  When I fill car rent form
  Then I should see specified car list

Scenario: View car rental details
  Given I visit predefined car list
  When I click 'Rent' button
  Then I should see car details