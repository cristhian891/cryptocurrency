import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get rowsButton () {
        return $('[display="flex"][style="white-space:nowrap"] > .sc-aef7b723-0');
    }

    get rowsOptions(){
        return $('.tippy-content [data-sensors-click="true"]');
    }

    get filterButton () {
        return $('.table-control-area .table-control-filter');
    }

    get filterOptions (){
        return $('#__next > div > div.main-content > div.sc-1a736df3-0.PimrZ.cmc-body-wrapper > div > div:nth-child(1) > ul > li:nth-child(2) > div > span > button');
    }

    get searchFilterInput () {
        return $('input[placeholder="Search"]');
    }

    get addFilterButton(){
        return $('ul li:nth-child(5) [data-sensors-click=true]');
    }

    get filterList(){
        return $$('[data-qa-id="filter-dd-toggle"]');
    }

    get mineableToggle(){
        return $('label#mineable');
    }

    get allcryptoCurrencyOptions(){
        return $$('[data-qa-id="range-filter-crypto"] .cmc-option-button');
    }

    get showResultsButton(){
        return $('#__next > div > div.main-content > div.sc-1a736df3-0.PimrZ.cmc-body-wrapper > div > div:nth-child(1) > div.popup-overlay > div > div > div.sc-aef7b723-0.hoUZUa > div.sc-aef7b723-0.sc-f6433b52-0.hfka-Dm > button.sc-44910c32-0.GKyCX.cmc-filter-button');
    }

    get applyFilterButton(){
        return $('button[data-qa-id="filter-dd-button-apply"]');
    }

    get minPriceFilterInput(){
        return $('input[data-qa-id="range-filter-input-min"]');
    }

    get maxPriceFilterInput(){
        return $('input[data-qa-id="range-filter-input-max"]');
    }

    get table () { return $('td')}

    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        await super.maximize()
        return super.open(`https://coinmarketcap.com`);  
    }

    /**
     * Select the number of rows to be displayed in the Cryptocurrency data table
     */
    async selectRows (num){
        const numSelector = 'button='+ num;
        await this.rowsButton.click();
        await this.rowsOptions.$(numSelector).click();
    }
   
   /**
     * Gets the data from the table in Arrays
     */ 
   async showTableContent (){

        const titles = [];
        const position = [];
        const cryptoNames = [];
        const price = [];
        const volume =[]
        const datatable = [];

        const  titles_elements = await $$('th div p');
        const position_elements = await $$('td:nth-child(2) p')
        const cryptoNames_elements = await $$('td:nth-child(3) p[color="text"]');
        const price_elements = await $$('td:nth-child(8) p');
        const volume_elements = await $$('td:nth-child(9) p[font-size="1"]');

        for( const e of titles_elements){
            titles.push(e.getText())
        }
        for( const e of position_elements){
            position.push(e.getText())
        }
        for( const e of cryptoNames_elements){
            cryptoNames.push(e.getText())
        }
        for( const e of price_elements){
            price.push(e.getText())
        }
        for( const e of volume_elements){
            volume.push(e.getText())
        }
  
        datatable[0] = position;
        datatable[1] = cryptoNames;
        datatable[2] = price;
        datatable[3] = volume;
    }

    /**
     * Click on filter Button and then click on the type of filter base on name
     */ 
    async searchForAlgorithmFilter(name){
        
        const algoSelector = 'li=' + name;

        await this.filterButton.click();   
        await this.filterOptions.moveTo();
        await this.filterOptions.click();
        await $(algoSelector).click();            
    }

    /**
     * Adds a new filter and specifies the options for all cryptocurrencies and mineable toggle
     */ 
    async selectFilterOptions(addType,toggle){
        let num_list = 0;
        if(addType == "Coins"){ num_list = 1}
        
        await this.addFilterButton.click();
        await this.filterList[0].click();
        await this.allcryptoCurrencyOptions[num_list].click();
        if(toggle == "yes"){
           await this.mineableToggle.click();
        }
    }

    /**
     * Input the min and max price for the Filter Options
     */ 
    async selectPriceRange(min,max){
        await this.filterList[2].click();
        await this.minPriceFilterInput.setValue(min)
        await this.maxPriceFilterInput.setValue(max)
        console.log(min, max)
    }

    /**
     * Clicks on apply Filter button and then on Show results button
     */ 
    async showResults(){
        await this.applyFilterButton.moveTo();
        await this.applyFilterButton.click();
        await this.showResultsButton.click();
    }
}

export default new HomePage();
