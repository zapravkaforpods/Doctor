// import React, { useEffect } from "react";
// import { StyleSheet, View, Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Icon from "../assets/icon.svg"; // Removed - causing error.  If you need this, ensure it's correctly set up.
// import Appname from "../assets/Main/appname.svg"; // Removed - causing error.  If you need this, ensure it's correctly set up.

// const SplashScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Icon width={210} height={210} />
//       </View>
//       <View style={styles.appNameContainer}>
//         {" "}
//         <Text style={styles.appName}>DOCTOR</Text>
//         <Appname width={40} height={40} style={styles.shieldIcon} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logoContainer: {
//     backgroundColor: "white",
//     alignItems: "center",
//   },
//   logoText: {
//     fontSize: 60,
//     fontWeight: "bold",
//     color: "#00BFFF",
//   },
//   appNameContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   appName: {
//     fontSize: 48,
//     fontFamily: "Mont-SemiBold", // Make sure this font is added correctly. React Native might not have this by default.
//     color: "#333",
//   },
//   shieldIcon: {},
// });

// export default SplashScreen;
