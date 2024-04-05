import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from "expo-image-picker";



const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      } else {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          quality: 1,
        });
        if (!result.canceled) {
          setSelectedImage(result.assets[0].uri);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage.uri }}
          style={uploadPhotoStyles.image}
        />
      )}
      <TouchableOpacity
        style={uploadPhotoStyles.container}
        onPress={pickImageAsync}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </>
  );
};

const uploadPhotoStyles = StyleSheet.create({
  container: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
    borderRadius: 50,
  },
});

export default function UploadImages({navigation}) {
  return (
    <View style={styles.container}>
      <UploadImage />
      <Text>Upload photo</Text>

      <Image source={"<SERVER_HOST>/images/<IMAGE_NAME>"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
