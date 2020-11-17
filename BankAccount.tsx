import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export function BankAccount(props: any) {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>BankAccount</Text>
            <Text>View Your BankAccount</Text>
        </View>
    );
    
}