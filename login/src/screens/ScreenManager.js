import React, { Component } from 'react';
import {  Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
//import LoginScreen from './Login/login';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../images/logo.png')}
        style={{ width: 30, height: 30,
          justifyContent: 'center', 
          alignItems: 'center',    }}
      />
    );
  }
}

const Screens = StackNavigator({
  LoginScreen: {screen: LoginScreen},
  HomeScreen: {screen: HomeScreen}
},
LoginScreen.navigationOptions = {
  headerTitle: <LogoTitle />
  },
HomeScreen.navigationOptions = {
  headerTitle: <LogoTitle />,
  headerLeft: null
  }
// {
//   initialRouteName: 'LoginScreen',  
//   navigationOptions: {
//     headerStyle: {
//       //backgroundColor: '#f4511e',
//     },
//     headerTintColor: 'black',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   },
// }
);

export default Screens;