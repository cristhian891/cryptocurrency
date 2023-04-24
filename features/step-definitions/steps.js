import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page.js';
import assert from 'node:assert/strict';
import axios from 'axios';


Given(/^I am on the home page$/, async () => {
    await HomePage.open();
});

When(/^I select (.*) rows$/, async (rows) => {
    await HomePage.selectRows(rows);
});

When(/^I filter by (.*) algorithm filter$/, async (name) => {
    await HomePage.searchForAlgorithmFilter(name);
});

When(/^I click on apply filter button$/, async () => {
    await HomePage.showResults();
});

When(/^I add (.*) filter with mineable toggle (.*)$/, async (typeFilter, toggle) => {
    await HomePage.selectFilterOptions(typeFilter,toggle)
    await browser.pause(2000);
});

When(/^I select (.*) to (.*) price range$/, async (min, max) => {
    await HomePage.selectPriceRange(min,max)
});

Then(/^I should see all cryptocurrency data filtered$/, async () => {
    await HomePage.showTableContent()   
    await expect(HomePage.table).toBeDisplayed();
});

// ------------------------------------------ API Steps definition ------------------------------------//

let resp = {}

When(/^send GET request to "([^"]*)", with these params (.*) (.*)$/, async (url, sortBy, limit ) => {

    resp = await axios.get(url, {
        params :{
            'start': 1,
            'limit': 20,
            'sortBy': 'market_cap',
            'sortType' : 'desc',
            'convert': 'USD,BTC,ETH',
            'cryptoType': 'all',
            'tagType': 'all',
            'audited': false,
            'aux': 'ath,atl,high24h,low24h,num_market_pairs,cmc_rank,date_added,max_supply,circulating_supply,total_supply,volume_7d,volume_30d,self_reported_circulating_supply,self_reported_market_cap',
            'tagSlugs': 'pos'
        }
    });

    //Prints all info about crypto currency
    console.log(resp.data.data.cryptoCurrencyList);
});

Then(/^I should get the cryptocurrency data from the request$/, async function () {
    return resp.data.data.cryptoCurrencyList
});

Then(/^status code should be (.*)$/, async function (statusCode) {
    return assert.equal(resp.status, Number(statusCode));
});