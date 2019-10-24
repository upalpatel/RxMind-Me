import React, { Component } from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class RegisterPage extends Component {
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
                        placeholder = "Password"
                        returnKeyType = "go"
                        secureTextEntry
                        onSubmitEditing = {(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity stlye={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Login')}>
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
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignText: 'stretch'
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
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});