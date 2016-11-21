module.exports = {
  'no-instance': function (browser) {
    browser
    .url('http://localhost:8080/no-instance/')
      .waitForElementVisible('#app', 1000)

      // No Vue instance mounted with vue router
      .click('li:nth-child(1) > a')
      .assert.urlEquals('http://localhost:8080/no-instance/foo')
      .assert.containsText('.location', 'no-instance/foo')

      .click('li:nth-child(2) > a')
      .assert.urlEquals('http://localhost:8080/no-instance/bar')
      .assert.containsText('.location', 'no-instance/bar')

      .click('li:nth-child(3) > a')
      .assert.urlEquals('http://localhost:8080/no-instance/foo')
      .assert.containsText('.location', 'no-instance/foo')

      .click('li:nth-child(4) > a')
      .assert.urlEquals('http://localhost:8080/no-instance/bar')
      .assert.containsText('.location', 'no-instance/bar')

      .click('li:nth-child(5) > a')
      .assert.urlEquals('http://localhost:8080/no-instance/foo')
      .assert.containsText('.location', 'no-instance/foo')

      // Vue instance mounted with vue router
      .click('#mount')
      .assert.urlEquals('http://localhost:8080/no-instance/foo')
      .assert.containsText('.location', 'no-instance/foo')
      .assert.containsText('#mount', 'foo')

      .click('li:nth-child(2) > a')
      .assert.urlEquals('http://localhost:8080/no-instance/bar')
      .assert.containsText('.location', 'no-instance/bar')
      .assert.containsText('#mount', 'bar')
  }
}
