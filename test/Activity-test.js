import { expect } from "chai";
//import Activity from "../src/Activity";
//import User from "../src/User";
const activityData = require("../src/data/activity-data");

describe("Activity", () => {
  let user1Activity;
  let user2Activity;
  let user1;
  let user2;
  beforeEach(() => {
    user1Activity = new Activity(1, sampleActivityData);
    user2Activity = new Activity(2, sampleActivityData);
    user1 = new User({
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8]
    });
    user2 = new User({
      id: 2,
      name: "Jarvis Considine",
      address: "30086 Kathryn Port, Ciceroland NE 07273",
      email: "Dimitri.Bechtelar11@gmail.com",
      strideLength: 4.5,
      dailyStepGoal: 5000,
      friends: [9, 18, 24, 19]
    });
  });

  it.skip("should be a function", () => {
    expect(Activity).to.be.a("function");
  });

  it.skip("should be an instance of Activity", () => {
    expect(user1Activity).to.be.an.instanceof(Activity);
    expect(user2Activity).to.be.an.instanceof(Activity);
  });

  it.skip("should store a user id", () => {
    expect(user1Activity.userID).to.equal(1);
    expect(user2Activity.userID).to.equal(2);
  });

  it.skip("should store a date", () => {
    expect(user1Activity.date).to.equal("2019/06/28");
    expect(user2Activity.date).to.equal("2019/06/28");
  });

  it.skip("should store number of steps", () => {
    expect(user1Activity.numSteps).to.equal(10517);
    expect(user2Activity.numSteps).to.equal(12555);
  });

  it.skip("should store minutes active", () => {
    expect(user1Activity.minutesActive).to.equal(169);
    expect(user2Activity.minutesActive).to.equal(193);
  });

  it.skip("should store flights of stairs climbed", () => {
    expect(user1Activity.flightsOfStairs).to.equal(6);
    expect(user2Activity.flightsOfStairs).to.equal(45);
  });

  it.skip("should return how many miles a user has walked based on their number of steps", () => {
    const milesWalkedPerDay1 = user1Activity.getDailyMilesWalked(user1);
    const milesWalkedPerDay2 = user2Activity.getDailyMilesWalked(user2);
    expect(milesWalkedPerDay1).to.equal(8.6);
    expect(milesWalkedPerDay2).to.equal(10.7);
  });

  it.skip("should return how many minutes a user was active for a given day", () => {
    const minutesActivePerDay1 = user1Activity.getMinutesActivePerDay(
      "2019/06/18"
    );
    const minutesActivePerDay2 = user2Activity.getMinutesActivePerDay(
      "2019/06/18"
    );
    expect(minutesActivePerDay1).to.equal(165);
    expect(minutesActivePerDay2).to.equal(181);
  });

  it.skip("should return the average amount of minutes a user was active for a given week", () => {
    const avgMinutesActivePerWeek1 = user1Activity.getAvgMinutesActivePerWeek(
      "2019/06/22"
    );
    const avgMinutesActivePerWeek2 = user2Activity.getAvgMinutesActivePerWeek(
      "2019/06/22"
    );
    expect(avgMinutesActivePerWeek1).to.equal(168.1);
    expect(avgMinutesActivePerWeek2).to.equal(154.4);
  });

  it.skip("should determine if a user reached their step goal for a given day", () => {
    const stepGoalStatsPerDay1 = user1Activity.getStatsOfDailyStepGoal(
      "2019/06/16",
      user1
    );
    const stepGoalStatsPerDay2 = user2Activity.getStatsOfDailyStepGoal(
      "2019/06/17",
      user2
    );
    expect(stepGoalStatsPerDay1).to.equal(false);
    expect(stepGoalStatsPerDay2).to.equal(true);
  });

  it.skip("should find the days where a user exceeded their step goal", () => {
    const stepGoalExceededPerDay1 = user1Activity.getDaysStepGoalExceeded(
      user1
    );
    const stepGoalExceededPerDay2 = user2Activity.getDaysStepGoalExceeded(
      user2
    );
    expect(stepGoalExceededPerDay1).to.deep.equal([
      "2019/06/28",
      "2019/06/23",
      "2019/06/22",
      "2019/06/20",
      "2019/06/17"
    ]);
    expect(stepGoalExceededPerDay2).to.deep.equal([
      "2019/06/28",
      "2019/06/26",
      "2019/06/25",
      "2019/06/24",
      "2019/06/21",
      "2019/06/20",
      "2019/06/19",
      "2019/06/17"
    ]);
  });

  it.skip("should find all time stair climbing record for a given user", () => {
    const allTimeStairClimbRecord1 = user1Activity.getAllTimeStairClimbRecord();
    const allTimeStairClimbRecord2 = user2Activity.getAllTimeStairClimbRecord();
    expect(allTimeStairClimbRecord1).to.equal(39);
    expect(allTimeStairClimbRecord2).to.equal(45);
  });

  it.skip("should return number of steps per day over the course of a given week", () => {
    const numStepsPerDayPerWeek1 = user1Activity.getNumStepsPerDayPerWeek(
      "2019/06/22"
    );
    const numsStepsPerDayPerWeek2 = user2Activity.getNumStepsPerDayPerWeek(
      "2019/06/22"
    );

    expect(numStepsPerDayPerWeek1).to.deep.equal({
      date: [
        "2019/06/16",
        "2019/06/17",
        "2019/06/18",
        "2019/06/19",
        "2019/06/20",
        "2019/06/21",
        "2019/06/22"
      ],
      numSteps: [6637, 14329, 4419, 8429, 14478, 6760, 10289]
    });
    expect(numsStepsPerDayPerWeek2).to.deep.equal({
      date: [
        "2019/06/16",
        "2019/06/17",
        "2019/06/18",
        "2019/06/19",
        "2019/06/20",
        "2019/06/21",
        "2019/06/22"
      ],
      numSteps: [4112, 13750, 4662, 9858, 8153, 10225, 3605]
    });
  });

  it.skip("should return minutes active per day over the course of a given week", () => {
    const minsActivePerDayPerWeek1 = user1Activity.returnActiveMinsPerDayPerWeek(
      "2019/06/22"
    );
    const minsActivePerDayPerWeek2 = user2Activity.returnActiveMinsPerDayPerWeek(
      "2019/06/22"
    );

    expect(minsActivePerDayPerWeek1).to.deep.equal({
      date: [
        "2019/06/16",
        "2019/06/17",
        "2019/06/18",
        "2019/06/19",
        "2019/06/20",
        "2019/06/21",
        "2019/06/22"
      ],
      minutesActive: [175, 168, 165, 275, 140, 135, 119]
    });
    expect(minsActivePerDayPerWeek2).to.deep.equal({
      date: [
        "2019/06/16",
        "2019/06/17",
        "2019/06/18",
        "2019/06/19",
        "2019/06/20",
        "2019/06/21",
        "2019/06/22"
      ],
      minutesActive: [220, 65, 181, 243, 74, 174, 124]
    });
  });

  it.skip("should return daily flights of stairs climbed over the course of a given week", () => {
    const flightsClimbedPerDayPerWeek1 = user1Activity.getFlightsOfStairsClimbedPerDayPerWeek(
      "2019/06/22"
    );
    const flightsClimbedPerDayPerWeek2 = user2Activity.getFlightsOfStairsClimbedPerDayPerWeek(
      "2019/06/22"
    );

    expect(flightsClimbedPerDayPerWeek1).to.deep.equal({
      date: [
        "2019/06/16",
        "2019/06/17",
        "2019/06/18",
        "2019/06/19",
        "2019/06/20",
        "2019/06/21",
        "2019/06/22"
      ],
      flightsOfStairs: [36, 18, 33, 2, 12, 6, 6]
    });
    expect(flightsClimbedPerDayPerWeek2).to.deep.equal({
      date: [
        "2019/06/16",
        "2019/06/17",
        "2019/06/18",
        "2019/06/19",
        "2019/06/20",
        "2019/06/21",
        "2019/06/22"
      ],
      flightsOfStairs: [37, 4, 31, 44, 10, 26, 31]
    });
  });

  it.skip("should find average number of stairs climbed for all user's on a given day", () => {
    const avgStairsClimbedPerDay = user1Activity.getAvgActivityDataAllUsers(
      "2019/06/16"
    );
    const avgStairsClimbedPerDay2 = user2Activity.getAvgActivityDataAllUsers(
      "2019/06/17"
    );
    expect(avgStairsClimbedPerDay.avgFlightsAllUsers).to.equal(36.5);
    expect(avgStairsClimbedPerDay2.avgFlightsAllUsers).to.equal(11);
  });

  it.skip("should find average steps taken for all user's on a given day", () => {
    const avgStepsTakenPerDay1 = user1Activity.getAvgActivityDataAllUsers(
      "2019/06/16"
    );
    const avgStepsTakenPerDay2 = user2Activity.getAvgActivityDataAllUsers(
      "2019/06/17"
    );
    expect(avgStepsTakenPerDay1.avgStepsAllUsers).to.equal(5374.5);
    expect(avgStepsTakenPerDay2.avgStepsAllUsers).to.equal(14039.5);
  });

  it.skip("should find average minutes active for all user's on a given day", () => {
    const avgMinutesActivePerDay1 = user1Activity.getAvgActivityDataAllUsers(
      "2019/06/16"
    );
    const avgMinutesActivePerDay2 = user2Activity.getAvgActivityDataAllUsers(
      "2019/06/17"
    );
    expect(avgMinutesActivePerDay1.avgMinsActiveAllUsers).to.equal(197.5);
    expect(avgMinutesActivePerDay2.avgMinsActiveAllUsers).to.equal(116.5);
  });
});
