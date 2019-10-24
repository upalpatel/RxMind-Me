import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from './components/LoginPage';

export class Splash extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.title}> RxMind-Me </Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.subtitle}> Powered by React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: { 
    backgroundColor: '#3498db', 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
    },
    title: {
      color: 'white',
      fontSize: 35,
      fontWeight: 'bold'
    },
    subtitle: {
      color: 'white',
      fontWeight: 'lighter'
    },
    titleWrapper: {
      justifyContent: 'center',
      flex: 1
    }
});