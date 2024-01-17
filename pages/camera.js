import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Dimension, View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { Camera, CameraType, } from "expo-camera";
import { Video } from "expo-av";
import * as MediaLibrary from "expo-media-library";
import Button from './src/components/Button';
import { StatusBar } from "expo-status-bar";

export default function camera({ navigation }) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, [])

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch (e) {
                console.log(e);
            }
        }
    }

    if (hasCameraPermission === false) {
        return <Text>Pas d'accès à la caméra</Text>
    }

    return (
        <View style={styles.container}>
            {!image ?
                <Camera
                    style={styles.camera}
                    type={type}
                    flashMode={flash}
                    ref={cameraRef}
                >

                </Camera>
                :
                <Image source={{ uri: image }} style={styles.camera} />
            }
            <View>
                {image ?
                    <View style={{
                        flexDirection: 'row',
                        justifyContent:'space-between',
                        paddingHorizontal : 50, 
                    }}>
                        <Button title={''} icon="retweet" onPress={() => setImage(null)}/>
                        <Button title={''} icon="check"/>
                    </View>
                    :
                    <Button title={''} icon="circle" onPress={takePicture} />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        paddingBottom: 20
    },
    camera: {
        flex: 1,
        borderRadius: 20,

    },
}
)

