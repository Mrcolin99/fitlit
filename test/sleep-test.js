import { expect } from "chai";
import Sleep from "../src/data/sleep-data";

describe("Sleep", () => {
    let userSleep;

    beforeEach(() => {
        userSleep = new Sleep(1, mockSleepData)
    });

    it("should be a function", () => {
        expect(Sleep).to.be.a("function")
    })

    it("should be an instance of Sleep", () => {
        expect(userSleep).to.be.an.instanceOf(Sleep)
    })

    it("should be able to store an ID", () => {
        expect(userSleep).to.equal(1)
    })

    it("should be able to return a date", () => {

    })

    it("should be able to return hours slept", () => {

    })

    it("should be able to return the quality of sleep", () => {

    })

    it("shoukd be able to return the average hours of sleep per week", () => {

    })

    it("should be able to return the average sleep quality per week", () => {

    })

    it("should return average sleep quality for all users", () => {

    })
})