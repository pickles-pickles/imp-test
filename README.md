# DOCUMENTATION

## 1. Contents

---

1. [Contents](#1-contents)
2. [Link](#2-link)
3. [Design patterns](#3-design-patterns)
4. [Project decisions](#4-project-decisions)
5. [Scripts](#5-scripts)

## 2. Links

---

This app runs live on [Netlify](https://improv-test.netlify.app/)

The code can be found on [Github](https://github.com/pickles-pickles/imp-test)

## 3. Design Patterns

---

In the coding process, the following design patterns have been used:

- Separation between Container and Presentational Components
- Flux architecture for the state management
- SOLID principles modified accordingly for functions
- Separation of concerns in every level (module, function etc)

Proper error handling was performed. Fallback route was included to handle invalid URLs. Proper messages are shown on the UI, in case of rejected API call, and, in case of fulfilled API call, if there are empty response.

## 4. Project decisions

---

The following decisions were made:

1. To use Bootstrap 5 as the selected CSS library - because this is the preferred CSS library in ImprovIT
2. React was used, as I am more familiar with it and allows my to demonstrate my expertise with JS frameworks/libraries
3. Create-react-app was used, as it is an easy and fast way to bootstrap a React project. Boilerplate code was modified to properly fit the project.
4. A loader and an error message were included to handle unexpected API situations
5. Input text was sanitized to be case insensitive and trimmed by writing a proper helper
6. As a bonus feature, you can see the weather in the location of the selected user. In each accordion card trhere is a link that leads to
   a weather app of mine
7. You can view the app online on Netlify. Because of the unsafe nature of the API (http, instead https) I included a file with dummy data that is rendered in case the browser complains about the http over htttps address. This is purely for demo purposes.

## 5. Scripts

---

#### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
