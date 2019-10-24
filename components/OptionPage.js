import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class OptionScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
              <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Eye')}>
                <Text style={styles.buttonText}> Light Dark Theme </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Color')}>
                <Text style={styles.buttonText}> Color Personalization </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Hospitals')}>
                <Text style={styles.buttonText}> Hospitals </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('NoteTaker')}>
                <Text style={styles.buttonText}> Note Taker </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('QRScanner')}>
                <Text style={styles.buttonText}> QR Code Scanner </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Language')}>
                <Text style={styles.buttonText}> Language Picker </Text>
              </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#3498db',
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
    backgroundColor: 'steelblue',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
});