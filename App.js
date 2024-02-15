import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Navbar from './components/Navbar';
const ToDoScreen = () => {
  return (
    
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.heading}>JUSAMUSHA</Text>
      <Text>Who are you sending top-up to?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Airtime</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Zesa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter Phone Number" />
        <TextInput style={styles.input} placeholder="Enter Amount" />
      </View>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.buttonText}>START TOP-UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1E1A3C',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  startButton: {
    backgroundColor: '#1E1A3C',
    borderRadius: 20,
    padding: 10,
    marginVertical: 20,
  },
});

export default ToDoScreen;