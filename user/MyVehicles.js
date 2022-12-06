import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonButton from '../Common/CommonButton'
import { useNavigation } from '@react-navigation/native'

const MyVehicles = () => {
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
                    <Text style={{
                        alignSelf: 'center',
                        color: '#000',
                        marginTop: 25,
                        fontSize: 25,
                        fontWeight: '600',
                    }}>
                        My Vehicles
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
                            height: 70,
                            borderRadius: 10,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                        }}
                            onPress={() => {

                            }}
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
                                        marginTop:10
                                    }}>
                                        Nissan Altima
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 12,
                                        fontWeight: '300',
                                        marginLeft: 20,
                                    }}>
                                        Sedan | CXNE 125
                                    </Text>
                                </View>
                                <View style={{
                                    flex: 1
                                }}>
                                    <Image
                                        source={require('../assets/car.png')}
                                        style={{
                                            alignSelf:'flex-end',
                                            marginRight: 20,
                                            width: 60,
                                            height: 60,
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
                            height: 70,
                            borderRadius: 10,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                        }}
                            onPress={() => {

                            }}
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
                                        marginTop:10
                                    }}>
                                        Toyota Camery
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 12,
                                        fontWeight: '300',
                                        marginLeft: 20,
                                    }}>
                                        Sedan | CXNE 126 
                                    </Text>
                                </View>
                                <View style={{
                                    flex: 1
                                }}>
                                    <Image
                                        source={require('../assets/car.png')}
                                        style={{
                                            alignSelf:'flex-end',
                                            marginRight: 20,
                                            width: 60,
                                            height: 60,
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
                            height: 70,
                            borderRadius: 10,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                        }}
                            onPress={() => {

                            }}
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
                                        marginTop:10
                                    }}>
                                        Honda Civic
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 12,
                                        fontWeight: '300',
                                        marginLeft: 20,
                                    }}>
                                        Sedan | CXNE 127
                                    </Text>
                                </View>
                                <View style={{
                                    flex: 1
                                }}>
                                    <Image
                                        source={require('../assets/car.png')}
                                        style={{
                                            alignSelf:'flex-end',
                                            marginRight: 20,
                                            width: 60,
                                            height: 60,
                                        }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flex: 1
                    }}>
                        <CommonButton
                            title={'Add New Vehicles'}
                            bgColor={'#FA8128'}
                            textColor={'#fff'}
                            onPress={() => {
                                navigation.navigate('AddNewVehicles')
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default MyVehicles