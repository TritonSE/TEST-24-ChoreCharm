import { StyleSheet, Text, View } from "react-native";

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
