import React, { Component } from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class CalendarPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Calendar Page </Text>
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
        alignItems: 'stretch'
    },
    text: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
    }
});