Feature: Looking for Shipping 2018
Looking for Shipping 2018 tag after filling the keep in touch form

  Scenario: MagicLeap.com navigation
    Given Browsing "http://www.magicleap.com"
    When Finding the keep in touch form
    Then I sould fill the form and submit
    Then search result should contain "Thanks! See ya soon!"

  Scenario: Magicleap.com successful failure
    Given Browsing "http://www.magicleap.com"
    When Finding the keep in touch form
    Then I sould fill the form and submit
    Then Then search result should not contain "Shipping 2017" 