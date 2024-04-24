import { StyleSheet, Text, View, Button} from "react-native";

export const CreateChore = ({ navigation }) => {
  return (
    <View style={styles.container}> 
      <Text style = {styles.txt1}>Create Household</Text>
      {/* <View style ={styles.button}>
        <Text style = {styles.txt2}>Create Household</Text>
      </View> */}
      
        <View style={myRoomsstyles.txt2}>
          <Text style = {myRoomsstyles.txt2}>my rooms</Text>
        </View>

        <View style={styles.container}> 
          <Text style = {styles.txt3}>You currently have no rooms in your chore space. Click the blue "Add Room" button to add rooms.</Text>
        </View>
   
      <View style ={styles.button}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login', {name: 'Login screen'}) }
          color="#000000"
        />
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  txt1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    color: "blue",
  },

  // txt2: {
  //   flex: 1,
  //   justifyContent: "space-evenly",
  //   alignItems: "flex-start",
  //   fontSize: 20,
  //   fontFamily: 'Times New Roman',
  //   fontWeight: 'bold',
  //   color: "blue",
  // },

  txt3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    color: "blue",
  },

});

const myRoomsstyles = StyleSheet.create({

txt2: {
  flex: 1,
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  fontSize: 20,
  fontFamily: 'Times New Roman',
  fontWeight: 'bold',
  color: "blue",
},
});
