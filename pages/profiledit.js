import React from "react";
import { StyleSheet, View, Text, Image, Button, Pressable, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";


export default function Profiledit({ navigation }) {

    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState();

    const pays = [
        { label: "France", value: "France" },
        { label: "English", value: "English" },
        { label: "Belgium", value: "Belgique" }
    ]

    const hidePassword = true

    return (
        <View>
            <LinearGradient colors={['#9A76BD', '#316BDC']} style={styles.gradient}>
                <View style={{ backgroundColor: "none", width: "100%" }}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Pressable onPress={() => navigation.push('Home')}>
                            <Image
                                source={require("../assets/fleche_arriere.png")}
                                style={{ height: 30, width: 30 }}
                            />
                        </Pressable>
                        <Text style={{ fontSize: 30, color: "white" }}>Editer son profil</Text>
                        <View style={{ height: 30, width: 30 }} />
                    </View>
                    <Image
                        source={require("../assets/photo_profil.png")}
                        style={styles.img_profil}
                    />
                </View>
                <View style={{ width: "90%" }}>
                    <Text style={styles.categorie}>Nom</Text>
                    <CustomTextInput
                        placeholder={"test"}
                        customStyle={{
                            backgroundColor: "white",
                        }}
                    />
                    <Text style={styles.categorie}>Email</Text>
                    <CustomTextInput
                        placeholder={"@gmail.com"}
                        customStyle={{
                            backgroundColor: "white",
                        }}
                    />
                    <Text style={styles.categorie}>Mot de Passe</Text>
                    <CustomTextInput
                        placeholder={"mot de passe"}
                        hidePassword={true}
                        customStyle={{
                            backgroundColor: "white",
                        }}
                    />
                    <Text style={styles.categorie}>Description</Text>
                    <CustomTextInput
                        placeholder={"Description"}
                        customStyle={{
                            backgroundColor: "white",
                        }}
                    />
                    <Text style={styles.categorie}>Pays</Text>
                    <DropDownPicker style={{ marginLeft: "5%", marginTop: "3%", width: "90%" }}
                        items={pays}
                        open={isOpen}
                        setOpen={() => setIsOpen(!isOpen)}
                        value={currentValue}
                        setValue={(val) => setCurrentValue(val)}
                        maxHeight={100}
                        placeholder="Choisir son pays"

                    />
                    <View style={{ alignItems: "center" }}>
                        <Pressable onPress={() => navigation.push('Home')} style={styles.buttonsave}>
                            <Text style={{ textAlign: "center", fontSize: 20 }}>Save Changes</Text>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}


const styles = StyleSheet.create({
    img_profil: {
        marginTop: 10,
        height: 100,
        width: 100,
        alignSelf: "center"
    },
    input: {
        height: 35,
        margin: 20,
        borderWidth: 1,
        padding: 10,
    },
    buttonsave: {
        backgroundColor: "pink",
        width: "50%",
        paddingBottom: "2%",
        paddingTop: "2%",
        textAlign: "center",
        color: "black",
        overflow: "hidden",
        borderRadius: 10,
        marginTop: "10%",
        fontSize: 20

    },
    gradient: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categorie: {
        color: "white",
        fontWeight: "700",
        paddingTop: "3%",
        paddingLeft: "5%"
    }
})