import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export function Payment(props: any) {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Payment</Text>
            <Text>View Your Payment</Text>
        </View>
    );
    
}