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
})