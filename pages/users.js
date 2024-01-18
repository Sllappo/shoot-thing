import React from "react";
import { StyleSheet, View, Text, Image, Button, Pressable, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from "../providers/AuthProvider";
import { NavigationContainer } from '@react-navigation/native';

export default function Users({ navigation }) {
    const text_stats_num_top = { color: "white", fontSize: 20, width: "25%", textAlign: "center", marginTop: "5%" }
    const text_stats_num = { color: "white", fontSize: 20, width: "25%", textAlign: "center", }
    const button_de_profil = { backgroundColor: "#FFD166", width: "30%", textAlign: "center", backgroundColor: "red", }
    const { signOut } = useAuth();
    return (
        <LinearGradient colors={['#9A76BD', '#316BDC']} style={{ height: '100%' }}>
            <View style={styles.body}>
                <View style={{ backgroundColor: "white", width: "100%", alignItems: "center", height: 155, marginTop: "20%", borderRadius: 30, justifyContent: "center" }}>
                    <Image
                        source={require("../assets/photo_profil.png")}
                        style={styles.img_profil}
                    />
                </View>
                <Text style={styles.pseudo}>Melissa peters</Text>
                <View style={styles.description_profil}>
                    <Text style={{ color: "white", }}>Bonjour je suis Mag je possède actuellement un salon de coiffure sur Nantes et j'aime la musique, la nourriture et les avions de chasse</Text>
                </View>
                <Text style={styles.img_position}>
                    <Image
                        source={require("../assets/image_location.png")}
                    />
                    Nantes </Text>

                <View style={styles.stats_numero}>
                    <Text style={text_stats_num_top}>122</Text>
                    <Text style={text_stats_num_top}>67</Text>
                    <Text style={text_stats_num_top}>37k</Text>
                </View>
                <View style={styles.stats_numero}>
                    <Text style={text_stats_num}>Followers</Text>
                    <Text style={text_stats_num}>Following</Text>
                    <Text style={text_stats_num}>Likes</Text>
                </View>
                <View style={{ flexDirection: "row", width: "55%", justifyContent: "space-between", }}>
                    <View style={styles.Button_profile}>
                        <Button
                            title="Edit profile"
                            color="black"
                        />
                    </View>
                    <View style={styles.Button_profile}>
                        <Button
                            title="Add Friend"
                            color="black"
                        />
                    </View>
                    <View style={styles.Button_profile}>
                        <Button
                            onPress={() => {
                                Alert.alert("Log Out", null, [
                                {
                                    text: "Yes, Log Out",
                                    style: "destructive",
                                    onPress: () => {
                                        navigation.popToTop();
                                        signOut();
                                    },
                                },
                                { text: "Cancel", style: "cancel" },
                                ]);
                            }}
                            title="Logout"
                            color="black"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "row", }}>
                    <View style={styles.Button_navigation_profile}>
                        <Button
                            title="Photos"
                            color="white"
                        />
                    </View>
                    <View style={styles.Button_navigation_profile}>
                        <Button
                            title="Likes"
                            color="white"
                        />
                    </View>
                </View>
                {/* Footeur */}
                <View style={styles.footer}>
                    <Pressable onPress={() => navigation.replace('Publi')}>
                        <Image
                            source={require("../assets/accueil_logo.png")}
                            style={styles.footer_nav}
                        />
                    </Pressable>
                    <Pressable onPress={() => navigation.replace('Profiledit')}>
                        <Image
                            source={require("../assets/logo_podium.png")}
                            style={styles.footer_nav}
                        />
                    </Pressable>
                    <Pressable onPress={() => navigation.replace('Settings')}>
                        <Image
                            source={require("../assets/choix.png")}
                            style={styles.footer_nav}
                        />
                    </Pressable>
                    <Pressable onPress={() => navigation.replace('Home')}>
                        <Image
                            source={require("../assets/profil.png")}
                            style={styles.footer_nav}
                        />
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    body: {
        alignItems: "center",
        height: '100%',
    },
    img_profil: {
        height: 100,
        width: 100,
    },
    pseudo: {
        marginTop: "5%",
        fontSize: 18,
        color: "#FFD166",
    },
    description_profil: {
        marginTop: "2%",
        width: "70%",
    },
    img_position: {
        marginTop: "3%",
        color: "#FFD166",
    },
    stats_numero: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    Button_profile: {
        flexDirection: "row",
        marginTop: "5%",
        backgroundColor: "#FFD166",
        borderRadius: 10,
    },
    Button_navigation_profile: {
        marginTop: "6%",
        borderBottomWidth: 3,
        width: "45%",
        justifyContent: "space-between",
    },
    footer: {
        flexDirection: "row",
        bottom: 0,
        position: "absolute",
        justifyContent: "space-evenly",
        width: "100%",
        backgroundColor: "#FFFFFF",
        height: "10%",
        alignItems: 'center',
    },
})