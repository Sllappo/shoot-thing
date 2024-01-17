import React, { useEffect, useState } from 'react';
import Users from './users';
import { StyleSheet, Text, View, Button, Pressable, fontweight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Video, resizeMode } from 'expo-av';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Video
                    source={require("../assets/accueil-video.mp4")}
                    style={styles.backgroundVideo}
                    resizeMode='cover'
                    shouldPlay
                    isLooping
                />
            </View>
            <View style={{ ...StyleSheet.absoluteFillObject, alignItems: 'center', marginTop: "70%", fontWeight: 'bold', fontSize: 18, }}>
                <Text style={{ color: "#7D2AE7", fontSize: 40, fontWeight: "bold" }}>Shoot Thing</Text>
            </View>
            <View style={styles.pressablecontainer}>
                <Pressable onPress={() => navigation.push('Login')} style={styles.bouton1}>
                    <Text style={{ textAlign: "center", fontSize: 20, color: "white", }}>Connexion</Text>
                </Pressable>
                <Pressable onPress={() => navigation.push('Sub')} style={styles.bouton2}>
                    <Text style={{ textAlign: "center", fontSize: 20, color: "white", }}>S'inscrire</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressablecontainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center'

    },
    backgroundVideo: {
        flex: 1,
        height: 100,
        width: 500,
    },
    bouton1: {
        marginTop: 30,
        backgroundColor: 'rgba(160,91,227,0.5)',
        width: "50%",
        borderRadius: 20,
        borderWidth: 2, borderColor: "white",
        height: "5%",
        justifyContent: 'center'
    },
    bouton2: {
        marginTop: 30,
        backgroundColor: 'rgba(201,185,217,0.5)',
        width: "50%",
        borderRadius: 20,
        borderWidth: 2, borderColor: "white",
        height: "5%",
        justifyContent: 'center'
    }
});