import React, { Component } from "react";
import {
  AsyncStorage,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Switch,
  Image,
  Dimensions,
  Button,
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import DismissKeyboard from "dismissKeyboard";
import KeyboardSpacer from "react-native-keyboard-spacer";

import Modal from "react-native-simple-modal";
import Icon from "react-native-vector-icons/Ionicons";
import NavIcon from "react-native-vector-icons/MaterialCommunityIcons";
import NotifyIcon from "react-native-vector-icons/MaterialIcons";
import ActionButton from "react-native-action-button";

import Moment from "moment";
import MomentTZ from "moment-timezone";

import ReminderHomePage from './ReminderHomePage';

import { InputWithButton } from "../components/TextInput";

import DatePicker from "../components/DateTimePicker/index";
import DateTimeView from "../components/DateTimeView/index";
import RepeatSwitchView from "../components/RepeatSwitchView/index";
import RepeatInterval from "../components/RepeatInterval/index";
import ModalButton from "../components/Modal/ModalButton";

import { Permissions, Notifications } from "expo";
let NOTIFICATION_KEY = "^notifications$";

const newNotification = {
  title: "RxMind-Me",
  body: "",
  ios: {
    sound: true
  },
  android: {
    sound: true,
    priority: "high",
    sticky: false,
    vibrate: true
  }
};

class AddReminderPage extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const headerTitle =
      params.item !== undefined ? "Edit reminder" : "Create a reminder";

    return {
      headerRight: (
        <View style={{ flexDirection: "row" }}>
          
            <TouchableOpacity 
              style={{ marginLeft: 20, right: 10 }}
              onPress={() => params.handleRemove()}
            >
              <NavIcon color="white" size={26} name="delete" />
            </TouchableOpacity>

          <TouchableOpacity
            style={{ marginLeft: 20, right: 10 }}
            onPress={() => params.handleSave()}
          >
            <NavIcon color="white" size={26} name="check" />
          </TouchableOpacity>
        </View>
      ),
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#374046"
      },
      headerTitle: headerTitle,
      headerTitleStyle: {
        right: 100,
        alignSelf: "flex-end"
      }
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      reminderKey: "",
      text: " ",
      dateText: "",
      timeText: "",
      todayDate: this.dateInit(),
      isDatePickerVisible: false,
      isTimePickerVisible: false,

      switchValue: true,
      notify: false,

      repeatInterval: "0",
      open: false,
      repeatType: false,

      selectRepeatType: "minute"
    };
  }

  componentDidMount() {
    let data = this.props.navigation.state.params;
    if (data !== undefined) {
      let timeTxt = data.date.split(" ");
      this.setState({
        reminderKey: data.key,
        text: data.title,
        dateText: timeTxt.slice(0, -2).join(" "),
        timeText:
          timeTxt[timeTxt.length - 2] + " " + timeTxt[timeTxt.length - 1],
        notify: data.notify,
        repeatInterval: data.duration.match(/\d/g).join(""),
        selectRepeatType: data.duration.split(" ")[2]
      });
    } else {
      this.setState({
        timeText: this.timeInit(),
        dateText: this.dateInit(),
        text: ""
      });
    }

    this.props.navigation.setParams({
      handleRemove: this.deleteReminder,
      handleSave: this.saveReminder
    });

    this._fetchData();
  }

  dateInit = date => {
    return MomentTZ(date)
      .tz("America/Los_Angeles")
      .format("YYYY-MM-DD");
  };

  timeInit = time => {
    return MomentTZ(time)
      .tz("America/Los_Angeles")
      .format("HH:mm A");
  };

  _showDatePicker = () => this.setState({ isDatePickerVisible: true });
  _hideDatePicker = () => this.setState({ isDatePickerVisible: false });
  _handleDatePicked = date => {
    this.setState({
      dateText: this.dateInit(date)
    });
    this._hideDatePicker();
  };

  _showTimePicker = () => this.setState({ isTimePickerVisible: true });
  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });
  _handleTimePicked = time => {
    this.setState({
      timeText: this.timeInit(time)
    });
    this._hideTimePicker();
  };

  _handleToggleSwitch = () => {
    this.setState({ switchValue: !this.state.switchValue });
  };

  _handleSetInterval = text => {
    this.setState({
      repeatInterval: text
    });
  };

  _handleInputText = text => {
    this.setState({
      text
    });
  };

  _handleNotification = () => {
    this.setState(
      {
        notify: !this.state.notify
      });
  };

  _fetchData = () => {
    AsyncStorage.getAllKeys().then(keys => {
      console.log(keys);
      keys.forEach(element => {
        if (element.includes("^notifications")) { //
        } else {
          AsyncStorage.getItem(element)
            .then(JSON.parse)
            .then(response => {
              console.log(response);
              this.setState({
                data: this.state.data.filter(b => b.key !== element).concat({
                  key: element,
                  title: response.inputText,
                  date: `${response.date} ${response.time}`,
                  duration: `Every ${response.repeatInterval} ${response.selectRepeatType}`,
                  notify: response.notify,
                  avatar: "avatar"
                })
              });
            });
        }
      });
    });
  };

  _handleOnNavigateBack = () => {
    this._fetchData();
  };

  _handleOnGetData = () => {
    AsyncStorage.getAllKeys().then(keys => {
      this.setState(prevState => ({
        data: prevState.data.filter(b => {
          return keys.includes(b.key);
        })
      }));
    });
  };
  
  saveReminder = () => {

    let reminderObject = {
      inputText: this.state.text,
      notify: this.state.notify,
      date: this.state.dateText,
      time: this.state.timeText,
      repeatInterval: this.state.repeatInterval,
      selectRepeatType: this.state.selectRepeatType
    };

    let CURRENT_KEY;

    if (this.state.reminderKey !== "") {
      CURRENT_KEY = this.state.reminderKey;
    } else {
      CURRENT_KEY = Math.round(new Date().getTime() / 1000).toString();
    }

    AsyncStorage.setItem(CURRENT_KEY, JSON.stringify(reminderObject)).done(
      () => {
        if (this.state.notify === true) {
          Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
            if (status === "granted") {
              let dateNotify = MomentTZ(
                this.state.dateText +
                  " " +
                  this.state.timeText.split(":")[0] +
                  ":" +
                  this.state.timeText.split(":")[1].split(" ")[0]
              )
                .tz("America/Los_Angeles")
                .format("YYYY-MM-DD HH:mm");
              newNotification.body = this.state.text;
              Notifications.scheduleLocalNotificationAsync(newNotification, {
                time: Moment(dateNotify, "YYYY-MM-DD HH:mm").valueOf(),
                repeat: this.state.selectRepeatType.toLocaleLowerCase()
              });
              NOTIFICATION_KEY += Math.round(
                new Date().getTime() / 1000
              ).toString();
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
        }
        Alert.alert(
          "Saved",
          "Reminder added successfully",
          [
            {
              text: "OK",
              onPress: () => {
                this.props.navigation.state.params.handleOnNavigateBack();
                this.props.navigation.goBack();
              }
            }
          ],
          { cancelable: false }
        );
      }
    );
  };

  deleteReminder = () => {

    let CURRENT_KEY;

    if (this.state.reminderKey !== "") {
      CURRENT_KEY = this.state.reminderKey;
    } else {
      CURRENT_KEY = Math.round(new Date().getTime() / 1000).toString();
    }

    AsyncStorage.removeItem(CURRENT_KEY).done(() => {
        if (this.state.notify === true) {
          Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
              if (status === "granted") {
                NOTIFICATION_KEY -= Math.round(
                  new Date().getTime() / 1000
                ).toString();
                AsyncStorage.removeItem(NOTIFICATION_KEY, JSON.stringify(true));
                Alert.alert(
                  "Delete",
                  "Reminder deleted successfully",
                  [
                    {
                      text: "OK",
                      onPress: () => {
                        this.props.navigation.state.params.handleOnGetData();
                        this.props.navigation.goBack();
                      }
                    }
                  ],
                  { cancelable: false }
                );
              }
          });
        }
      }
    );
  };

  _handleModalText = text => {
    this.setState({
      selectRepeatType: text,
      repeatType: false
    });
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss} accessible={false}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.topView}>
            <InputWithButton
              maxLength={40}
              onChangeText={this._handleInputText}
              text={this.state.text}
              placeholderText="Enter your text"
            />
            <ActionButton
              buttonColor="#65799b"
              onPress={this._handleNotification}
              offsetY={0}
              icon={
                this.state.notify === false ? (
                  <NotifyIcon
                    color="white"
                    size={20}
                    name="notifications-off"
                  />
                ) : (
                  <NotifyIcon color="white" size={20} name="notifications" />
                )
              }
            />
          </View>

          <View style={styles.bottomView}>
            <DateTimeView
              onPress={this._showDatePicker}
              IconName="ios-calendar-outline"
              dateText={this.state.dateText}
              name="Date"
            />

            <DateTimeView
              onPress={this._showTimePicker}
              IconName="ios-time-outline"
              dateText={this.state.timeText}
              name="Time"
            />

            <RepeatSwitchView
              value={this.state.switchValue}
              onValueChange={this._handleToggleSwitch}
              repeatInterval={this.state.repeatInterval}
              selectRepeatType={this.state.selectRepeatType}
            />

            <RepeatInterval
              pointerEvents={this.state.switchValue === true ? null : "none"}
              switchValue={this.state.switchValue}
              repeatInterval={this.state.repeatInterval}
              onPress={() => this.setState({ open: true })}
              text="Repetition Interval"
            />

            <RepeatInterval
              pointerEvents={this.state.switchValue === true ? null : "none"}
              switchValue={this.state.switchValue}
              repeatInterval={this.state.repeatInterval}
              selectRepeatType={this.state.selectRepeatType}
              onPress={() => this.setState({ repeatType: true })}
              text="Types of Repeats"
            />

            <DatePicker
              isVisible={this.state.isDatePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDatePicker}
              mode="date"
              minimumDate={new Date(this.state.todayDate)}
            />

            <DatePicker
              isVisible={this.state.isTimePickerVisible}
              onConfirm={this._handleTimePicked}
              onCancel={this._hideTimePicker}
              mode="time"
            />
          </View>

          <KeyboardSpacer />

          <Modal
            open={this.state.open}
            modalDidClose={() => this.setState({ open: false })}
            overlayBackground={"rgba(0, 0, 0, 0.50)"}
            modalStyle={{ backgroundColor: "#374046" }}
          >
            <View>
              <InputWithButton
                maxLength={10}
                onChangeText={this._handleSetInterval}
                keyboardType="numeric"
              />
            </View>
          </Modal>

          <Modal
            open={this.state.repeatType}
            modalDidClose={() => this.setState({ repeatType: false })}
            overlayBackground={"rgba(0, 0, 0, 0.50)"}
            modalStyle={{
              backgroundColor: "#374046"
            }}
          >
            <View>
              <ModalButton onPress={() => null} text="Select Repetition Type" />
              <ModalButton
                onPress={() => this._handleModalText("minute")}
                text="minute"
              />
              <ModalButton
                onPress={() => this._handleModalText("hour")}
                text="hour"
              />
              <ModalButton
                onPress={() => this._handleModalText("day")}
                text="day"
              />
              <ModalButton
                onPress={() => this._handleModalText("week")}
                text="week"
              />
              <ModalButton
                onPress={() => this._handleModalText("month")}
                text="month"
              />
            </View>
          </Modal>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#374046",
    justifyContent: "center"
  },

  topView: {
    backgroundColor: "#65799b",
    flex: 1,
    justifyContent: "flex-end"
  },

  bottomView: {
    flex: 2,
    justifyContent: "space-around"
  }
});

export default AddReminderPage;
