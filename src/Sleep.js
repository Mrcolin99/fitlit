import sleepData from "./data/sleep-data";

class Sleep{
  constructor(id, sleepData) {
    this.userID = id;
    this.userSleepData = this.getUserSleepData(sleepData);
    this.date = sleepData[0].date;
    this.hoursSlept = sleepData[0].hoursSlept;
    this.sleepQuality = sleepData[0].sleepQuality;
    this.data = sleepData;
  };

  getUserSleepData(sleepData) {
    const userSleep = sleepData.filter(userSleepData => {
      if(userSleepData.userID === this.userID) {
        return userSleepData;
      }
    });

    return userSleep;
  };

  getAverageSleepPerDay() {
    const sleepPerDay = this.data.map(sleep => {
      return sleep.hoursSlept;
    });

    const sleepAvgPerDay = sleepPerDay.reduce((totalSleep, currentSleepHours) => {
      return totalSleep + currentSleepHours;
    }, 0);

    return Math.round(sleepAvgPerDay / this.data.length);
  };

  getAverageQuality() {
    const sleepQualPerDay = this.data.map(sleep => {
      return sleep.sleepQuality;
    });

    const sleepQualAvgPerDay = sleepQualPerDay.reduce((totalQuality, currentSleepQual) => {
      return totalQuality + currentSleepQual;
    }, 0);

    return Math.round(
      (sleepQualAvgPerDay / this.data.length + Number.EPSILON) * 10
    ) / 10;
  };

  getHoursSleptPerDay(date) {
    let dailySleepHours = this.userSleepData.find(sleep => {
      return sleep.date === date;
    });

    return dailySleepHours.hoursSlept;
  };

  getSleepQualityPerDay(date) {
    let dailySleepQuality = this.userSleepData.find(sleep => {
      return sleep.date === date;
    });
    
    return dailySleepQuality.sleepQuality;
  };

  getSleepForTheWeek(date) {
    const weekStartDate = this.userSleepData.findIndex(currentDate => {
      return currentDate.date === date;
    });

    const weekData = this.userSleepData.slice(weekStartDate, weekStartDate + 7);
    const weeklySleep = {
      date: [],
      hoursSlept: []
    };

    weeklySleep.date = weekData.map(date => date.date);
    weeklySleep.hoursSlept = weekData.map(date => date.hoursSlept);
    return weeklySleep;
  };

  getQualityForTheWeek(startDate) {
    const weekStartDate = this.userSleepData.findIndex(currentDate => {
      return currentDate.date === startDate;
    });

    const weekData = this.userSleepData.slice(weekStartDate, weekStartDate + 7);
    const weeklySleepQuality = {
      date: [],
      sleepQuality: []
    };

    weeklySleepQuality.date = weekData.map(startDate => startDate.date);
    weeklySleepQuality.sleepQuality = weekData.map(startDate => startDate.sleepQuality);
    return weeklySleepQuality;
  };

  getAllHours() {
    let totalHours = 0;
    this.userSleepData.forEach(date => {
      return(totalHours += date.hoursSlept);
    });

    const avgHours =
    Math.round(
      (totalHours / this.userSleepData.length + Number.EPSILON) * 10
    ) / 10;
    return avgHours;
  };

  getAllQuality() {
    let totalQuality = 0;
    this.userSleepData.forEach(date => {
      return(totalQuality += date.sleepQuality);
    });

    const avgQuality =
    Math.round(
      (totalQuality / this.userSleepData.length + Number.EPSILON) * 10
    ) / 10;
    return avgQuality;
  };
};

export default Sleep;
