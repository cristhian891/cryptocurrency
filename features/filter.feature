  Feature: Get cryptocurrency data on home page after applying filter
  
  Scenario Outline: As a user, I can filter by algorithm and add specific filter

    Given I am on the home page
    When I filter by <name> <type> filter 
    And I add <addtype> filter with mineable toggle <yes/no>
    And I select <minimunPrice> to <maximunPrice> price range
    Then I should see all cryptocurrency data filtered

    Examples:
      | name     |  type     | addtype  |  yes/no | minimunPrice | maximunPrice |
      | PoW      | Algorithm | Coins    |    yes  |   100        |   10000      |
