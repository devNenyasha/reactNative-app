import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BuyAirtimeForm from './components/BuyAirtimeForm';
import BuyZesaForm from './components/BuyZesaForm';


export default function ToDoScreen() {
  const [showZesaForm, setShowZesaForm] = useState(false);

  const handleBuyAirtime = () => {
    setShowZesaForm(false);
  };

  const handleBuyZesa = () => {
    setShowZesaForm(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>JUSAMUSHA</Text>
        <Text>Who are you sending top-up to?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBuyAirtime}>
            <Text style={styles.buttonText}>Buy Airtime</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleBuyZesa}>
            <Text style={styles.buttonText}>Buy Zesa</Text>
          </TouchableOpacity>
        </View>

        {/* Render appropriate form based on showZesaForm state */}
        {showZesaForm ? <BuyZesaForm /> : <BuyAirtimeForm />}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    paddingHorizontal: 20, // Add horizontal padding
    paddingBottom: 20, // Add bottom padding
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center', // Center horizontally
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
    backgroundColor: '#FF7400',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },


  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

