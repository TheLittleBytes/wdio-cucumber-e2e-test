Feature: Demo feature

    @demo
    Scenario Outline: Run first demo feature
        Given Navigate to google page
        When Search with <SearchItem>
        Then click on the searched result
        Then url should match  <ExpectedURL>

        Examples:
            | Test ID | SearchItem | ExpectedURL |
            | DEMO-TC01  | WDIO  | https://webdriver.io/  |