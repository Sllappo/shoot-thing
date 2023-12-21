import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ParamCategorie from "../components/paramcategorie";

export default function Settings({ navigation }) {
    return (
        <View>
            <View style={{ display: "flex", flexDirection: "row", marginTop: "20%", justifyContent: "space-between" }}>
                <Pressable onPress={() => navigation.push('Home')}>
                    <Image
                        source={require("../assets/fleche_arriere.png")}
                        style={styles.back}
                    />
                </Pressable>
                <Text style={{ fontSize: 40, marginRight: "5%" }}>Settings</Text>
                <View style={{ height: 40, width: 40 }} />
            </View>
            <Text style={{ fontSize: 20, marginLeft: "15%", marginTop: "5%" }}>Account</Text>
            <View style={{ alignItems: "center" }}>
                <View style={styles.backcatego}>
                    <ParamCategorie title="Edit profile" onPress={() => navigation.push('Home')} adresse={require("../assets/profil_logo_settings.png")} />
                    <ParamCategorie title="Security" onPress={() => navigation.push('Home')} adresse={require("../assets/logo_securite.png")} />
                    <ParamCategorie title="Notifications" onPress={() => navigation.push('Home')} adresse={require("../assets/logo_notification.png")} />
                    <ParamCategorie title="Privacy" onPress={() => navigation.push('Home')} adresse={require("../assets/logo_cadena.png")} />
                </View>
            </View>
            <Text style={styles.categorie}>Support & About</Text>
            <View style={{ alignItems: "center" }}>
                <View style={styles.backcatego}>
                    <ParamCategorie title="My subscription" onPress={() => navigation.push('Home')} adresse={require("../assets/logo_carte_bleu.png")} />
                    <ParamCategorie title="Help & support" onPress={() => navigation.push('Home')} adresse={require("../assets/logo_interrogation.png")} />
                    <ParamCategorie title="Privacy" onPress={() => navigation.push('Home')} adresse={require("../assets/logo_securite.png")} />
                </View>
            </View>
            <Text style={styles.categorie}>Cache & Cellular</Text>
            <View style={{ alignItems: "center" }}>
                <View style={styles.backcatego}>
                    <ParamCategorie title="Free up space" onPress={() => navigation.push('Home')} adresse={require("../assets/logo_trash.png")} />
                    <ParamCategorie title="Data saver" onPress={() => navigation.push('Home')} adresse={require("../assets/logo_courbe.png")} />
                </View>
            </View>
            <Text style={styles.categorie}>Actions</Text>
            <View style={{ alignItems: "center" }}>
                <View style={styles.backcatego}>
                    <ParamCategorie title="Report problem" onPress={() => navigation.push('Home')} adresse={require("../assets/logo_drapeau.png")} />
                    <ParamCategorie title="Add account" onPress={() => navigation.push('Home')} adresse={require("../assets/logo_account.png")} />
                    <ParamCategorie title="Log out" onPress={() => navigation.push('Home')} adresse={require("../assets/logo_exit.png")} />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    back: {
        marginLeft: "5%",
        height: 40,
        width: 40,
    },
    categorie: {
        fontSize: 20,
        marginLeft: "15%",
        marginTop: "8%"
    },
    backcatego: {
        backgroundColor: "#2427600D",
        width: "70%",
        borderRadius: 10,
        justifyContent: "center"
    }
})