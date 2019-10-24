import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import {Calendar} from 'react-native-calendars';

import { createStackNavigator } from 'react-navigation';

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Calendar with selectable date and arrows</Text>
        <Calendar
          onDayPress={() => this.props.navigation.navigate('Agenda')}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
        />
        <Text style={styles.text}>Calendar with custom day component</Text>
        <Calendar
          style={[styles.calendar, {height: 300}]}
          dayComponent={({date, state}) => {
            return (<View><Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}</Text></View>);
          }}
        />
        <Text style={styles.text}>Calendar with multi-dot marking</Text>
        <Calendar
          style={styles.calendar}
          current={'2019-04-26'}
          markingType={'multi-dot'}
          markedDates={{
            '2019-05-08': {dots: [{key: 'vacation', color: 'blue', selectedDotColor: 'white'}, {key: 'massage', color: 'red', selectedDotColor: 'white'}], selected: true},
            '2019-05-09': {dots: [{key: 'vacation', color: 'blue', selectedDotColor: 'red'}, {key: 'massage', color: 'red', selectedDotColor: 'blue'}], disabled: true}
          }}
          hideArrows={false}
        />
        <Text style={styles.text}>Calendar with multi-period marking</Text>
        <Calendar
          style={styles.calendar}
          current={'2019-04-26'}
          markingType={'multi-period'}
          markedDates={{  
            '2019-05-16': {  
              periods: [  
                { startingDay: true, endingDay: false, color: '#5f9ea0' },
                { startingDay: true, endingDay: false, color: '#ffa500' },
              ]
            },
            '2019-05-17': {  
              periods: [  
                { startingDay: false, endingDay: true, color: '#5f9ea0' },
                { startingDay: false, endingDay: true, color: '#ffa500' },
                { startingDay: true, endingDay: false, color: '#f0e68c' },
              ]
            },
            '2019-05-18': {  
              periods: [  
                { startingDay: true, endingDay: true, color: '#ffa500' },
                { color: 'transparent' },
                { startingDay: false, endingDay: false, color: '#f0e68c' },
              ]
            },
          }}
          hideArrows={false}
        />
        <Text style={styles.text}>Calendar with week numbers</Text>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          showWeekNumbers
          markedDates={{[this.state.selected]: {selected: true}}}
        />
        <Text style={styles.text}>Custom calendar with custom marking type</Text>
        <Calendar
          style={styles.calendar}
          onDayLongPress={this.onDayLongPress}
          hideExtraDays
          current={'2019-03-01'}
          minDate={'2019-03-01'}
          markingType={'custom'}
          markedDates={{
            '2019-03-01': {
              customStyles: {
                container: {
                  backgroundColor: 'white',
                  elevation: 2
                },
                text: {
                  color: 'blue',
                },
              }
            },
            '2019-03-08': {selected: true},
            '2019-03-09': {
              customStyles: {
                container: {
                  backgroundColor: 'red',
                  elevation: 4,
                },
                text: {
                  color: 'white',
                },
              }
            },
            '2019-03-10': {disabled: true},
            '2019-03-14': {
              customStyles: {
                container: {
                  backgroundColor: 'green',
                },
                text: {
                  color: 'white',
                },
              },
            },
            '2019-03-15': {
              customStyles: {
                container: {
                  backgroundColor: 'black',
                  elevation: 2
                },
                text: {
                  color: 'yellow',
                },
              }
            },
            '2019-03-20': {
              customStyles: {
                container: {
                  backgroundColor: 'pink',
                  elevation: 4,
                },
                text: {
                  color: 'blue',
                },
              }
            },
            '2019-03-21': {disabled: true},
            '2019-03-28': {
              customStyles: {
                container: {
                  backgroundColor: 'green',
                },
                text: {
                  color: 'black',
                  fontWeight: 'bold'
                },
              },
            },
            '2019-03-29': {
              customStyles: {
                container: {
                  backgroundColor: 'white',
                  elevation: 2
                },
                text: {
                  color: 'blue',
                },
              }
            },
            '2019-03-30': {
              customStyles: {
                container: {
                  backgroundColor: 'violet',
                  elevation: 4,
                  borderColor: 'red',
                  borderWidth: 5,
                },
                text: {
                  marginTop: 3,
                  fontSize: 11,
                  color: 'yellow',
                },
              }
            },
            '2019-03-31': {
              customStyles: {
                container: {
                  backgroundColor: 'green',
                  borderRadius: 0,
                },
                text: {
                  color: 'white',
                },
              },
            }}}
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
