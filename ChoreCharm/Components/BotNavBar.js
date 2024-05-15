import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { LoginScreen } from "../login.js";
import { CreateChore } from "../CreateChore.js";
import { AddRoom } from "../AddRoom.js";


export default function BotNavBar(){

    const Stack = createStackNavigator();

    const [activeScreen, setActiveScreen] = useState('Login');
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateChoreSpace" component={CreateChore} />
        <Stack.Screen name="Add Room" component={AddRoom} />
      </Stack.Navigator>
      {(
        <View style={styles.bottomNavigation}>
          <Button
            title="Rooms"
            onPress={() => setActiveScreen('Main')} /*need to change where it goes to*/ 
          />
          <Button
            title="My Tasks"
            onPress={() => setActiveScreen('AddRoom')} /*need to change where it goes to*/ 
          />
          <Button
            title="Profile"
            onPress={() => setActiveScreen('AddRoom')} /*need to change where it goes to*/ 
          />
        </View>
      )}
    </NavigationContainer>
  );
  
}
const styles = StyleSheet.create({
    
    bottomNavigation: {
      flexDirection: 'row',
      font: 'Montserrat',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#FBF7F3',
      position: 'absolute',
      bottom: 0,
      color: "#456EBD",
      left: 0,
      right: 0,
      height: 100,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },

  });
