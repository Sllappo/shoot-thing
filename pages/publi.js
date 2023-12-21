import React from "react";
import { StyleSheet, View, Text, Image, Pressable, TextInput, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

export default function Publi({navigation}){
    return(
        <View style={styles.container}>
            <LinearGradient colors={['#9A76BD', '#316BDC']} style = {{height: '100%'}}>
            <ScrollView>
                <View style={styles.body}>
                   <Text style={styles.title}>Catégorie :</Text>
                   <Image 
                        source = {require("../assets/fruitsLogo.jpg")}
                        style = {styles.logotheme}
                   />
                   <Text style={styles.title}>Thème :</Text>
                   <Image 
                        source = {require("../assets/tomate.png")}
                        style = {styles.logotheme}
                   />

                   <View>
                        <View style={styles.boxPubli}>
                            <View style= {styles.headPubli}>
                                <View><Image source={require("../assets/photo_profil.png")} style = {{height:15, width:15,marginRight:2,}}/></View>
                                <Text>Utilisateur_4012</Text>
                            </View>
                            <Image source={require("../assets/blackApple.jpg")} style = {{height:143, width:'100%',}}/>
                            <View style={styles.footPubli}>
                                <Image source={require("../assets/like.png")} style = {{height:15, width:15,marginLeft:2}}/> 
                                <Image source={require("../assets/bulle.png")} style = {{height:15, width:15,marginLeft:3}}/>
                                <Image source={require("../assets/share.png")} style = {{height:15, width:15,marginLeft:115,}}/>
                            </View>
                        </View>
                   </View>
                </View>
            </ScrollView>
            <View style = {styles.footer}>
                        <Pressable onPress={() => navigation.replace('Publi')}>
                            <Image
                                source={require("../assets/accueil_logo.png")}
                                style = {styles.footer_nav}
                            />
                        </Pressable>
                        <Pressable onPress={() => navigation.replace('Profiledit')}>
                            <Image
                                source={require("../assets/logo_podium.png")}
                                style = {styles.footer_nav}
                            />
                        </Pressable>
                        <Pressable onPress={() => navigation.replace('Home')}>
                            <Image
                                source={require("../assets/choix.png")}
                                style = {styles.footer_nav}
                            />
                        </Pressable>
                        <Pressable onPress={() => navigation.replace('Home')}>
                            <Image
                                source={require("../assets/profil.png")}
                                style = {styles.footer_nav}
                            />
                        </Pressable>
            </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        alignItems:"center",
        height:'100%',
        paddingTop:50,
        },
    footer:{
        flexDirection:"row",
        bottom:0,
        position:"absolute",
        justifyContent:"space-evenly",
        width:"100%",
        backgroundColor:"#FFFFFF",
        height:"10%",
        alignItems: 'center',
    },
    test:{
        fontSize: 100,
    },
    title:{
        fontWeight:"bold",
        fontSize: 40,
        color:"white",
        textDecorationLine:"underline",
    },
    logotheme:{
        width:150,
        height:150,
        borderRadius:750,
    },
    boxPubli: {
        width: 171,
        height: 197, 
        borderColor:"white",
        borderWidth: 1,   
    },
    headPubli:{
        backgroundColor:'white', 
        height:26,
        justifyContent:'justify',
        flexDirection: "row",
        alignItems:"center",
    },
    footPubli:{
        height:28,
        backgroundColor:'white',
        flexDirection:"row",
        alignItems:"center",
    }
})