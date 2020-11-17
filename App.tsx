import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainScreen } from './MainScreen';
import { HomeScreen } from './HomeScreen';
import { OrderScreen } from './OrderScreen';
import { CustomerScreen } from './CustomerScreen';
import { Profile } from './Profile';
import { Payment } from './Payment';
import { BankAccount } from './BankAccount';
import { InventoryList } from './InventoryList';
import { Notifications } from './Notifications';
import { Refer } from './Refer';
import { Security } from './Security';
import { HelpSupport } from './Help&Support';
import { AboutUs } from './AboutUs';
import { Terms } from './Terms';
import { Privacy } from './Privacy';
import { AddBusiness } from './AddBusiness';
import { AntDesign } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Profile" component={Profile} />
				<Drawer.Screen name="Home" component={MainScreen} />
				<Drawer.Screen name="Customer" component={CustomerScreen} />
				<Drawer.Screen name="Order" component={OrderScreen} />
				<Drawer.Screen name="Payment" component={Payment} />
				<Drawer.Screen name="BankAccount" component={BankAccount} />
				<Drawer.Screen name="InventoryList" component={InventoryList} />
				<Drawer.Screen name="Notifications" component={Notifications} />
				<Drawer.Screen name="Refer" component={Refer} />
				<Drawer.Screen name="Security" component={Security} />
				<Drawer.Screen name="Help&Support" component={HelpSupport} />
				<Drawer.Screen name="AboutUs" component={AboutUs} />
				<Drawer.Screen name="Terms" component={Terms} />
				<Drawer.Screen name="Privacy" component={Privacy} />
			</Drawer.Navigator>
		</NavigationContainer>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});