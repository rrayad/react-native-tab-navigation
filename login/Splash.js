import React, { Component } from 'react';
import { TouchableHighlight,TextInput,Alert,View,Text, StyleSheet,Button } from 'react-native';
import { white } from 'ansi-colors';

export default class Splash extends Component {

    _onPressButton() {
        Alert.alert('You tapped the button!')
      }

    render() {
      return (
          
        <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Total Play</Text>
            </View>
            
            <View style={styles.caja} >            
                    <Text style={styles.textButton}  >
                        Continuar
                    </Text>            
            </View>
            <View>            
                <Text style={styles.subtitle} >Powered by Nearshore</Text>
            </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: '#EA2027',
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    title:{
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle:{
        color: 'white',        
        fontWeight: '200',
        paddingBottom: 20
    },
    titleWrapper:{
        justifyContent: 'center',
        flex:1
    },
    submit:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      },
      textButton:{
          color:'red',
          textAlign:'center',
          fontSize: 20,
          justifyContent: 'center', 
          alignItems: 'center',
      },
      caja:{
        height: 40, 
        width: "80%", 
        borderColor: 'white', 
        borderWidth: 2, 
        borderRadius: 20,
        marginBottom: 20,         
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center',
      }
});