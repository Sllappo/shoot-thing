import React, { useState } from 'react';
import Users from './users';
import { StyleSheet, Text, View, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
               Shoot Thing
            </Text>
            <Button
                title = "users page"
                onPress={() => navigation.replace('Users')}
            />
            <Button
                title='Page Inscription'
                onPress={() => navigation.replace('Sub')}
            />
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
        fontSize: 32,
        color: "#592E83",
        fontWeight: 900,
    },
  });