import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { OrderScreen } from './OrderScreen';
import { CustomerScreen } from './CustomerScreen';
import { HomeScreen } from './HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

export function MainScreen(props: any) {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "ios-home";

                    if(route.name === 'Home') {
                    }
                    else if (route.name === 'Order') {
                        iconName = 'ios-list';
                    } else if (route.name === 'Customer') {
                        iconName = 'ios-call';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                

            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Order" component={OrderScreen} />
            <Tab.Screen name="Customer" component={CustomerScreen} />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});