import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; // Або будь-який інший набір іконок, який ви використовуєте
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
	const navigation = useNavigation();
  const [country, setCountry] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegistration = () => {
    // Тут буде логіка реєстрації
    console.log('Реєстрація:', { country, fullName, email, phone });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoContainer}>
        {/* Замініть на свій компонент логотипу або Image */}
        <View style={styles.logoPlaceholder} />
      </View>

      <Text style={styles.title}>Зареєструватися</Text>
      <Text style={styles.subtitle}>Почніть турботу про себе — з реєстрації</Text>

      <TouchableOpacity style={styles.selectCountryButton} onPress={() => console.log('Вибір країни')}>
        <Text style={styles.selectCountryText}>{country || 'Обрати країну проживання'}</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#B0BEC5" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Ведіть Ваше Ім'я"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#B0BEC5" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Ведіть Вашу електронну пошту"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={20} color="#B0BEC5" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Необов'язково"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
        <Text style={styles.registerButtonText}>Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 80, // Додайте трохи відступу зверху
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoPlaceholder: {
    width: 80,
    height: 40,
    backgroundColor: '#ADD8E6', // Замініть на свій стиль логотипу
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
	fontFamily: 'Mont-Bold',
    color: '#212121',
  },
  subtitle: {
    fontSize: 16,
    color: '#757575',
	fontFamily: 'Mont-Regular',
	 marginBottom: 20,
  },
  selectCountryButton: {
    backgroundColor: '#E0F7FA',
    borderRadius: 555,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 339,
	height: 52,
    alignItems: 'center',
    marginBottom: 15,
	
  },
  selectCountryText: {
    color: '#00ACC1',
    fontSize: 16,
	fontFamily: 'Mont-Medium',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
    borderRadius: 555,
    paddingHorizontal: 15,
    marginBottom: 15,
	width: 339,
	height: 52,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: '#212121',
  },
  registerButton: {
    backgroundColor: '#00BCD4',
    borderRadius: 555,
    paddingVertical: 15,
	width: 339,
	height: 52,    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default RegisterScreen;