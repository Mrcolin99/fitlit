# FITLIT!

Group Members -
- Dana Chapman (They/She)
- Jeffrey Cook (He/Him)
- Colin Ciervo (He/Him)

[Link to Turing's FitLit Project Spec](https://frontend.turing.edu/projects/Fitlit-part-one.html)

[Link to Group's Daily Retro Minutes](https://docs.google.com/document/d/1GyWFpG0hR6I5k_obBsS_9of9AtT1RyX9Q5Hht21H0o8/edit?usp=sharing)

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

## Celebrations & Challenges

#### Celebrations

#### Challenges

### Credits

[Link to Unsplash Background Image](https://unsplash.com/photos/F2qh3yjz6Jk)