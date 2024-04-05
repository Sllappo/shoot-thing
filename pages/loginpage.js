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

export default function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })
    
        if (error) Alert.alert(error.message)
        else navigation.push('Publi')
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
            onChangeText={setEmail}
            placeholder="Email"
            value={email}
            placeholderTextColor="#FFF"
            autoCapitalize="none"
            />
            <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="password"
            placeholderTextColor="#FFF"
            secureTextEntry={hidePassword}
            />
            <Pressable style={styles.submit} disabled={loading} onPress={() => signInWithEmail()}>
            <Text style={styles.button}>Connexion</Text>
            </Pressable>
            <Text style={styles.text}>
                Pas de compte? Inscrivez-vous!
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