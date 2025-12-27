/// <reference types="cypress"/>

describe("Test Signup ", () => {

    let testData
    before("Load fixture", () => {
        cy.fixture("test-data.json").then((obj) => {
            testData = obj
        })
    })

    beforeEach("", () => {
        cy.visit("")
    })

    it("Visit and click [Get Started] button", () => {
        cy.contains("button", "Get Started")
            .click()
        cy.get("#remember").click()
        cy.contains("button", "Continue").click()
        cy.contains("label", "First Name").next().type(testData.fname)
        cy.contains("label", "Last Name").next().type(testData.lname)
        cy.contains("label", "Email Address").next().type(testData.validEmail)
        cy.contains("label", "Phone Number").next().within(() => {
            cy.get("input").type(testData.validPhoneNumber)
        })

        cy.contains("label", "Password").next().within(() => {
            cy.get("input").type(testData.securePassword)
        })

        cy.contains("label", "Confirm Password").next().within(() => {
            cy.get("input").type(testData.securePassword)
        })
        cy.contains("button", "Next").click()
    })

    it.skip("", () => {
        cy.origin("https://www.gmail.com", () => {
            cy.visit()
        })
    })
})