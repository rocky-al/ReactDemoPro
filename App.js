/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from "react";
import { LogBox, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import SpalshScreen from "./src/Screens/SplashScreen";
import AppNavigator from "./src/Navigation/AppNavigator";
import Forms from "./src/Navigation/Screens/Forms";
export default function App() {
  const [initialRouteName, setInitialRouteName] = React.useState("");

  useEffect(() => {

    
    LogBox.ignoreLogs(['new NativeEventEmitter', 'Non-serializable values were found in the navigation state. Check:']); // Ignore log notification by message
 
    LogBox.ignoreAllLogs(); 
  });

 


  return (
    <NavigationContainer independent={true}>
      <Forms />
    </NavigationContainer>
  );
}
