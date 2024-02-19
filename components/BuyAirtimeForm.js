import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, Linking, StyleSheet } from 'react-native';

const BuyAirtimeForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
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

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter Phone Number"
                keyboardType="numeric"
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
            <TouchableOpacity style={styles.startButton} onPress={handleSubmit}>
                <Text style={styles.buttonText}>START TOP-UP</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default BuyAirtimeForm;
