Feature: API Testing Exercise
Call API to get all the cryptocurrency data

Scenario: Check get cryptocurrencies api status code
  When send GET request to "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?", with "coins" "mineable" "100~10000"
  Then status code should be 200

Scenario: Get cryptocurrency data by type, mineable and price on console
  When send GET request to "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?", with "coins" "mineable" "100~100000"
  Then I should get the cryptocurrency data from the request  
