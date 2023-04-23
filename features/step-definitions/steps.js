import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page.js';

Given(/^I am on the home page$/, async () => {
    await HomePage.open();
});

When(/^I select (.*) rows$/, async (rows) => {
    await HomePage.selectRows(rows);
});

When(/^I filter by (.*) (.*) filter$/, async (name, filter) => {
    await HomePage.searchForFilter(name,filter)
});

When(/^I click on show result button$/, async () => {
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

