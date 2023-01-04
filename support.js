const format = require('format-duration')

const defaultOptions = {
  terminal: false, // show timestamps in the terminal around the test
  error: true, // add the timestamp to the error message
  commandLog: true, // add the timestamps to the Command Log parent commands
  elapsed: false, // print absolute timestamps
}

/**
 * Registers adding the timestamps to different areas.
 * @param {*} options Which timestamps you want to use
 */
function registerCypressTimestamps(options = defaultOptions) {
  const combinedOptions = { ...defaultOptions, ...options }

  if (combinedOptions.terminal) {
    beforeEach(() => {
      cy.task('beforeTest', Cypress.currentTest.title)
    })

    afterEach(() => {
      cy.task('afterTest', Cypress.currentTest.title)
    })
  }

  let testStartedAt
  Cypress.on('test:before:run', () => {
    testStartedAt = new Date()
  })

  if (combinedOptions.error) {
    // https://on.cypress.io/catalog-of-events
    Cypress.on('fail', (err) => {
      console.error(err)
      const at = new Date().toISOString()
      err.message = at + '\n' + err.message
      throw err
    })
  }

  if (combinedOptions.commandLog) {
    Cypress.on('command:start', ({ attributes }) => {
      // check if the command used "log: false" option
      if (Array.isArray(attributes.args)) {
        const commandOptions = Cypress._.last(attributes.args)
        if (commandOptions.log === false) {
          return
        }
      }

      if (combinedOptions.commandLog === 'all' || attributes.type !== 'child') {
        if (combinedOptions.elapsed && testStartedAt) {
          const elapsed = new Date() - testStartedAt
          const formatted = format(elapsed, { leading: true })
          Cypress.log({
            name: `${formatted} - ${attributes.name}`,
          })
        } else {
          const at = new Date().toISOString()
          Cypress.log({
            name: `${at} - ${attributes.name}`,
          })
        }
      }
    })
  }
}

module.exports = registerCypressTimestamps
