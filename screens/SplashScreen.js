import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "../assets/icon.svg";
import Appname from "../assets/Main/appname.svg";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Welcome");
    }, 1000);
  }, [navigation]); // Додайте navigation до списку залежностей useEffect

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Icon width={210} height={210} /> {/* Налаштуйте розмір логотипа */}
      </View>
      <View style={styles.appNameContainer}>
        <Text style={styles.appName}>DOCTOR</Text>
        <Appname width={40} height={40} style={styles.shieldIcon} />{" "}
        {/* Налаштуйте розмір іконки щита */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    backgroundColor: "white",
    alignItems: "center",
  },
  appNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  appName: {
    fontSize: 48,
    fontFamily: "Mont-SemiBold",
    color: "#333",
    marginRight: 10,
  },
  shieldIcon: {
    // Додаткові стилі для позиціонування іконки, якщо потрібно
  },
});

export default SplashScreen;
