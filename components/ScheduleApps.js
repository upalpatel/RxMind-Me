import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  TextInput
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { ListItem, Avatar } from 'react-native-elements';

export default class ScheduleApps extends Component {

  constructor(props) {
    super(props);
    this.array = [
      {
        title: 'Appointment with Jaime at 10:00AM'
      },
      {
        title: 'Appointment with Cole at 3:00PM'
      },
      {
        title: 'Appointment with Amy at 6:00PM'
      },
      {
        title: 'Appointment with Mandy at 2:00PM'
      },
      {
        title: 'Appointment with Chris at 9:00AM'
      }
    ],
        this.state = {
          arrayHolder: [],
          textInput_Holder: ''
        }
  }

  componentDidMount() {
    this.setState({ arrayHolder: [...this.array] })
  }

  joinData = () => {
    this.array.push(
      {title: this.state.textInput_Holder}
    );
    this.setState({ arrayHolder: [...this.array] })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B"
        }}
      />
    );
  }

  GetItem(item) {
    Alert.alert(item);
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Hospital List </Text>
        
        <TextInput
          placeholder="enter appointment"
          onChangeText={data => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
        />

        <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.buttonContainer} >
          <Text style={styles.buttonText}> Add To List </Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.arrayHolder}
          width='100%'
          extraData={this.state.arrayHolder}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => 
            <Text style={styles.item} onPress={
              this.GetItem.bind(this, item.title)} > {item.title}
            </Text>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#ead352',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  buttonContainer: {
    height: 40,
    borderRadius: 14,
    borderWidth: 0.5,
    marginTop: 12,
    backgroundColor: '#b94128',
    justifyContent: 'center'
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#000000',
    borderRadius: 7,
    marginTop: 12
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '250'
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44
  }
});