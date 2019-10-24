
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import Card from 'react-native-paper';

import Splash from './Splash';
import AppHome from './components/LoginPage';


export default class App extends React.Component {
  render() {
    return (
      <AppHome />
    );
  }
}

AppRegistry.registerComponent('App', () => App);