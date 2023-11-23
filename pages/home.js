import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
               Shoot Thing
            </Text>
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
    text: {
        fontSize: "32",
        color: "#592E83",
        fontWeight: "900",
    },
  });