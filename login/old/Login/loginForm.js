import React, { Component } from 'react';
import { View, StyleSheet,Text, TextInput,TouchableOpacity, StatusBar } from 'react-native';


export default class LoginForm extends Component<{}>{    
    
    render() {
        const { navigate } = this.props.navigation
      return (
          
        <View style= {styles.container}>          
        <StatusBar
        barStyle="default-content" />
            <TextInput                 
                placeholder="Usuario"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input} 
            />
            <TextInput 
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                secureTextEntry
                style={styles.input} 
                ref={(input) => this.passwordInput = input}
                />
                 <TouchableOpacity onPress={() => navigate('Screen1', {prevScreenTitle: 'Main Screen', people: people})}>
                        <Text>Continuar</Text>
                </TouchableOpacity>
        </View>
      )  
    }
}


const styles = StyleSheet.create({
    container:{
        padding:20,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    input:{
        height:40,
        opacity:.9,        
        backgroundColor:'red',
        marginBottom: 20,
        color: 'white',
        paddingHorizontal: 20,
        textAlign:'center',
        width:"90%",
        borderWidth: 0, 
        borderRadius: 20,
        
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical: 15, 
        justifyContent: 'center', 
        alignItems: 'center',
        width:"70%",
        borderWidth: 0, 
        borderRadius: 20,
    },
    buttonText:{
        textAlign:'center',
        color:  '#FFFFFF',
        fontWeight:'700' ,
        
    }

});