import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';


export default class MenuScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
              <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Calendars')}>
                <Text style={styles.buttonText}> Calendars </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Option')}>
                <Text style={styles.buttonText}> Options </Text>
              </TouchableOpacity>

              <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#9b59b6' title="Add Reminder" onPress={() => this.props.navigation.navigate('ReminderHome')}>
                  <Icon name="ios-create" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => this.props.navigation.navigate('Agenda')}>
                  <Icon name="ios-done-all" style={styles.actionButtonIcon} />
                </ActionButton.Item>
              </ActionButton>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});