import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Users from './pages/users';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // <Home/>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
        <Stack.Screen name="Users" options={{headerShown:false}} component={Users}/>
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
