# FITLIT!

We are students at Turing School of Software & Design, and this is Part One of our group project for our second inning of the program.

*Group Members*
- Dana Chapman (They/She)
- Jeffrey Cook (He/Him)
- Colin Ciervo (He/Him)

With this project we are creating a wellness tracker called **FitLit** that shares a user's account information, their step goals, hydration intake, and sleep statistics. Our major foci were implementing ES6 classes that communicate with one another, utilizing newly learned object and array prototype methods to perform data manipulation, implementing test suites to ensure Class functionality, and using network requests via `.fetch()` for the first time, and more.

Aside from implementation of Webpack from the starter repo we forked - [link to that repo here](https://github.com/turingschool-examples/fitlit-starter-kit) - and an initial data file to help us create the User and UserRepository files, we created everything ourselves by utlizing our personal strengths and everything we've learned in Turing thus far.

[Link to Turing's FitLit Project Spec](https://frontend.turing.edu/projects/Fitlit-part-one.html)

[Link to Group's Daily Retro Minutes](https://docs.google.com/document/d/1GyWFpG0hR6I5k_obBsS_9of9AtT1RyX9Q5Hht21H0o8/edit?usp=sharing)

![gif of GitLit web page scrolling up and down](https://media.giphy.com/media/rI7LTREut57wlWZ0St/giphy.gif)

## Set-up for your Local Machine

1. Clone down to your local machine
2. Run `npm start` in your CLI
3. Visit `localhost:8080` linked in the CLI to view the app

## Technologies Used

1. HTML
2. CSS
3. JavaScript
4. Testing: Mocha/Chai

## Code Architecture

The *src* folder contains:

- Classes utilized in this project: `UserRepository.js`, `User.js`, `Hydration.js`, and `Sleep.js`
- `apiCalls.js` which holds our `.fetch()` and `Promise.all()`
- `scripts.js` where all of our DOM manipulation is held

The *test* folder holds all of our accompanying test-files for our Classes.

The *data* folder contains our sample datasets for our test-files to pull from.

Webpack is kept in the *dist* folder along with our `index.html`.

## Future Features

1. Implementing `chart.js` for future graphical representations of user data.
2. Either adding a dropdown menu or a filter-user button to manually choose a user's information to view on the page, instead of needing to reload the entire page for the changes to take effect.

## Celebrations & Challenges

#### Celebrations

Utilizing `.fetch()` successfully along with `Promise.all()` and making our API calls dynamic with interpolation were an overall success and a large victory for our conceptual understanding of network requests. This was a difficult concept to understand and even more so to implement, but working together we got it working and we all checked-in with one another to make sure we all had an understanding before we moved forward with the rest of the project. The experience with this iteration was an overall success in many venues!

#### Challenges

Working with/around Webpack gave us a little hiccup in understanding how the repository was set up -- but after clarification from our PM we were able to undo those hiccups and move forward with a functional and successfully compiling page. 

Another challenge was implementing the Hydration method to display on the DOM the last week's water drank in ozs per day, where we went through MANY possible iterations of that function and had one of our mentors come in and help guide us in the right direction -- we were almost there on our own, but a fresh set of eyes helped us to achieve what we were ultimately looking for. Thank you Alia!

### Credits

[Link to Unsplash Background Image](https://unsplash.com/photos/F2qh3yjz6Jk)