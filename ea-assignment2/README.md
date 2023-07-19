# Experis Academy Assignment 2 - Lost in Translation

## Description
This project was created as part of an Accelerated Learning course at Noroff. The goal of the project was to practice React.

The app is a translation app that takes in user input and translates it to american sign language.

The app is split into three main parts: The Login Page, Translation Page and the Profile Page

- The Login Page
  * Here the user can enter their desired username. The username is checked against the API that contains users and translation data.
  * If the username is not found in the API a new user is created. Whichever the case the user gets redirected further to the Translation Page.
  * The username and ID is also stored in the browser session storage.
- The Translation Page
  * Translation description
- The Profile Page
  * Here the user can see their latest ten translation inputs. Not the actual translation but the input that was used to create the translation.
  * The user can also clear out their translation data with a button click. This starts a PATCH request that empties out the translations array in the API.
- Nav bar
  * A nav bar is visible only once the user is logged in.
  * The user can navigate between the Translation Page and the Profile Page as well as Logout. Logging out clears out the browser session storage and redirects the user back to the Login Page.



## How to use

Using Visual Studio Code open the folder the project files are located in

Open the terminal by going to Terminal->New Terminal or by using the command "Ctrl+Shift+Ö" (This works with a swedish keyboard)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Prerequisites

Visual Studio Code

Node.js

## Authors
Annika Zarske

David Petersen 🙃

