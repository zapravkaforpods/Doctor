import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Svg, Path } from "react-native-svg";
import auth from "@react-native-firebase/auth"; // Імпорт auth з @react-native-firebase/auth

const languages = [
  { name: "English", code: "en", emoji: "🇬🇧" },
  { name: "Deutsch", code: "de", emoji: "🇩🇪" },
  { name: "Polski", code: "pl", emoji: "🇵🇱" },
  { name: "Українська", code: "ua", emoji: "🇺🇦" },
];

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [language, setLanguage] = useState(languages[3]); // Default to Ukrainian
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);

  const handleLogin = async () => {
    setLoginError("");
    if (!email.trim() || !password.trim()) {
      setLoginError("Будь ласка, введіть електронну пошту та пароль.");
      return;
    }

    setIsLoggingIn(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password
      );
      console.log("Успішний вхід:", userCredential.user);
      // Після успішного входу перенаправте користувача
      navigation.navigate("Home"); // Замініть "Home" на назву вашого головного екрану
    } catch (error) {
      console.error("Помилка входу:", error);
      let errorMessage = "Невірні облікові дані.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "Користувача з такою електронною поштою не знайдено.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Невірний пароль.";
      }
      setLoginError(errorMessage);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const openLanguageModal = () => {
    setIsLanguageModalVisible(true);
  };

  const closeLanguageModal = () => {
    setIsLanguageModalVisible(false);
  };

  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    closeLanguageModal();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.languageContainer}>
        <TouchableOpacity
          style={styles.selectLanguageButton}
          onPress={openLanguageModal}
        >
          <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></Path>
            <Path d="M10 11l-5-5 5-5"></Path>
            <Path d="M19 6h-14"></Path>
          </Svg>
          <Text style={styles.selectLanguageText}>
            {language ? `${language.emoji} ${language.name}` : "Мова"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoContainer}>
        <View style={styles.logoPlaceholder} />
      </View>

      <Text style={styles.title}>Вхід</Text>
      <Text style={styles.subtitle}>Почніть турботу про себе</Text>
      <Text style={styles.subtitle2}>Електронна пошта</Text>
      <View style={styles.inputContainer}>
        <Ionicons
          name="mail-outline"
          size={20}
          color="#B0BEC5"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Ведіть Вашу електронну пошту"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <Text style={styles.subtitle2}>Пароль</Text>
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#B0BEC5"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Ведіть Ваш пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        disabled={isLoggingIn}
      >
        <Text style={styles.loginButtonText}>
          {isLoggingIn ? "Вхід..." : "Увійти"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.loginLinkText}>
          Не зареєстровані?
          <Text style={{ fontWeight: "bold" }}> Зареєструватися</Text>
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLanguageModalVisible}
        onRequestClose={closeLanguageModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Виберіть мову</Text>
            {languages.map((item) => (
              <TouchableOpacity
                key={item.code}
                style={styles.countryItem}
                onPress={() => selectLanguage(item)}
              >
                <Text style={styles.countryEmoji}>{item.emoji}</Text>
                <Text style={styles.countryName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeLanguageModal}
            >
              <Text style={styles.textStyle}>Скасувати</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 120,
    paddingHorizontal: 20,
  },
  languageContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 9,
    fontFamily: "Mont-Bold",
    color: "#212121",
  },
  subtitle: {
    fontSize: 16,
    color: "#757575",
    fontFamily: "Mont-Regular",
    marginBottom: 60,
  },
  subtitle2: {
    fontSize: 18,
    alignSelf: "flex-start",
    color: "#2A2A2A",
    fontFamily: "Mont-Medium",
    paddingHorizontal: 20,
  },
  selectLanguageButton: {
    backgroundColor: "transparent",
    borderRadius: 555,
    paddingVertical: 15,
    paddingHorizontal: 0,
    width: "auto",
    height: "auto",
    alignItems: "center",
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  selectLanguageText: {
    color: "#00ACC1",
    fontSize: 16,
    fontFamily: "Mont-Medium",
    marginLeft: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(14, 179, 235, 0.2)",
    borderRadius: 555,
    paddingHorizontal: 15,
    marginBottom: 14,
    width: 339,
    height: 52,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Mont-Regular",
  },
  loginButton: {
    backgroundColor: "#0EB3EB",
    borderRadius: 555,
    paddingVertical: 15,
    width: 339,
    height: 52,
    alignItems: "center",
    marginTop: 8,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
  },
  countryEmoji: {
    fontSize: 24,
    marginRight: 15,
  },
  countryName: {
    fontSize: 18,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  loginLink: { marginTop: 16 },
  loginLinkText: {
    fontSize: 16,
    color: "#757575",
    fontFamily: "Mont-Regular",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoPlaceholder: {
    width: 190,
    height: 190,
    backgroundColor: "#0EB3EB",
    borderRadius: 95,
  },
});

export default LoginScreen;
