import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
// import LoginScreen from '../Screens/LoginScreen';

const Stack = createNativeStackNavigator();


navigationOptions = {
  headerShown: false,
  headerTitleStyle: { color: "black" },
  headerStyle: { backgroundColor: "black" },
  headerBackTitleVisible: false,
  headerTintColor: { color: "black" },
  gestureEnabled: false
}



const AppNavigator = ({ initialRouteName }) => (
    <Stack.Navigator initialRouteName={initialRouteName} screenOptions={navigationOptions}>

      {/* <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'LoginScreen' }} />  */}
   </Stack.Navigator>

);

export default AppNavigator;  