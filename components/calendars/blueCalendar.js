import React, { Component, Children } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import { Calendar, CalendarList} from 'react-native-calendars';

export default class BlueCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Personalized Calendar</Text>
          <Calendar
            style={styles.calendar}
            current={'2019-04-26'}
            minDate={'2024-05-10'}
            displayLoadingIndicator
            markingType={'period'}
            theme={{
              calendarBackground: '#0072ff',
              textSectionTitleColor: 'white',
              dayTextColor: 'red',
              todayTextColor: 'white',
              selectedDayTextColor: 'white',
              monthTextColor: 'white',
              selectedDayBackgroundColor: '#0072ff',
              arrowColor: 'white',
              // textDisabledColor: 'red',
              'stylesheet.calendar.header': {
                week: {
                  marginTop: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }
              }
            }}
            hideArrows={false}
          />
      </ScrollView>
    );
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});