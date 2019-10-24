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

export default class Hospital extends Component {

  constructor(props) {
    super(props);
    this.array = [
      {
        title: 'Anaheim Regional Medical Center'
      },
      {
        title: 'St. Jude Hospital'
      },
      {
        title: 'Placentia-Linda Hospital'
      },
      {
        title: 'Kindred Hospital Brea'
      },
      {
        title: 'Kaiser Permanente Orange County - Anaheim Medical Center'
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
          placeholder="hospital"
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
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  buttonContainer: {
    height: 40,
    borderRadius: 14,
    borderWidth: 0.5,
    marginTop: 12,
    backgroundColor: '#2980b9',
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

/*
import React, { Component } from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Anaheim Regional Medical Center',
    subtitle: '1111 W La Palma Ave',
    avatar_url: 'https://lh5.googleusercontent.com/p/AF1QipNC_FNlBFZSe0L5kcqUmP-iGQsqWSw7_r0AKaKp=w226-h160-k-no'
  },
  {
    name: 'St. Jude Hospital',
    subtitle: '101 E Valencia Mesa Dr',
    avatar_url: 'https://lh5.googleusercontent.com/proxy/_sTPb2BYlc9lmsgh5YgKSLdxlRTdmG8uTlnt3HiWSNfa_mW2ZPOW_GIigOJTwSAJAuyf0opwHVjC0Ya452O4rKQ5tu4zc6hNWinBXowFXdWQJFFlG_XqAD-BSaqneK-kh9GSusG8vG8oDc5XcisAuX6Wef33Wyo=w211-h160-k-no'
  },
  {
    name: 'Placentia-Linda Hospital',
    subtitle: '1301 N Rose Dr',
    avatar_url: 'https://lh4.googleusercontent.com/proxy/tj95Af5NUEBU1Cz1xfbP4C1sr9rCmONWEvC14ObmuQNS2OTCSgxvY6K1GRmffx-IEZLHqD2U6uLmNR1MqH_Qh5sSnxi1yTsTg3TazGiSfjgcWAgYWOK14po0uxBwXnj8ufdy2Boz6wqukmLBLPmD6iOEDEAG8A=w212-h160-k-no'
  },
  {
    name: 'Kindred Hospital Brea',
    subtitle: '875 North Brea Blvd',
    avatar_url: 'https://lh4.googleusercontent.com/proxy/6E1G2Uoi9q0Huke7U53njIklcHttsXPSR6uYSxKbZVlUn8GjHdmV0XzU53lR3cNz9hozPH21L0etFDgNQk7Ge014OuRnaB-y8P5Lk4cpuTSIlAO9xXWCfRVcpSVQ5epMxQ1jGV4CeImcbIn7IM99o1Rg2lcxF-E=w408-h291-k-no'
  },
  {
    name: 'Kaiser Permanente Orange County - Anaheim Medical Center',
    subtitle: '3440 W La Palma Ave',
    avatar_url: 'https://lh5.googleusercontent.com/p/AF1QipOrqRaj2sTDprOmxV_cGzeVlO4B_YyTDK01-j2s=w191-h160-k-no'
  }
]
export default class Hospital extends Component {
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{ source: { uri: item.avatar_url } }}
      />
    )
    
    render () {
      return (
        <View style={styles.container}>
          <Text style={styles.text}> Hospitals near Fullerton, CA </Text>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
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
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});
*/