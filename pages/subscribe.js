import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert } from 'react-native';
import React, { useEffect, useState } from "react";
import {LinearGradient} from 'expo-linear-gradient';
import { supabase } from '../supabase.js';
import { AppState } from 'react-native'
import { Session } from '@supabase/supabase-js'

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })

const hidePassword =true 


export default function Sub({navigation} ) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function signUpWithEmail() {
        setLoading(true)
        const {
          data: { session },
          error,
        } = await supabase.auth.signUp({
          email: email,
          password: password,
        })
    
        if (error) Alert.alert(error.message)
        if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
      }
    
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#9A76BD', '#316BDC']} style={styles.gradient}>

            <Image
                style={styles.image} 
                source={require("../assets/logo.png")}
                />
            <View style={styles.loginFlex}>
                <Image style={styles.login}
                    source={require("../assets/google-login.png")}
                    />
                <Image style={styles.login}
                    source={require("../assets/facebook-login.png")}
                    />
            </View>
            <TextInput
            style={styles.input}
            placeholder="Pseudo"
            placeholderTextColor="#FFF"
            />
            <TextInput
            style={styles.input} 
            onChangeText={setEmail}        
            placeholder="Email"
            value={email}
            placeholderTextColor="#FFF"
            autoCapitalize="none"
            />
            <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="password"
            placeholderTextColor="#FFF"
            secureTextEntry={hidePassword}
            />
            <TextInput
            style={styles.input}
            placeholder="ConfirmPassword"
            secureTextEntry={hidePassword}
            placeholderTextColor="#FFF"
            />
            <Pressable style={styles.submit} disabled={loading} onPress={() => signUpWithEmail()}>
            <Text style={styles.button}>INSCRIPTION</Text>
            </Pressable>
            <Text style={styles.text}>
                Déja inscrit? Connectez-vous!
            </Text>
            
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    text: {
        color: "#EFE6F5",
        fontSize: 12,
        fontWeight: '400',
        width: 245,
        textAlign:'center',
        marginTop:15,
    },
    image:{
        width: 193,
        height: 202,
    },
    login:{
        width: 130,
        height: 39,

    },
    loginFlex:{
        flexDirection: 'row',
    },
    gradient:{
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        borderWidth:2,
        borderColor: '#FFF',
        width:245,
        height:35,
        borderRadius:10,
        color:'#FFF',
        marginBottom:9,
        padding:5,
    },
    submit:{
        width:245,
        height:63,
        flexShrink:0,
        borderRadius:36,
        borderWidth:4,
        borderColor:"#FFF",
        backgroundColor:"#F0E0FF4D",
        justifyContent:"center",
        marginTop:44,
    },
    button:{
        color:"#FFF",
        textAlign:"center",
        fontSize:20,
        fontWeight:"800",
    },
});