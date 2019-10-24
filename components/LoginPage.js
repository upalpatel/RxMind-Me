import React, { Component } from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

import RegisterPage from './RegisterPage';
import DeletePage from './DeletePage';
import HomePage from './HomePage';
import CalendarPage from './CalendarPage';
import MenuScreen from './menu';
import CalendarScreen from './calendars';
import AgendaScreen from './agenda';
import OptionScreen from './OptionPage';
import EyeStrainTheme from './EyeStrainTheme';
import ColorTheme from './ColorTheme';
import Hospital from './Hospital';
import DoctorLogin from './DoctorLogin';
import DoctorLoggedIn from './DoctorLoggedIn';
import DoctorRegister from './DoctorRegister';
import ScheduleApps from './ScheduleApps';
import MyPatients from './MyPatients';
import AddReminderPage from './reminder/screens/AddReminderPage';
import ReminderHomePage from './reminder/screens/ReminderHomePage';
import QRCodeScanner from './QRCode';
import LangPicker from './language/LangPicker';
import TakeNotes from './notes/TakeNotes';

import BlueCalendar from './calendars/blueCalendar';
import GreenCalendar from './calendars/greenCalendar';
import OrangeCalendar from './calendars/orangeCalendar';
import RedCalendar from './calendars/redCalendar';
import YellowCalendar from './calendars/yellowCalendar';


export class LoginPage extends Component {
     render() {
         return (
             <View style={styles.container}>
                <View style={styles.textfields}>
                    <Text style={styles.paragraph}>
                      Welcome to RxMind-Me!
                    </Text>
                    <TextInput style={styles.input}
                        placeholder = "username"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    />
                    <TextInput style={styles.input}
                        placeholder = "password"
                        returnKeyType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput=input}
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.buttonText}> Login </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Doctor')}>
                        <Text style={styles.buttonText}> Doctor </Text>
                    </TouchableOpacity>
                    <Button
                        title = "Not Registered?"
                        type = "outline"
                        color = '#FFF'
                        fontWeight = '700'
                        onPress = {() => this.props.navigation.navigate('Register')}
                    />
                    <Button
                        title = "Delete Account?"
                        type = "outline"
                        color = '#FFF'
                        fontWeight = '700'
                        onPress = {() => this.props.navigation.navigate('Delete')}
                    />
                </View>
            </View>
        );
    }
}

const AppStackNavigator = createStackNavigator ({
    Login: LoginPage,
    Doctor: DoctorLogin,
    Register: RegisterPage,
    Delete: DeletePage,
    DocLog: DoctorLoggedIn,
    DocReg: DoctorRegister,
    Home: HomePage,
    Menu: MenuScreen,
    Calendars: CalendarScreen,
    Agenda: AgendaScreen,
    Option: OptionScreen,
    Eye: EyeStrainTheme,
    Color: ColorTheme,
    Hospitals: Hospital,
    Appointments: ScheduleApps,
    Patients: MyPatients,
    ReminderHome: AddReminderPage,
    BlueC: BlueCalendar,
    GreenC: GreenCalendar,
    OrangeC: OrangeCalendar,
    RedC: RedCalendar,
    YellowC: YellowCalendar,
    QRScanner: QRCodeScanner,
    Language: LangPicker,
    NoteTaker: TakeNotes
});
const AppHome = createAppContainer(AppStackNavigator);

export default AppHome;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    paragraph: {
      margin: 12,
      marginTop: 15,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        marginBottom: 0,
        color: '#34495e'
    },
    buttonContainer: {
        height: 50,
        borderRadius: 50,
        borderWidth: 0.5,
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    buttonText: {
      paddingLeft: 20,
      textAlign: 'left',
      color: '#FFFFFF',
      fontWeight: '500',
      fontSize: 18
    }
});