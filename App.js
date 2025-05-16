import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
// import firebase from "@react-native-firebase/app";
// import auth from "@react-native-firebase/auth";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RegisterDoctor from "./screens/RegisterDoctor";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Mont-Regular': require('./assets/Font/static/Montserrat-Regular.ttf'),
    'Mont-Medium': require('./assets/Font/static/Montserrat-Medium.ttf'),
    'Mont-Bold': require('./assets/Font/static/Montserrat-Bold.ttf'),
    'Mont-SemiBold': require('./assets/Font/static/Montserrat-SemiBold.ttf'),
  });

  useEffect(() => {
    // Ініціалізація Firebase App (якщо ще не ініціалізовано)
    // if (!firebase.apps.length) {
    //  firebase.initializeApp(); // Викликаємо без передачі конфігурації
    //  console.log("Firebase App ініціалізовано");
    // }
    console.log("Firebase ініціалізація пропущена для тестування UI");
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RegisterDoctor" component={RegisterDoctor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;