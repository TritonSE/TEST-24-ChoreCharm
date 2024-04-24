import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import { LoginScreen } from "./login.js";
import { CreateChore } from "./CreateChore.js";
import { AddRoom } from "./AddRoom.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateChoreSpace" component={CreateChore} />
        <Stack.Screen name="Add Room" component={AddRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
