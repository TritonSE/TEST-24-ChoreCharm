import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login functionality here
    console.log("Login clicked!");
  };

  const handleSignUp = () => {
    // Handle navigation to sign up screen
    console.log("Sign Up clicked!");
  };

  const handleResetPassword = () => {
    // Handle reset password functionality
    console.log("Reset Password clicked!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          multiline={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          multiline={false}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.linkText}>
          Don't have account? <Text style={styles.link}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResetPassword}>
        <Text style={styles.linkText}>
          Forgot Password? <Text style={styles.link}>Reset Password</Text>
        </Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBF7F3",
  },
  header: {
    fontSize: 40,
    color: "#456EBD",
    fontFamily: 'TitanOne-Regular',
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    width: 260, //vw
    height: 40, //vh
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    fontFamily: "Montserrat",
  },
  loginButton: {
    backgroundColor: "#456EBD",
    paddingVertical: 10,
    paddingHorizontal: 108,
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    marginTop: 10,
    fontSize: 16,
  },
  link: {
    color: "#456EBD",
    textDecorationLine: "underline",
  },
});
