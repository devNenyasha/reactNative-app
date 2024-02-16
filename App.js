import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Linking } from 'react-native';

export default function ToDoScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [showZesaForm, setShowZesaForm] = useState(false);
  const [meterNumber, setMeterNumber] = useState('');

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleMeterNumberChange = (text) => {
    setMeterNumber(text);
  };

  const handleAmountChange = (text) => {
    setAmount(text);
  };

  const handleSubmit = () => {
    if (!phoneNumber) {
      Alert.alert('This field is required', 'Please enter phone number');
      return;
    }

    if (!amount) {
      Alert.alert('This field is required', 'Please enter amount');
      return;
    }

    if (isNaN(amount) || amount % 10 !== 0) {
      Alert.alert('Invalid amount', 'Amount must be a multiple of 10');
      return;
    }

    // Construct the message
    const message = `SEND ${amount} TO  ${phoneNumber}`;

    // Generate the SMS URL
    const smsUrl = `sms:45776?body=${encodeURIComponent(message)}`;

    // Open the SMS URL
    Linking.openURL(smsUrl);
  };

  const handleBuyAirtime = () => {
    setShowZesaForm(false);
  };

  const handleBuyZesa = () => {
    setShowZesaForm(true);
  };

  const renderForm = () => {
    if (showZesaForm) {
      return (
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Enter Zesa Meter Number" 
            keyboardType="numeric"
            value={meterNumber}
            onChangeText={handleMeterNumberChange}
          />
          <TextInput 
            style={styles.input}
            placeholder="Enter Amount"
            keyboardType='numeric'
            value={amount}
            onChangeText={handleAmountChange}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Enter Phone Number" 
            keyboardType="numeric"
            maxLength={10}
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
          />
          <TextInput 
            style={styles.input}
            placeholder="Enter Amount"
            keyboardType='numeric'
            value={amount}
            onChangeText={handleAmountChange}
          />
        </View>
      );
    }
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

        {/* form */}
        {renderForm()}

        {/* start button */}
        <TouchableOpacity style={styles.startButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>START TOP-UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
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
    backgroundColor: '#FF7400',
    borderRadius: 20,
    padding: 10,
    marginVertical: 20,
  },
});