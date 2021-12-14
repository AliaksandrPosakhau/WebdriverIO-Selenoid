/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {

    openBaseUrl(mainURL) {       
            return browser.url(mainURL);
    }

    async hold(seconds) {
        await browser.pause(seconds*1000);
    }
}

export default new LoginPage();
