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

  getAverageQuality() {
    const sleepQualPerDay = this.sleepData.map(sleep => {
      return sleep.sleepQuality;
    })
    const sleepQualAvgPerDay = sleepQualPerDay.reduce((totalQuality, currentSleepQual) => {
      return totalQuality + currentSleepQual;
    }, 0)
    return Math.round(
      (sleepQualAvgPerDay / this.sleepData.length + Number.EPSILON) * 10
    ) / 10;
  };

  getHoursSleptPerDay(date) {
    let dailySleepHours = this.userSleepData.find(sleep => {
      return sleep.date === date;
    });
    return dailySleepHours.hoursSlept;
  };

  getSleepQualityPerDay(date) {
    let dailySleepQuality = this.sleepData.find(sleep => {
      return sleep.date === date;
    });
    return dailySleepQuality.sleepQuality;
  };

  getSleepForTheWeek(startDate) {
    const weekStartDate = this.userSleepData.findIndex(currentDate => {
      return currentDate.date === startDate;
    });

    const weekData = this.userSleepData.slice(weekStartDate, weekStartDate + 7).reverse();
    const weeklySleep = {
      date: [],
      hoursSlept: []
    };

    weeklySleep.date = weekData.map(startDate => startDate.date);
    weeklySleep.hoursSlept = weekData.map(startDate => startDate.hoursSlept);
    return weeklySleep;
  };

  getQualityForTheWeek(startDate) {
    const weekStartDate = this.userSleepData.findIndex(currentDate => {
      return currentDate.date === startDate;
    });

    const weekData = this.userSleepData.slice(weekStartDate, weekStartDate + 7).reverse();
    const weeklySleepQuality = {
      date: [],
      sleepQuality: []
    };

    weeklySleepQuality.date = weekData.map(startDate => startDate.date);
    weeklySleepQuality.sleepQuality = weekData.map(startDate => startDate.sleepQuality);
    return weeklySleepQuality;
  };

  getAllQuality() {
    let totalQuality = 0;
    this.sleepData.forEach(date => {
      return(totalQuality += date.sleepQuality);
    });

    const avgQuality =
    Math.round(
      (totalQuality / this.sleepData.length + Number.EPSILON) * 10
    ) / 10;
    return avgQuality;
  };
};

export default Sleep;
