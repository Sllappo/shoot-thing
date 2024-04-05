import Users from './users';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { supabase } from '../supabase.js';



export default function Camera() {
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
    return(<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} 
    <Button title="Choisir une image" onPress={pickImage} /> 
    <Button title="Uploader l'image" onPress={uploadImage} /> 
    </View>)
}