import sleepData from "./data/sleep-data";

class Sleep{
  constructor(id, sleepData) {
    this.userID = id;
    this.userSleepData = this.getUserSleepData(sleepData);
    this.date = sleepData[0].date;
    this.hoursSlept = sleepData[0].hoursSlept;
    this.sleepQuality = sleepData[0].sleepQuality;
    this.sleepData = sleepData;
  }

  getUserSleepData(sleepData) {
    const userSleep = sleepData.filter(userSleepData => {
      if(userSleepData.userID === this.userID) {
        return userSleepData;
      }
    });
    userSleep.reverse();
    return userSleep;
  };

  getAverageSleepPerDay() {
    const sleepPerDay = this.sleepData.map(sleep => {
      return sleep.hoursSlept;
    })
    const sleepAvgPerDay = sleepPerDay.reduce((totalSleep, currentSleepHours) => {
      return totalSleep + currentSleepHours
    }, 0)
    return Math.round(sleepAvgPerDay / this.sleepData.length);
  };

};

export default Sleep;
