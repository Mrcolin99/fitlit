// Imports
import './css/styles.css';
import './images/turing-logo.png';
import UserRepository from './UserRepository';
import User from './User';
import apiCalls from './apiCalls';
import Hydration from './Hydration';
import hydrationData from './data/hydration-data';
import Sleep from './Sleep';

// Query Selectors
const userName = document.querySelector("#user-info-name");
const userAddress = document.querySelector("#user-info-address");
const userEmail = document.querySelector("#user-info-email");
const userStride = document.querySelector("#user-info-stride");
const userFriends = document.querySelector("#user-info-friends");
const userWelcome = document.querySelector("#nav-user-name");
const userStepsAverage = document.querySelector("#user-step-average");
const overallStepsAverage = document.querySelector("#step-goal-average");
const userWaterDaily = document.querySelector("#user-hydration-daily");
const userWaterWeekly = document.querySelector("#user-hydration-weekly");
const userSleptDaily = document.querySelector("#user-slept-daily");
const userQualityDaily = document.querySelector("#user-quality-daily");
const userSleptWeekly = document.querySelector("#user-slept-weekly");
const userQualityWeekly = document.querySelector("#user-quality-weekly");
const userSleptAllTime = document.querySelector("#user-slept-time");
const userQualityAllTime = document.querySelector("#user-quality-time");

// Instances
let user, userRepo, hydration, sleep;

// Functions
const getRandomIndex = array => {
  return Math.floor(Math.random() * array.length + 1);
};

const fetchApiCalls = userID => {
  apiCalls.fetchData().then(data => {
    let userData = data[0].userData;
    let hydrationData = data[1].hydrationData;
    let sleepData = data[2].sleepData;
    let id;

    if (userID === "load") {
      id = getRandomIndex(userData);
    } else {
      id = userID;
    }

    userRepo = new UserRepository(userData);
    user = new User(userRepo.findUsersData(id));
    hydration = new Hydration(user.id, hydrationData);
    sleep = new Sleep(user.id, sleepData);
    
    loadHandler();
  });
};

function loadHandler() {
  displayUserCard();
  showFirstName();
  compareStepGoal();
  waterForTheDay();
  waterForTheWeek();
  showDailyHoursSlept();
  showDailyQuality();
  showWeeklyHoursSlept();
  showWeeklyQuality();
  showAllTimeHoursSlept();
  showAllTimeQuality();
};

function displayUserCard() {
  userName.innerHTML = `Name: ${user.name}`;
  userAddress.innerHTML = `Address: ${user.address}`;
  userEmail.innerHTML = `Email: ${user.email}`;
  userStride.innerHTML = `Stride: ${user.strideLength}`;
  userFriends.innerHTML = `Friends: ${user.friends}`;
};

function showFirstName() {
  userWelcome.innerHTML = `Welcome ${user.returnFirstName()}`;
};

function compareStepGoal() {
  userStepsAverage.innerHTML = `Daily Step Goal: ${user.dailyStepGoal}`;
  overallStepsAverage.innerHTML = `Overall Step Goal: ${userRepo.avgStepGoal()}`;
};

function waterForTheDay() {
  hydration.setUserHydrateData(hydrationData)
  const waterToday = hydration.returnOuncesByDate(hydration.date);
  userWaterDaily.innerHTML = `Todays Hydration: ${waterToday}oz.`;
};

function waterForTheWeek() {
  const weeklyIntake = hydration.returnOuncesByWeek(hydration.date);
  userWaterWeekly.innerHTML = 'Weekly Intake: <br/>';
  weeklyIntake.date.forEach((value, i) => {
    userWaterWeekly.innerHTML += `Date: ${value}, Amount: ${weeklyIntake.numOunces[i]}oz. <br/>`;
  });
};

function showDailyHoursSlept() {
  let dailyHours = sleep.getHoursSleptPerDay(sleep.date);
  userSleptDaily.innerHTML = `Today's Hours Slept: ${dailyHours}`;
};

function showDailyQuality() {
  let dailyQuality = sleep.getSleepQualityPerDay(sleep.date);
  userQualityDaily.innerHTML = `Today's Sleep Quality: ${dailyQuality}`;
};

function showWeeklyHoursSlept() {
  const weeklySleep = sleep.getSleepForTheWeek(sleep.date);
  userSleptWeekly.innerHTML = `This Week's Hours Slept: <br/>`;
  weeklySleep.date.forEach((value, i) => {
    userSleptWeekly.innerHTML += `Date: ${value}, Hours: ${weeklySleep.hoursSlept[i]} <br/>`;
  });
};

function showWeeklyQuality() {
  const weeklySleepQuality = sleep.getQualityForTheWeek(sleep.date);
  userQualityWeekly.innerHTML = `This Week's Sleep Quality: <br/>`;
  weeklySleepQuality.date.forEach((value, i) => {
    userQualityWeekly.innerHTML += `Date: ${value}, Quality: ${weeklySleepQuality.sleepQuality[i]} <br/>`;
  });
};

function showAllTimeHoursSlept() {
  const allTimeHours = sleep.getAllHours();
  userSleptAllTime.innerHTML = `All Times Hours Slept: ${allTimeHours}`;
};

function showAllTimeQuality() {
  const allTimeQuality = sleep.getAllQuality();
  userQualityAllTime.innerHTML = `All Time Sleep Quality: ${allTimeQuality}`;
};

// Event Listeners
window.addEventListener("load", fetchApiCalls("load"));