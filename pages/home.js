import React, { useEffect, useState } from 'react';
import Users from './users';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';

import { supabase } from 'supabase.js';

const supabaseUrl = 'https://isdrblvcgfkosdxpmetw.supabase.co/';
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzZHJibHZjZ2Zrb3NkeHBtZXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMzQ0NTMsImV4cCI6MjAyNzcxMDQ1M30.zmJEXSatrtQMb_7Gmnh5SuxDO_z2uKYvM7pMLHMlcug';




export default function ImageUploadScreen() {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:
                ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri)
        }
    };

    const uploadImage = async () => {
        const file = await fetch(image);
        const blob = await file.blob();
        const { data, error } = await supabase.storage.from('images').upload((`image-${Date.now()}`, blob));

        if (error) {
            Alert.alert('Error', 'Failed to upload image');
        }
        else {
            Alert.alert('Success Image uploaded successfully');
            //Enregistrer l'URL de l'image dans la base de donnée
        }
    };
    (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} 
    <Button title="Choisir une image" onPress={pickImage} /> 
    <Button title="Uploader l'image" onPress={uploadImage} /> 
    </View>)
}



