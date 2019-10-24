import React, { Component } from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

export default class DoctorLogin extends Component {
     render() {
         return (
             <View style={styles.container}>
                <View style={styles.textfields}>
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
                    <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('DocLog')}>
                        <Text style={styles.buttonText}> Login </Text>
                    </TouchableOpacity>
                    <Button
                        title = "Register Here"
                        type = "outline"
                        color = '#000'
                        fontWeight = '700'
                        onPress = {() => this.props.navigation.navigate('DocReg')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#ead352',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: 'rgb(214, 169, 107)',
        borderWidth: 1,
        marginBottom: 0,
        color: '#34495e'
    },
    buttonContainer: {
        height: 50,
        borderRadius: 50,
        borderWidth: 0.5,
        backgroundColor: '#b94128',
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