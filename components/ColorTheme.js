import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class ColorTheme extends Component {

  render() {
    return (
      <View style={styles.container}>
              <TouchableOpacity style={styles.blueContainer} onPress = {() => this.props.navigation.navigate('BlueC')}>
                <Text style={styles.buttonText}> BLUE </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.greenContainer} onPress = {() => this.props.navigation.navigate('GreenC')}>
                <Text style={styles.buttonText}> GREEN </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.orangeContainer} onPress = {() => this.props.navigation.navigate('OrangeC')}>
                <Text style={styles.buttonText}> ORANGE </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.redContainer} onPress = {() => this.props.navigation.navigate('RedC')}>
                <Text style={styles.buttonText}> RED </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.yellowContainer} onPress = {() => this.props.navigation.navigate('YellowC')}>
                <Text style={styles.buttonText}> YELLOW </Text>
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
    color: 'black',
    fontWeight: '500',
    fontSize: 18
  },
  blueContainer: {
    height: 50,
    borderRadius: 50,
    borderWidth: 0.5,
    backgroundColor: '#0072ff',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  greenContainer: {
    height: 50,
    borderRadius: 50,
    borderWidth: 0.5,
    backgroundColor: '#2aff00',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  orangeContainer: {
    height: 50,
    borderRadius: 50,
    borderWidth: 0.5,
    backgroundColor: '#ff8c00',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  redContainer: {
    height: 50,
    borderRadius: 50,
    borderWidth: 0.5,
    backgroundColor: '#ff0000',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  yellowContainer: {
    height: 50,
    borderRadius: 50,
    borderWidth: 0.5,
    backgroundColor: '#fffa00',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
});