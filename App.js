import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Users from './pages/users';
import Sub from './pages/subscribe';
import profiledit from './pages/profiledit';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './pages/settings';
import Publi from './pages/publi';
import Login from './pages/loginpage';
import 'expo-dev-client';
import { AuthProvider } from './providers/AuthProvider';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // <Home/>
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
          {<Stack.Screen name="Users" options={{ headerShown: false }} component={Users} />}
          {<Stack.Screen name="Sub" options={{ headerShown: false }} component={Sub} />}
          {<Stack.Screen name="Profiledit" options={{ headerShown: false }} component={profiledit} />}
          {<Stack.Screen name="Settings" options={{ headerShown: false }} component={Settings} />}
          {<Stack.Screen name="Publi" options={{ headerShown: false }} component={Publi} />}
          {<Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
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
