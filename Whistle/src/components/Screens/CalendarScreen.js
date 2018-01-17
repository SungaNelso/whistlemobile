import React, { Component } from 'react';
import { StackNavigator, TabNavigator} from 'react-navigation';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Alert, TouchableOpacity, Image } from 'react-native';

export default class CalendarScreen extends Component {
    static navigationOptions = {
      title: 'CALENDAR',
      tabBarLabel: 'Calendar',
      headerTintColor: 'black',
      tabBarIcon: ({ tintColor }) => (tintColor == 'white' ?
        <Image source={require('./ScreenImages/calendar.png')}
          style={{ width: 22, height: 22 }} />
        :
        <Image source={require('./ScreenImages/inactivecalendar.png')}
          style={{ width: 22, height: 22 }} />
      ),
      headerStyle: {
        backgroundColor: '#FFCC00'
      },
      headerTitleStyle : {
        color : '#000',
        textAlign : 'center'
      }
  };
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text There is a blue square
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
})