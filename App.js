import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Users from './pages/users';
import Sub from './pages/subscribe';
import profiledit from './pages/profiledit';
import { NavigationContainer } from '@react-navigation/native';
import camera from './pages/camera';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // <Home/>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Users" options={{headerShown:false}} component={Users}/>
        <Stack.Screen name="Sub" options={{headerShown:false}} component={Sub}/>
        <Stack.Screen name="Profiledit" options={{headerShown:false}} component={profiledit}/>
        <Stack.Screen name="Camera" options={{headerShown:false}} component={camera}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
