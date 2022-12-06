import { View, Text, Touchable, Image } from 'react-native'
import React, { useState } from 'react'
import Find from './Find'
import Booking from './Booking'
import Account from './Account'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ParkingDetails from './ParkingDetails'
import BookingDetails from './BookingDetails'


const Home = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View style={{ flex: 1 }}>
            {selectedTab == 0 ? (
                <Find />
            ) : selectedTab == 1 ? (
                <Booking />
            ) : (
                <Account />
            )
            }
            <View
                style={{
                    position: 'absolute',
                    bottom: 1,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent:'space-evenly',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    elevation: 5,
                }}>
                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft:20
                    }}
                    onPress={() => {
                        setSelectedTab(0);
                    }}
                >
                    <Image
                        source={require('../assets/find.png')}
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: selectedTab == 0 ? '#FA8128' : '#000'
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft:10
                    }}
                    onPress={() => {
                        setSelectedTab(1);
                    }}
                >
                    <Image
                        source={require('../assets/booking.png')}
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: selectedTab == 1 ? '#FA8128' : '#000'
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                    }}
                    onPress={() => {
                        setSelectedTab(2);
                    }}
                >
                    <Image
                        source={require('../assets/account.png')}
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: selectedTab == 2 ? '#FA8128' : '#000'
                        }}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Home