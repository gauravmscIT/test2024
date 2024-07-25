Feature: User Registration on Axate

  Scenario: Registering a new user on Staging Site Axate
    Given the user is on the article page at "https://yrk.branch-master.axate.io/articles/1"
    When the user clicks on the "Get a day pass" button
    And the user fills in a random email address
    And the user selects "United Kingdom" as the country and enters a valid UK postcode
    And the user selects a random preference for marketing preferences
    And the user selects any payment amount
    And the user selects Voucher
    And the user fills in "QA2024" 
    # Code doesnt seem to be working
    And the user clicks "Continue"
    Then the user should see confirmation "You are ready to read your first article"
