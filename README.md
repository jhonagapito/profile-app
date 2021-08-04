# Profile-App

This project is an examination for a ReactJs developer position.

The requirements are as follows:

ABC Company plan to have a CRM application to be made from the scratch. They have conducted planing and meeting for all the information needed for the said application and come with the business requirements below.

Business Requirements:

1. Login Page
2. Navigation Menu
3. Display Members Information

Tasks:

1. Create Web Application Design for Login Page with submit button and add company logo.
2. Upon login submission, redirect the user to the index/home page where it has a navigation menu as mentioned below.
   a. Home
   b. Profile
   c. Cases
   d. Campaign
   e. Reports
   f. Settings
3. Create atleast a profile Menu clickable and display the information below within the main layout.
   a. FirstName
   b. LastName
   c. Gender
   d. Birth Date
   e. Country
4. Document your code on what technology you used.

### Technology Stack

1. Created a reactJS application using npx create-react-app with typescript template
2. Implemented a routing using the react-router-dom to navigate between login page and the dashboard and other pages.
3. Upon login, the app will write a token in localStorage to simulate successful API login and clears the localStorage upon logout.
4. The user will not be able to access the other pages if not logged in due to the ProtectedRoute component implemented to safeguard these routes.
5. Bootstrap 5 is also implemented for the styling.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
