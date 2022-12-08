import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonButton from '../Common/CommonButton'
import { useNavigation } from '@react-navigation/native'

const BookingHistory = () => {
    const navigation = useNavigation();
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
                            navigation.goBack();
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
                    <Text style={{
                        alignSelf: 'center',
                        color: '#000',
                        marginTop: 25,
                        fontSize: 25,
                        fontWeight: '600',
                    }}>
                        Booking History
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#fff',
                            alignItems: 'flex-start',
                            width: '85%',
                            height: 150,
                            borderRadius: 10,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                        }}
                            disabled={true}
                        >
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 18,
                                        fontWeight: '600',
                                        marginLeft: 20,
                                        marginTop: 5
                                    }}>
                                        MaRS West Tower
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 14,
                                        fontWeight: '400',
                                        marginLeft: 20,
                                    }}>
                                        661 University Avenue
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 14,
                                        fontWeight: '400',
                                        marginLeft: 20,
                                        marginTop: 10
                                    }}>
                                        Dec 3,2022, 10:00-20:00
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 14,
                                        fontWeight: '500',
                                        marginLeft: 20,
                                    }}>
                                        Total: $5
                                    </Text>
                                </View>
                                <View style={{
                                    flex: 1
                                }}>
                                    <Image
                                        source={require('../assets/parkinglot.png')}
                                        style={{
                                            alignSelf: 'flex-end',
                                            marginRight: 10,
                                            width: 100,
                                            height: 100,
                                            marginTop:10
                                        }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#fff',
                            alignItems: 'flex-start',
                            width: '85%',
                            height: 150,
                            borderRadius: 10,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                        }}
                            disabled={true}
                        >
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 18,
                                        fontWeight: '600',
                                        marginLeft: 20,
                                        marginTop: 5
                                    }}>
                                        MaRS West Tower
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 14,
                                        fontWeight: '400',
                                        marginLeft: 20,
                                    }}>
                                        661 University Avenue
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 14,
                                        fontWeight: '400',
                                        marginLeft: 20,
                                        marginTop: 10
                                    }}>
                                        Dec 3,2022, 10:00-20:00
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 14,
                                        fontWeight: '500',
                                        marginLeft: 20,
                                    }}>
                                        Total: $5
                                    </Text>
                                </View>
                                <View style={{
                                    flex: 1
                                }}>
                                    <Image
                                        source={require('../assets/parkinglot.png')}
                                        style={{
                                            alignSelf: 'flex-end',
                                            marginRight: 10,
                                            width: 100,
                                            height: 100,
                                            marginTop:10
                                        }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default BookingHistory