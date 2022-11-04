import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"

Given(/^Navigate to google page$/, async function () {
    console.log('Before opening browser....');
    await browser.url("https://www.google.com")
    await browser.pause(7000)
    console.log('After closing browser')
})

When(/^Search with (.*)/, async function (SearchItem) {
    console.log('>> SearchItem: ${SearchItem}');
    let ele = await $('[name=q]')
    ele.setValue(SearchItem)
    await browser.keys("Enter")
})

Then(/^click on the searched result$/, async function () { 
    let ele = await $('<h3>')
    ele.click()
})

Then(/^url should match  (.*)$/, async function (ExpectedURL) { 
    console.log('>> ExpectedURL: ${ExpectedURL}');
    let url = await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL)

})

