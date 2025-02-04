import { expect } from "chai";
import Sleep from "../src/sleep.js";
import sleepData from "../src/data/sleep-data";


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

    it("should return a set of user data", () => {
        const userSleepData = userSleep.getUserSleepData(mockSleepData);
        expect(userSleepData).to.deep.equal([
            {
                userID: 1,
                date: "2019/06/15",
                hoursSlept: 6.1,
                sleepQuality: 2.2
            },
            {
                userID: 1,
                date: "2019/06/16",
                hoursSlept: 4.1, 
                sleepQuality:3.8
            },
            {
                userID: 1,
                date: "2019/06/17",
                hoursSlept: 8,
                sleepQuality: 2.6
            },
            {
                userID: 1,
                date: "2019/06/18",
                hoursSlept: 10.4,
                sleepQuality: 3.1
            },
            {
                userID: 1,
                date: "2019/06/19",
                hoursSlept: 10.7,
                sleepQuality: 1.2
            },
            {
                userID: 1,
                date: "2019/06/20",
                hoursSlept: 9.3,
                sleepQuality: 1.2
            },
            {
                userID: 1,
                date: "2019/06/21",
                hoursSlept: 7.8,
                sleepQuality: 4.2
            }
        ]);
    });

    it("should be able to return the quality of sleep", () => {
        expect(userSleep.sleepQuality).to.equal(2.2);
    });

    it("should be able to return the average hours of sleep per day", () => {
        const averageSleepPerDay = userSleep.getAverageSleepPerDay();
        expect(averageSleepPerDay).to.equal(8);
    });

    it("should be able to return the average sleep quality per day", () => {
        const averageQualitySleep = userSleep.getAverageQuality();
        expect(averageQualitySleep).to.equal(2.6);
    });

    it("should be able to return hours slept on a specific day", () => {
        const sleepForADay = userSleep.getHoursSleptPerDay("2019/06/20");
        expect(sleepForADay).to.equal(9.3);
    });

    it("should be able to return sleep quality for a specific day", () => {
        const sleepQualityForADay = userSleep.getSleepQualityPerDay("2019/06/20");
        expect(sleepQualityForADay).to.equal(1.2);
    });

    it("should be able to return the total hours slept in a week", () => {
        const sleepForAWeek = userSleep.getSleepForTheWeek("2019/06/15");
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

    it("should be able to return the total sleep quality for a week", () => {
        const sleepQualityForTheWeek = userSleep.getQualityForTheWeek("2019/06/15");
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

    it("should return average sleep quality for all users", () => {
        const allUserQuality = userSleep.getAllQuality();
        expect(allUserQuality).to.equal(2.6)
    });
});
