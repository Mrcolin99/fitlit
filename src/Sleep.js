class Sleep{
  constructor(id, sleepData) {
    this.userID = id;
    this.date = sleepData[0].date;
    this.hoursSlept = sleepData[0].hoursSlept;
  }
}

export default Sleep;
