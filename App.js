import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RegisterDoctor from "./screens/RegisterDoctor";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // Ініціалізація Firebase App (якщо ще не ініціалізовано)
    if (!firebase.apps.length) {
      firebase.initializeApp({}); // Передаємо пустий об'єкт, оскільки конфігурація підтягується з google-services.json
      console.log("Firebase App ініціалізовано");
    }
  }, []);

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
