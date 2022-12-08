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
import BookingHistory from '../user/BookingHistory'
import PHome from '../parking_owner/PHome'
import PMain from '../parking_owner/PMain'
import PHistory from '../parking_owner/PHistory'
import PAccount from '../parking_owner/PAccount'
import AddPLot from '../parking_owner/AddPLot'
import ManagePLot from '../parking_owner/ManagePLot'
import ParkingLotDetails from '../parking_owner/ParkingLotDetails'
import AHome from '../admin/AHome'
import ABookingHistory from '../admin/ABookingHistory'
import AParkingOnwer from '../admin/AParkingOnwer'
import AStatistics from '../admin/AStatistics'
import AUser from '../admin/AUser'
import AParkingOwnerDetails from '../admin/AParkingOwnerDetails'

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

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="BookingHistory"
                    component={BookingHistory}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="PHome"
                    component={PHome}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="PMain"
                    component={PMain}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="PHistory"
                    component={PHistory}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="PAccount"
                    component={PAccount}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="AddPLot"
                    component={AddPLot}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="ManagePLot"
                    component={ManagePLot}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="ParkingLotDetails"
                    component={ParkingLotDetails}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="AHome"
                    component={AHome}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="ABookingHistory"
                    component={ABookingHistory}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="AParkingOwner"
                    component={AParkingOnwer}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="AStatistics"
                    component={AStatistics}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="AUser"
                    component={AUser}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="AParkingOwnerDetails"
                    component={AParkingOwnerDetails}
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}