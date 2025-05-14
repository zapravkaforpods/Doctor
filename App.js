import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import { firebaseConfig } from "./firebaseConfig"; // Переконайтеся, що шлях правильний
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RegisterDoctor from "./screens/RegisterDoctor";
import LoginScreen from "./screens/LoginScreen";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

const App = () => {
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
