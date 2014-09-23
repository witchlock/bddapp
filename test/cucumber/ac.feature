@dev
Feature: Contact number capture
  As a online website owner
  I want to capture customer's contact number
  So that I can manage my customer data for future use

  Scenario: initial version
    Given numbers to be entered
      | mobileNumber | altNumber1 | altNumber2 | Result                           |
      | 0423232331   | 0123212321 | 0223432421 | success                          |
      | empty        | 0134233313 | empty      | success                          |
      | empty        | empty      | empty      | Please enter at least one number |
      | 03           | 0134233313 | 02         | Please enter a valid number      |
      | 04           | empty      | empty      | Please enter a valid number      |

  Scenario: request 1 version
    Given numbers to be entered
      | mobileNumber | altNumber1 | altNumber2 | Result                                                    |
      | 0423232331   | 0123212321 | 0223432421 | success                                                   |
      | empty        | 0134233313 | empty      | success                                                   |
      | empty        | empty      | empty      | Please enter at least one number                          |
      | 02           | empty      | empty      | Please enter a mobile number                              |
      | 03           | 0134233313 | 02         | Please enter a valid number, Please enter a mobile number |
      | 04           | empty      | empty      | Please enter a valid number                               |
      | 04           | 033        | empty      | Please enter a valid number, Please enter a valid number  |

  Scenario: request 2 version
    Given numbers to be entered
      | mobileNumber | altNumber1 | altNumber2 | Result                                                    |
      | 0423232331   | 0123212321 | 0223432421 | success                                                   |
      | 0423232331   | empty      | empty      | success                                                   |
      | empty        | 0423123212 | empty      | success                                                   |
      | empty        | 04231      | empty      | Please enter a valid number                               |
      | empty        | 03         | empty      | Please enter a mobile number, Please enter a valid number |
      | 0321322222   | 0423123212 | empty      | Please enter a mobile number                              |
      | empty        | 0134233313 | empty      | Please enter a mobile number                              |
      | empty        | empty      | empty      | Please enter at least one number                          |
      | 02           | empty      | empty      | Please enter a mobile number                              |
      | 03           | 0134233313 | 02         | Please enter a valid number, Please enter a mobile number |
      | 04           | empty      | empty      | Please enter a valid number                               |
      | 04           | 033        | empty      | Please enter a valid number, Please enter a valid number  |