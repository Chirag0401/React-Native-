import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export function HomeScreen(props: any) {
    return (
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Home Screen</Text>
            <Button
                title="Add Business"
                onPress={() => {
                    props.navigation.navigate('AddBusiness' ,{
                    });
                }
                }
            />
        </View>
    );
}