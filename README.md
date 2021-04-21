# Pandacurr.

Welcome to Pandacurr. source code! Pandacurr. is a web application for exchange Indonesian or European currency to foreign currency.

## Getting started

To start this web application, all you had to do you must have **npm** or **yarn** package manager to install packages for this project.

**BE SURE** to check the git branch as **main**, you can type `git checkout main` on terminal.

After that, make sure to run `npm install` or `yarn install` to install all packages and dependencies for this project.

## Run the Application

To run the project, just type command `npm run start` or `yarn start` in terminal.

>p.s.: Remember to make .env files and fill the credential in there, for this time, I'll just leave the .env there.

## Build the Application

to build the project, you need to type command `npm run build` or `yarn build` in terminal, wait for a moment, and then everything will be ready on `/build` folder

## Routes

I will list the routes to make you easier to navigate.

| Route       | Name                          |
|-------------|-------------------------------|
| `/`         | Home Page                     |
| `/about`    | About Page                    |
| `/exchange` | Exchange Currency Page        |
| `/404`      | Error 404 Page not found Page |

## What API that I used?

I used:
  - `openexchangerates.org` for currency name list, 
  - `exchangeratesapi` for EUR currency rate,
  - `my-json-server.typicode.com/Ralfarios/mock_idr_currency` for IDR currency rate data mock since `exchangeratesapi` has freemium limitation.

## Techstack?

I used:
  - `Typescript`
  - `React`
  - `React Helmet Async` for SEO
  - `React Loading Skeleton` for loading component
  - `React Router DOM` for routing
  - `React UseAnimations` for micro animation
  - `Redux`, `React Redux` and `Redux Thunk` for state management
  - `Axios` for fetching API
  - `Bootstrap` and `Popper` for styling
  - `dotenv` for environment variables
  - `node-sass` for CSS preprocessor compiler

## Any Question?

Feel free to ask me by email `muamaralfarabi@gmail.com`
