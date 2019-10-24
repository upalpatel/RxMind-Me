import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class AddReminder extends Component {
  state = {
    isDateTimePickerVisible: false,
    selectedDate: ""
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    this.setState({ selectedDate: date.toString() });
    this._hideDateTimePicker();
  };

  render() {
    const { isDateTimePickerVisible, selectedDate } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.textfields}>
            <TextInput style={styles.input}
                placeholder = "Add Reminder Here"
                returnKeyType = "go"
                keyboardType = "email-address"
                autoCapitalize = "none"
                autoCorrect = {true}
            />
        </View>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <View style={styles.button}>
            <Text style={styles.buttonText}> Show Date Picker </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>{selectedDate}</Text>

        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#2980b9",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  text: {
    marginVertical: 10
  }
});
