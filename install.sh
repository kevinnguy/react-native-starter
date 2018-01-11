#!/bin/sh

read -p "Enter project name: " PROJECT_NAME

react-native init $PROJECT_NAME;

cp -iR src/. $PROJECT_NAME/

cd $PROJECT_NAME

yarn add \
moment \
react-native-config \
react-native-device-info \
react-native-version \
react-navigation \
react-redux \
redux \
redux-saga \
reselect;

yarn add --dev \
babel-eslint \
babel-preset-flow \
eslint \
eslint-config-airbnb \
eslint-plugin-flowtype \
flow-typed \
react-native-cli \
redux-logger;

echo "AppRegistry.registerComponent('$PROJECT_NAME', () => App);" >> index.js
