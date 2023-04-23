Feature: Get cryptocurrency data on home page 

  Scenario Outline: As a user, I can select number of rows to display on cryptocurrency data

    Given I am on the home page
    When I select <numberOfRows> rows
    Then I should see all cryptocurrency data filtered

    Examples:
      | numberOfRows | 
      | 20           |

