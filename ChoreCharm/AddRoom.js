import { Pressable, StyleSheet, Text, View } from "react-native";

export const AddRoom = ({ navigation }) => {
  return (
    <View style={styles.outermost}>
      <Text style={styles.addRoomText}>Add Room</Text>
      <View style={styles.mainContainer}>
        <View style={styles.roomInfoContainer}>
          <Text>Input Text</Text>
            <View style={styles.roomInfoColor}>
              <Text>Colors:</Text>
              <Text>Pink, blue, gren</Text>
            </View>
          <View style={styles.roomInfoIcon}>
            <Text>Icons:</Text>
            <Text>Couch, bed</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.discardButton}
            title="Discard"
          >
            <Text style={styles.discardButtonText}>Discard</Text>
          </Pressable>
          <Pressable
            style={styles.addButton}
            title="Add"
          >
            <Text style={styles.addButtonText}>Add</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}; 

const styles = StyleSheet.create({
  outermost: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    
  },

  addRoomText:{
    color: "black",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
  },

  roomInfoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "Black"
  },

  roomInfoColor: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  roomInfoIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },

  discardButton: {
    backgroundColor: "white",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#456EBD",
  },
  
  discardButtonText:{
    color: "#456EBD",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
  },

  addButton: {
    backgroundColor: "#456EBD",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 5,
  },

  addButtonText: {
    color: "white",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
  }
});
