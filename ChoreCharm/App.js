import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import { LoginScreen } from "./login.js";
import { CreateChore } from "./CreateChore.js";
import { AddRoom } from "./AddRoom.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from 'react';
import BotNavBar from "./Components/BotNavBar.js";
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();

function App() {

  return <BotNavBar />
  
}

export default App;

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style ={styles.button}>
    <Button
      title="Go to Create Chore Space"
      onPress={() => navigation.navigate('CreateChoreSpace', {name: 'CreatChoreSpace'}) }
      color="#000000"
    />
     </View>
     </View>
  ) ;
};
const Create = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
  },

  button: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#FCF6E5",
    height: "20%",
    width: "70%",
    margin: "2%",
    borderRadius: 10,
  },
});
