import React, {Component} from 'react';
import { View, StyleSheet, Image,Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from  './loginForm'


  export default class Login extends Component {    
    
    
    render() {
        
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>            
                <View style= {styles.logoContainer}>          
                    <Image 
                        style={styles.logo} 
                        source={require('../../../images/logo.png')} 
                    />            
                    <Text 
                        style={styles.title}>
                            Nearshore Delivery Solutions
                        </Text>
                </View>
                <View >          
                    <LoginForm />
                </View>            
        </KeyboardAvoidingView>
      ) 
    }
}


const styles = StyleSheet.create({
    container:{        
        flex: 1,   
        backgroundColor: 'white',        
    },
    logoContainer:{
        alignItems:'center',
        flexGrow: 1,
        justifyContent:'center'

    },
    logo:{        
        width:100,
        height:100,           
    },
    title:{
        marginTop:10,
        width:360,
        textAlign:"center",
        opacity:0.9,
        shadowOpacity:.3
    }
    
});