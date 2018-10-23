import React, {Component} from 'react';
import {Platform, PermissionsAndroid, Alert, Text, View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

 
class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
}

async requestLocationPermission() {
    const chckLocationPermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
        alert("You've access for the location");
    } else {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Cool Location App required Location permission',
                    'message': 'We required Location permission in order to get device location ' +
                        'Please grant us.'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                alert("You've access for the location");
            } else {
                alert("You don't have access for the location");
            }
        } catch (err) {
            alert(err)
        }
    }
};

render() {
    return (
        <Text
            onPress={() => this.requestLocationPermission()}>
            Request Location Permission
        </Text>
    )
}

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
                onPress={() => this.requestLocationPermission()}>
                Request Location Permission
            </Text>
        <Text>Home!</Text>
      </View>
    );
  }
}



class MapScreen extends React.Component {
 

  render() {    
    return (      

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}




export default createBottomTabNavigator({
  Chat: { screen: HomeScreen },
  Mapa: { screen: MapScreen },
  Config: { screen: SettingsScreen },
  
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Chat') {
        iconName = 'ios-chatbubbles';
      } else if (routeName === 'Config') {
        iconName = 'ios-settings';
      }
      else if (routeName === 'Mapa') {
        iconName = 'ios-map';
      }
      
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  },
}
);


