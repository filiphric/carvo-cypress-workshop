
import singleBoardSingleList from '@scripts/fixtures/singleBoardSingleList.json'
import singleBoardTwoListsFiveCards from '@scripts/fixtures/singleBoardTwoListsFiveCards.json'
import singleBoardSingleListThreeCardsSingleUser from '@scripts/fixtures/singleBoardSingleListThreeCardsSingleUser.json'
import threeBoards from '@scripts/fixtures/threeBoards.json'
import threeBoardsSingleListSingleCard from '@scripts/fixtures/threeBoardsSingleListSingleCard.json'

const beforeTestSeeds = {
  'cypress/e2e/02_retryability_and_timeouts/demo_start.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_retryability_and_timeouts/demo_end.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/05_authentication/demo_start.cy.tjs': singleBoardSingleListThreeCardsSingleUser,
  'cypress/e2e/05_authentication/demo_end.cy.ts': singleBoardSingleListThreeCardsSingleUser,
  
}

const beforeEachTestSeeds = {
  'cypress/e2e/01_creating_first_test/demo_start.cy.ts': threeBoards,
  'cypress/e2e/01_creating_first_test/demo_end.cy.ts': threeBoards,
  'cypress/e2e/03_intercepting_requests/demo_start.cy.ts': singleBoardSingleList,
  'cypress/e2e/03_intercepting_requests/demo_end.cy.ts': singleBoardSingleList,
  'cypress/e2e/03_intercepting_requests/challenge.cy.ts': singleBoardSingleList,
  'cypress/e2e/04_dynamic_stubbing/demo_start.cy.ts': threeBoardsSingleListSingleCard,
  'cypress/e2e/04_dynamic_stubbing/demo_end.cy.ts': threeBoardsSingleListSingleCard,
  'cypress/e2e/04_dynamic_stubbing/challenge.cy.ts': threeBoardsSingleListSingleCard,
}

// @ts-ignore
const testPath = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

console.log(testPath)

before(() => {

  const dbState = beforeTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before all tests', dbState)
  }

})

beforeEach(() => {

  const dbState = beforeEachTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})