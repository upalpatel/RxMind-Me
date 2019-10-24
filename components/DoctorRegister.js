import React, { Component } from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class DoctorRegister extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.registerform}>
                    <TextInput style={styles.input}
                        placeholder = "First and Last"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.emailinput.focus()}
                    />
                    <TextInput style={styles.input}
                        placeholder = "Email"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        ref = {(input) => this.emailinput = input}
                    />
                    <TextInput style={styles.input}
                        placeholder = "Hospital"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        ref = {(input) => this.emailinput = input}
                    />
                    <TextInput style={styles.input}
                        placeholder = "Password"
                        returnKeyType = "go"
                        secureTextEntry
                        onSubmitEditing = {(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity stlye={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Doctor')}>
                        <Text style={styles.buttonText}> Register Me </Text>
                    </TouchableOpacity>
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
        alignText: 'stretch'
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
        backgroundColor: '#b94128',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: '700'
    }
});