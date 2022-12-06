import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonButton from '../Common/CommonButton'

const BookingDetails = () => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            width: 30,
                            height: 30,
                            alignSelf: 'flex-start',
                        }}
                        onPress={() => {
                            alert('Pressed')
                        }}
                    >
                        <Image
                            source={require('../assets/back.png')}
                            style={{
                                marginLeft: 20,
                                marginTop: 10,
                                width: 25,
                                height: 25,
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <Image
                        source={require('../assets/success.png')}
                        style={{
                            marginTop: 20,
                            width: 100,
                            height: 100,
                            alignSelf: 'center'
                        }}
                    />
                    <Text style={{
                        alignSelf: 'center',
                        color: '#000',
                        marginTop: 15,
                        fontSize: 15,
                        fontWeight: '500',
                    }}>
                        Great! You've Successfully Booked Parking Slot.
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                }}>
                    <View style={{
                        flex: 1
                    }}>
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 15,
                            marginTop: 15,
                            fontSize: 18,
                            fontWeight: '600',

                        }}>
                            Booking Details
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 15,
                            marginTop: 15,
                            fontSize: 15,
                            fontWeight: '300',
                        }}>
                            Ticket Number:
                        </Text>
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 15,
                            marginTop: 5,
                            fontSize: 15,
                            fontWeight: '600',
                        }}>
                            AABB1122
                        </Text>
                    </View>

                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 15,
                            marginTop: 15,
                            fontSize: 15,
                            fontWeight: '300',
                        }}>
                            Vehicle:
                        </Text>
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 15,
                            marginTop: 5,
                            fontSize: 15,
                            fontWeight: '600',
                        }}>
                            Nissan Altima
                        </Text>
                    </View>

                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 15,
                            marginTop: 15,
                            fontSize: 15,
                            fontWeight: '300',
                        }}>
                            Parking Spot:
                        </Text>
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 15,
                            marginTop: 5,
                            fontSize: 15,
                            fontWeight: '600',
                        }}>
                            MaRS West Tower 661, University Ave, Toronto
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        marginLeft: 50
                    }}>
                        <View style={{
                            flex: 1,
                        }}>
                            <Text style={{
                                alignContent: 'flex-start',
                                color: '#000',
                                marginTop: 15,
                                fontSize: 15,
                                fontWeight: '300',
                            }}>
                                Enter After
                            </Text>
                            <Text style={{
                                alignContent: 'flex-start',
                                color: '#000',
                                marginTop: 5,
                                fontSize: 15,
                                fontWeight: '600',
                            }}>
                                12:30 PM
                            </Text>
                            <Text style={{
                                alignContent: 'flex-start',
                                color: '#000',
                                marginTop: 5,
                                fontSize: 15,
                                fontWeight: '600',
                            }}>
                                Mon, Oct 17
                            </Text>
                        </View>

                        <View style={{
                            flex: 1,
                        }}>
                            <Text style={{
                                alignContent: 'flex-start',
                                color: '#000',
                                marginTop: 40,
                                fontSize: 15,
                                fontWeight: '300',
                            }}>
                                - - - - - - - -
                            </Text>
                        </View>

                        <View style={{
                            flex: 1,
                        }}>
                            <Text style={{
                                alignContent: 'flex-start',
                                color: '#000',
                                marginTop: 15,
                                fontSize: 15,
                                fontWeight: '300',
                            }}>
                                Exit Before
                            </Text>
                            <Text style={{
                                alignContent: 'flex-start',
                                color: '#000',
                                marginTop: 5,
                                fontSize: 15,
                                fontWeight: '600',
                            }}>
                                12:30 PM
                            </Text>
                            <Text style={{
                                alignContent: 'flex-start',
                                color: '#000',
                                marginTop: 5,
                                fontSize: 15,
                                fontWeight: '600',
                            }}>
                                Mon, Oct 17
                            </Text>
                        </View>
                    </View>

                    <View style={{
                        flex: 1
                    }}>
                        <CommonButton
                            title={'Get Direction'}
                            bgColor={'#FA8128'}
                            textColor={'#fff'}
                            onPress={() => {

                            }}
                        />

                        <TouchableOpacity
                            style={{
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '70%',
                                height: 60,
                                alignSelf: 'center',
                                borderRadius: 10,
                                marginTop: 40
                            }}
                            onPress={() => {
                                onPress();
                            }}
                        >
                            <Text style={{
                                color: '#FA8128',
                                fontSize: 20,
                                fontWeight: '600'
                            }}
                            > Not Now </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default BookingDetails