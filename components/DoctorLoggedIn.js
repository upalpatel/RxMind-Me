import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class DoctorLoggedIn extends Component {

  render() {
    return (
      <View style={styles.container}>
              <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Appointments')}>
                <Text style={styles.buttonText}> My Appointments </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Patients')}>
                <Text style={styles.buttonText}> My Patients </Text>
              </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#ead352',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  buttonText: {
    paddingLeft: 20,
    paddingTop: 3,
    textAlign: 'left',
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 18
  },
  buttonContainer: {
    height: 50,
    borderRadius: 50,
    borderWidth: 0.5,
    backgroundColor: '#b94128',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
});