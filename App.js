import React, { useState } from "react"; // Import useState for managing state
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  TextInput, 
  ScrollView,
} from "react-native"; // Import necessary components from react-native

const App = () => {
  const [text, setText] = useState(""); // State to store user input text

  // Alert the user input (`text` state's value)
  const alertMyText = () => {
    Alert.alert(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder="Type Something Here"
      />
      <Text style={styles.textDisplay}>You wrote: {text}</Text>

      {/* Replace Button with TouchableOpacity */}
      <TouchableOpacity style={styles.button} onPress={alertMyText}>
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>

      <ScrollView>
        <Text style={{ fontSize: 110 }}>
          This text is so big! And so long! You have to scroll!
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bfbcc2",
  },
  textInput: {
    width: "88%",
    borderWidth: 1,
    height: 50,
    padding: 10,
    marginTop: 100, // Add margin to move it down
  },
  textDisplay: {
    height: 50,
    lineHeight: 50,
  },
  button: {
    marginTop: 20, // Add some margin to separate the button from other elements
    padding: 10, // Add padding inside the button
    backgroundColor: "#2f4254", // Button background color
    borderRadius: 5, // Rounded corners
  },
  buttonText: {
    color: "white", // Set the font color for the button text
    textAlign: "center", // Center the text
  },
});

export default App; // Export the App component
