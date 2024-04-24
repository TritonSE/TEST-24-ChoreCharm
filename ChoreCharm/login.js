import { StyleSheet, Text, View, Button} from "react-native";

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.txt1}>Login</Text>
      <View style ={styles.button}>
    <Button
      title="Go to Create Chore Space"
      onPress={() => navigation.navigate('CreateChoreSpace', {name: 'CreatChoreSpace'}) }
      color="#000000"
    />
     </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
