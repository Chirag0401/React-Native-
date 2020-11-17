import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export function Profile(props: any) {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Profile</Text>
            <Text>View Your Profile</Text>
            <AntDesign name="profile" size={24} color="black" />
        </View>
    );
    
}