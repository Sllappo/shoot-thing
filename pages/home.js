import React, { useState } from 'react';
import Users from './users';
import { StyleSheet, Text, View, Button, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import Video from 'react-native-video';

const onBuffer = (data) => {
    console.log("on bufferring==>>>", data)
}
  
const videoError = (data) => {
    console.log("error raised===>>>", data)
}

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Video source={require("../assets/accueil-video.mp4")}
            repeat={true}
            onBuffer={onBuffer}
            onError={videoError}
            resizeMode='cover'
            style={styles.backgroundVideo} 
            />
            <View style = {{justifyContent:"center",height:"70%", width:245,}}>
            <Text style={styles.text}>
               Shoot Thing
            </Text>
            <View style={styles.containerhome}>
                <Pressable style={styles.submit} onPress={() => navigation.replace('Users')}>
                <Text style={styles.button}>CONNEXION</Text>
                </Pressable>
                <Pressable style={styles.submit2} onPress={() => navigation.replace('Sub')}>
                <Text style={styles.button}>INSCRIPTION</Text>
                </Pressable>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerhome: {
        
        bottom:0,
        position:"absolute",
    },
    text: {
        fontSize: 32,
        justifyContent: 'center',
        textAlign: 'center',
        color: "#7D2AE7",
        fontWeight: '900',
     
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      submit:{
        width:245,
        height:63,
        flexShrink:0,
        borderRadius:36,
        borderWidth:4,
        borderColor:"#FFF",
        backgroundColor:"#A05BE34D",
        justifyContent:"center",
        marginTop:20,
    },
    submit2:{
        width:245,
        height:63,
        flexShrink:0,
        borderRadius:36,
        borderWidth:4,
        borderColor:"#FFF",
        backgroundColor:"#C9B9D93D",
        justifyContent:"center",
        marginTop:20,

    },
    button:{
        color:"#FFF",
        textAlign:"center",
        fontSize:20,
        fontWeight:"800",
    },
  });