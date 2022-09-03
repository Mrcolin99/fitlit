import { expect } from "chai";
import sleepData from "../src/data/sleep-data";
import Sleep from "../src/sleep.js"

const mockSleepData = sleepData;


describe("Sleep", () => {
    let userSleep;

    beforeEach(() => {
        userSleep = new Sleep(1, mockSleepData);
    });

    it("should be a function", () => {
        expect(Sleep).to.be.a("function");
    });

    it("should be an instance of Sleep", () => {
        expect(userSleep).to.be.an.instanceOf(Sleep);
    });

    it("should be able to store an ID", () => {
        expect(userSleep.userID).to.equal(1);
    });

    it("should be able to return a date", () => {
        expect(userSleep.date).to.equal("2019/06/15");
    });

    it("should be able to return hours slept", () => {
        expect(userSleep.hoursSlept).to.equal(6.1);
    });

    it.skip("should be able to return the quality of sleep", () => {
        expect(userSleep.sleepQuality).to.equal(2.2);
    });

    it.skip("shoukd be able to return the average hours of sleep per day", () => {
        const averageSleepPerDay = userSleep.getAverageSleepPerDay();
        expect(averageSleepPerDay).to.equal(8);
    });

    it.skip("should be able to return the average sleep quality per day", () => {
        const averageQualitySleep = userSleep.getAverageQuality();
        expect(averageQualitySleep).to.equal(2.6);
    });

    it.skip("should be able to return hours slept on a specific day", () => {
        const sleepForADay = userSleep.getHoursSleptPerDay("2019/06/20");
        expect(sleepForADay).to.equal(9.3);
    });

    it.skip("should be able to return sleep quality for a specific day", () => {
        const sleepQualityForADay = userSleep.getSleepQualityPerDay("2019/06/20");
        expect(sleepQualityForADay).to.equal(1.2);
    });

    it.skip("should be able to return the total hours slept in a week", () => {
        const sleepForAWeek = userSleep.getSleepForTheWeek("2019/06/21");
        expect(sleepForAWeek).to.deep.equal({
            date: [
                "2019/06/15",
                "2019/06/16",
                "2019/06/17",
                "2019/06/18",
                "2019/06/19",
                "2019/06/20",
                "2019/06/21"
            ],
            hoursSlept: [
                6.1,
                4.1,
                8,
                10.4,
                10.7,
                9.3,
                7.8
            ]
        });
    });

    it.skip("should be able to return the total sleep quality for a week", () => {
        const sleepQualityForTheWeek = userSleep.getQualityForTheWeek("2019/06/21");
        expect(sleepQualityForTheWeek).to.deep.equal({
            date: [
                "2019/06/15",
                "2019/06/16",
                "2019/06/17",
                "2019/06/18",
                "2019/06/19",
                "2019/06/20",
                "2019/06/21"
            ],
            sleepQuality: [
                2.2,
                3.8,
                2.6,
                3.1,
                1.2,
                1.2,
                4.2
            ]
        });
    });

    it.skip("should return average sleep quality for all users", () => {
        const allUserQuality = userSleep.getAllQuality()
        expect(allUserQuality).to.equal(2.6)
    });
});
