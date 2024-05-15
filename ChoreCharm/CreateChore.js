import { StyleSheet, Text, View, Button, Image} from "react-native";
import hammer from './assets/Hammer.png';


export const CreateChore = ({ navigation }) => {
  return (
    <View style={styles.container}> 
      <Text style = {styles.txt1}>Create Household</Text>
      {/* <View style ={styles.button}>
        <Text style = {styles.txt2}>Create Household</Text>
      </View> */}
      
        <View style={[styles.txt2, {alignSelf: 'flex-start'},]}>
          <Text style = {styles.txt2}>my rooms:</Text>
        </View>

        <View style={[styles.txt3, {alignSelf: 'baseline'},]}> 
          <Text style = {styles.txt3}>You currently have no rooms in your chore space. Click the blue "Add Room" button to add rooms.</Text>
        </View>
        
        <Image source = {hammer}/>
      
      <View style ={styles.button}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login', {name: 'Login screen'}) }
          color="#000000"
        />
      </View> 
     <View style ={styles.addRoomButton}>
        <Text
        style={styles.addRoomText}
          color="#FFFFFF"
        >Add Room</Text>
     </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
    flexDirection: 'column',
    padding: 16,
    gap: 8

  },
  txt1: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 28,
    fontFamily: 'Titan One',
    fontWeight: "bold",
    letterSpacing: 0.56,
    color: '#456EBD',
  },
  txt2:{
    justifyContent: 'flex-start',
    color: 'black',
    fontSize: 20, 
    fontWeight: 'bold',
    paddingTop: 5,
    

  },

  txt3:{
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 400,
    fontFamily: 'Montserrat',
    color: "black",
    paddingBottom: 48,
    paddingTop: 0.1,
  
  },
  addRoomButton:{
    justifyContent: 'center',
    width:'100%',
    padding: 12,
    borderwidth: 1,
    borderColor: 'black',
    backgroundColor: '#456EBD',
    borderRadius: 20,
    marginTop: 'auto'
  }
,addRoomText: {
  color: 'white',
  fontSize: 16,
  textAlign: 'center',
}

});



/*
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
*/ 
