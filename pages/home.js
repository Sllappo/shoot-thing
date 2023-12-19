import React, { useEffect, useState } from 'react';
import Users from './users';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { Camera } from 'expo-camera';

export default function Home({ navigation }) {
    const [hasAudioPermission, setHasAudioPermission] = useState(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [record, setRecord] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);


    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
            const audioStatus = await Camera.requestMicrophonePermissionsAsync();
            setHasAudioPermission(audioStatus.status === 'granted');
        })();
    }, []);

    const takeVideo = async () => {
        if (camera) {
            const data = await camera.recordAsync()
            setRecord(data.uri);
            console.log(data.uri);
        }
    }

    const stopVideo = async () => {
        camera.stopRecording();
    }

    return (
        <View style={styles.container}>
            <View style={{
                flex: 1, borderColor: "red", borderWidth: 2, height: "100%", width: "100%"
            }}>
                <Camera
                    ref={ref => setCamera(ref)}
                    style={{
                        flex: 1,
                    }}
                    type={type}
                    ratio={'4:3'} />
            </View>
            <Button
                title="Flip Video"
                onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                    );
                }}>
            </Button>
            <Button title="Take video" onPress={() => takeVideo()} />
            <Button title="Stop Video" onPress={() => stopVideo()} />
            {/* <View style={{ justifyContent: "center", height: "70%", width: 245, }}>
                <Text style={styles.text}>
                    Shoot Thing
                </Text>
                <View style={styles.containerhome}>
                    <Pressable style={styles.submit} onPress={() => navigation.replace('Users')}>
                        <Text style={styles.button}>CONNEXION</Text>
                    </Pressable>
                    <Pressable style={styles.submit2} onPress={() => navigation.replace('Sub')}>
                        <Text style={styles.button}>INSCRIPTION</Text>
                    </Pressable>
                </View>
            </View> */}
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
    containerhome: {

        bottom: 0,
        position: "absolute",
    },
    text: {
        fontSize: 32,
        justifyContent: 'center',
        textAlign: 'center',
        color: "#7D2AE7",
        fontWeight: '900',

    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    submit: {
        width: 245,
        height: 63,
        flexShrink: 0,
        borderRadius: 36,
        borderWidth: 4,
        borderColor: "#FFF",
        backgroundColor: "#A05BE34D",
        justifyContent: "center",
        marginTop: 20,
    },
    submit2: {
        width: 245,
        height: 63,
        flexShrink: 0,
        borderRadius: 36,
        borderWidth: 4,
        borderColor: "#FFF",
        backgroundColor: "#C9B9D93D",
        justifyContent: "center",
        marginTop: 20,

    },
    button: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "800",
    },
});