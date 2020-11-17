import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export function OrderScreen(props: any) {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Order Screen</Text>
            <Text>View Your Order List</Text>
        </View>
    );
    
}
