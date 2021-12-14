import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../../login.page';

Given(/^open url "(.*)"$/, async (mainURL) => {
    await LoginPage.openBaseUrl(mainURL);
});

Then(/^I have to wait (.*) seconds$/, async (seconds) => {
   await LoginPage.hold(20);
});



