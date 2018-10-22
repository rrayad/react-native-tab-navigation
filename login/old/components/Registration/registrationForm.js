import React, {Component} from 'react';
import { View, StyleSheet,Text, TextInput,TouchableOpacity, StatusBar } from 'react-native';


export default class RegistrationForm extends Component{
    render() {
      return (          
        <View style= {styles.regform}>          
          <Text style={styles.header}>Registro</Text>
          <TextInput 
          style={styles.textInput} 
          placeholder="Nombre" 
          placeholderTextColor="rgba(255,255,255,0.7)" 
          />
          <TextInput 
          style={styles.textInput} 
          placeholder="email" 
          placeholderTextColor="rgba(255,255,255,0.7)" 
          />
          <TextInput 
          style={styles.textInput} 
          placeholder="password" 
          placeholderTextColor="rgba(255,255,255,0.7)" 
          />
          <TouchableOpacity style={styles.button}>
              <Text style={styles.btnNext}>Continuar</Text>
          </TouchableOpacity>
        </View>
      )  
    }
}


const styles = StyleSheet.create({
    regform:{
      alignSelf:'stretch',
    },
    header:{      
      fontSize:24,
      color:'#fff',
      paddingBottom:0,
      marginBottom:80,
      

    },
    textInput:{
      alignSelf:'stretch',
      height:40,
      marginBottom:30,
      color: '#fff',
      borderBottomColor:'#f8f8f8',
      borderBottomWidth:1,
    },
    button:{
      alignSelf: 'stretch',
      height:40,
      marginBottom:30,
      borderColor:'#fff',
      borderWidth: .7, 
      borderRadius: 20,
      justifyContent: 'center', 
      alignItems: 'center'
    },
    btnNext:{
      color:'#fff',
      fontWeight:'bold'
    }

});