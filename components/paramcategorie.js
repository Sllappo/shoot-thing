import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const ParamCategorie = ({ onPress, title, adresse }) => {
    return (
        <View>
            <Pressable onPress={onPress} style={styles.paramcategorie}>
                <Image
                    source={adresse}
                    style={{ height: 30, width: 30, }}
                />
                <Text style={{ marginLeft: "10%", marginTop: 5, fontSize: 15 }}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default ParamCategorie

const styles = StyleSheet.create({
    paramcategorie: {
        paddingTop: 5,
        marginLeft: "5%",
        display: "flex",
        flexDirection: "row",
    }
})

