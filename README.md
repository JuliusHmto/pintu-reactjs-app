# Pintu Mobile Engineer Technical Test - Part 2 (Website using React JS)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Online Demo (with Heroku)
https://pintu-reactjs-app.herokuapp.com/

# Short story on my development thought process
- I used Javascript since I've been using it since I know most of the ins and outs of it.
- State management I use `Redux` with combination between `Redux Toolkit` for react js and regular `Redux` (actionCreators, actionTypes, etc) for Native App
- I assume it's better off to use what we know well to reduce confusion (But I will quickly adapt using Typescript and react-query if it is mandatory for work).

# Decisions & Tradeoffs
- [Supported Currencies](https://api.pintu.co.id/v2/wallet/supportedCurrencies) has 115 objects (115th was Rupiah token) while [Price Changes](https://api.pintu.co.id/v2/trade/price-changes) has 114 objects. This meant I had to remove Rupiah token from the array for easier merging.
- I had trouble with showing the images since it's SVG. I've searched through Stack Overflow to find solutions but I lack time due to time crunch.

# Project Assumptions

- Yearly change in [Price API](https://api.pintu.co.id/v2/trade/price-changes) was set to null, so I removed the yearly column on the website.
- For React JS app, I'm using [Redux Toolkit](https://redux.js.org/introduction/why-rtk-is-redux-today) to show a simpler way to use Redux without boilerplate-y code as said in the documentation.
- For [React Native app (Android)](https://github.com/JuliusHmto/pintu-native-app) I'm using regular Redux with actionCreators and actionTypes. 

## Project Documentation
I've managed the file managing based on my previous daily routine while developing the main app:
- `functions` place to put functions and fetch API.
- `pages` place to put functions and variables, mapstateToProps, and mapDispatchtoProps for the specific component.
- `components` place to put HTML code & css code (either inline or modular).
- `css` place to put individual css modules for ease of reusability.
- `images` place to put images in use. I handpicked images since I really want to replicate the app.
- `reducers` place to put specific state management variables to be used throughout the project.
  - `cryptoSlice.js` state variable for fetch [Supported Currencies](https://api.pintu.co.id/v2/wallet/supportedCurrencies)
  - `priceSlice.js` state variable for fetch [Price Changes](https://api.pintu.co.id/v2/trade/price-changes)
  - `errorSlice.js` state variable for errors either from cryptoSlice or priceSlice (just in case).

## How to Run

- ### `npm install`
- ### `npm start`
