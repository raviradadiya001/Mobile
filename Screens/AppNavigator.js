import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../user/Splash'
import Login from '../user/Login'
import Signup from '../user/Signup'
import Home from '../user/Home'
import Find from '../user/Find'
import Booking from '../user/Booking'
import Account from '../user/Account'
import ParkingDetails from '../user/ParkingDetails'
import BookingDetails from '../user/BookingDetails'
import MyVehicles from '../user/MyVehicles'
import AddNewVehicles from '../user/AddNewVehicles'

export default function AppNavigator() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Splash"
                    component={Splash}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Login"
                    component={Login}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Signup"
                    component={Signup}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={Home}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Find"
                    component={Find}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Booking"
                    component={Booking}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Account"
                    component={Account}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="ParkingDetails"
                    component={ParkingDetails}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="BookingDetails"
                    component={BookingDetails}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="MyVehicles"
                    component={MyVehicles}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="AddNewVehicles"
                    component={AddNewVehicles}
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}