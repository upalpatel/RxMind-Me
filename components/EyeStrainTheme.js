import React, { Component, Children } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import { Calendar, CalendarList} from 'react-native-calendars';

export default class EyeStrainTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Calendar for eye strain</Text>
          <Calendar
            style={styles.calendar}
            current={'2019-04-26'}
            minDate={'2024-05-10'}
            displayLoadingIndicator
            markingType={'period'}
            theme={{
              calendarBackground: '#333248',
              textSectionTitleColor: 'white',
              dayTextColor: 'red',
              todayTextColor: 'white',
              selectedDayTextColor: 'white',
              monthTextColor: 'white',
              selectedDayBackgroundColor: '#333248',
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
/*
import ThemeProvider from './LightDarkTheme/ThemeProvider';
import themeLight from './LightDarkTheme/theme-light';
import themeDark from './LightDarkTheme/theme-dark';
import Button from './LightDarkTheme/Button';
import { themes } from './LightDarkTheme/Colors';

export let theme = themes.light;

export default class EyeStrainTheme extends Component {
  constructor(props) {
    super(props)
    this.state = { appTheme: themes.light };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    theme = this.state.appTheme === themes.light ? themes.dark : themes.light;
    this.setState({ appTheme: theme });

  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <View style={styles.container}>
          <CalendarList theme={this.state.appTheme}>
            current={'2019-04-26'}
            pastScrollRange={24}
            futureScrollRange={24}
            horizontal
            pagingEnabled
            style={{borderBottomWidth: 1, borderBottomColor: 'black'}}
          </CalendarList>
          <Button onPress={this.handlePress}>Change Theme</Button>
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
*/