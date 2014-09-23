@dev
Feature: Contact number capture
  As a online website owner
  I want to capture customer's contact number
  So that I can manage my customer data for future use

  Scenario: Capture phone numbers
    Given user is on Contact Number page
    When user submits their numbers as:
      | mobileNumber | altNumber1 | altNumber2 |
      | 0423232331   | 0123212321 | 0223432421 |
    Then it should save successfully

  Scenario: Handle invalid phone numbers
    Given user is on Contact Number page
    When user submits their numbers as:
      | mobileNumber | altNumber1 | altNumber2 |
      | 0423         | 0123212321 | 0223432421 |
    Then it should display error "Please enter a valid number"