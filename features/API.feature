Feature: API Testing Exercise
Call API to get all the cryptocurrency data

Scenario: Get cryptocurrency data by marketcap with a limit of rows
  When send GET request to "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?", with these params "market_Cap" "20"
  Then status code should be 200

Scenario: Get cryptocurrency data by marketcap with a limit of rows
  When send GET request to "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?", with these params "market_Cap" "20"
  Then I should get the cryptocurrency data from the request  
