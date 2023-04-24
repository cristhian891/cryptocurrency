### **Cryptocurrency**

<br>This project selects and filter cryptocurrency information from a crypto website

**Config File**

wdio.conf.js

**How to run the tests locally**

1. Download repo
2. run npm install
3. Run all test locally: 'npx wdio run ./wdio.conf.js' 

**To run API tests**

1. npm install axios
2. run test by typing: 'npx wdio wdio.conf.js --suite api'

**Test Execution Report**
<br>Once the execution is completed, an allure reports file will be generated in the project strcuture, to run them:

1. To create HTML report: 'allure generate reports/ --clean'
2. Start allure server:'allure open'
3. To clean previous reports use: 'allure generate --clean --output reports'