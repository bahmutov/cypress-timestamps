function getUTC() {
  const now = new Date()
  return now.toISOString()
}

function registerCypressTimestamps(on) {
  on('task', {
    beforeTest(testName) {
      console.log(`=== ${getUTC()} start: ${testName}`)
      // cy.task must return something, cannot return undefined
      return null
    },
    afterTest(testName) {
      console.log(`=== ${getUTC()} end: ${testName}`)
      return null
    },
  })

  // https://on.cypress.io/after-screenshot-api
  on('after:screenshot', ({ testFailure, takenAt }) => {
    if (testFailure) {
      // this is a screenshot taken on test failure
      // not a screenshot from the cy.screenshot command
      // takenAt is a UTC string
      console.log(`xxx ${takenAt} error`)
    }
  })
}

module.exports = registerCypressTimestamps
