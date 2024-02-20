import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, Linking, StyleSheet } from 'react-native';

const BuyZesaForm = () => {
    const [meterNumber, setMeterNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handleMeterNumberChange = (text) => {
        setMeterNumber(text);
    };

    const handleAmountChange = (text) => {
        setAmount(text);
    };

    const handleSubmit = () => {
        if (!meterNumber || !/^\d{9,13}$/.test(meterNumber)) {
            Alert.alert('Invalid meter number', 'Please enter a valid Zesa meter number with 9 to 13 digits');
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
        const message = `JUSA ${amount} ZESA for  ${meterNumber}`;

        // Generate the SMS URL
        const smsUrl = `sms:45776?body=${encodeURIComponent(message)}`;

        // Open the SMS URL
        Linking.openURL(smsUrl);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter Zesa Meter Number"
                keyboardType="numeric"
                pattern="^\d{9,13}$"
                value={meterNumber}
                title="Please enter a meter number with 9 to 13 digits."
                onChangeText={handleMeterNumberChange}
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
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default BuyZesaForm;
