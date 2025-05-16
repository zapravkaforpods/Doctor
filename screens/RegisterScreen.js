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
export const db = firestore();
import { collection, addDoc } from "firebase/firestore";
import auth from "@react-native-firebase/auth"; // Імпорт auth з @react-native-firebase/auth

const countryFlags = [
  { name: "English", code: "gb", emoji: "🇬🇧" },
  { name: "Deutsch", code: "de", emoji: "🇩🇪" },
  { name: "Polski", code: "pl", emoji: "🇵🇱" },
  { name: "Україна", code: "ua", emoji: "🇺🇦" },
];

const languages = [
  { name: "English", code: "en", emoji: "🇬🇧" },
  { name: "Deutsch", code: "de", emoji: "🇩🇪" },
  { name: "Polski", code: "pl", emoji: "🇵🇱" },
  { name: "Українська", code: "ua", emoji: "🇺🇦" },
];

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [country, setCountry] = useState(null);
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState(languages[3]); // Default to Ukrainian
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  const [registrationError, setRegistrationError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegistration = async () => {
    setRegistrationError("");
    if (!fullName.trim()) {
      setRegistrationError("Будь ласка, введіть ваше повне ім'я.");
      return;
    }
    if (!email.trim()) {
      setRegistrationError("Будь ласка, введіть вашу електронну пошту.");
      return;
    }

    setIsRegistering(true);
    try {
      const registrationsCollectionRef = collection(db, "registrations");
      await addDoc(registrationsCollectionRef, {
        fullName: fullName,
        email: email,
        country: country ? country.name : null,
        language: language ? language.name : null,
        phone: phone.trim() || null,
        registrationDate: new Date(),
      });
      Alert.alert("Успішно", "Вашу реєстрацію завершено!");
      setFullName("");
      setEmail("");
      setPhone("");
      setCountry(null);
      setLanguage(languages[3]); // Скинути мову до укр. після успіху
      // Можна додати перехід на інший екран тут, наприклад, navigation.navigate("HomeScreen");
    } catch (error) {
      console.error("Помилка реєстрації:", error);
      setRegistrationError("Не вдалося завершити реєстрацію.");
    } finally {
      setIsRegistering(false);
    }
  };

  const openCountryModal = () => {
    setIsCountryModalVisible(true);
  };

  const closeCountryModal = () => {
    setIsCountryModalVisible(false);
  };

  const openLanguageModal = () => {
    setIsLanguageModalVisible(true);
  };

  const closeLanguageModal = () => {
    setIsLanguageModalVisible(false);
  };

  const selectCountry = (selectedCountry) => {
    setCountry(selectedCountry);
    closeCountryModal();
  };

  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    closeLanguageModal();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* ... весь інший JSX код ... */}
    </View>
  );
};

// ... весь інший код стилів ...

export default RegisterScreen;
