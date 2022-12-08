import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonButton from '../Common/CommonButton'
import { useNavigation } from '@react-navigation/native'

const PMain = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        alignSelf: 'center',
                        color: '#000',
                        marginTop: 25,
                        fontSize: 25,
                        fontWeight: '600',
                    }}>
                        Listed Parking Lots
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
                            height: 100,
                            borderRadius: 10,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                        }}
                            onPress={() => {
                                navigation.navigate('ParkingLotDetails')
                            }}
                        >
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 17,
                                        fontWeight: '600',
                                        marginLeft: 20,
                                    }}>
                                        MaRS West Tower
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '600',
                                        marginLeft: 20,
                                    }}>
                                        661 University Avenue
                                    </Text>
                                </View>
                                <View style={{
                                    flex: 1
                                }}>
                                    <Image
                                        source={require('../assets/next.png')}
                                        style={{
                                            alignSelf: 'flex-end',
                                            marginRight: 20,
                                            marginTop: 15,
                                            width: 30,
                                            height: 30,
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
                            height: 100,
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
                                        fontSize: 17,
                                        fontWeight: '600',
                                        marginLeft: 20,
                                    }}>
                                        MaRS South Tower
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '600',
                                        marginLeft: 20,
                                    }}>
                                        101 College Street
                                    </Text>
                                </View>
                                <View style={{
                                    flex: 1
                                }}>
                                    <Image
                                        source={require('../assets/next.png')}
                                        style={{
                                            alignSelf: 'flex-end',
                                            marginRight: 20,
                                            marginTop: 15,
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={{
                flex: 1,
                marginBottom: 50,
                marginRight: 15,
            }}>
                <TouchableOpacity style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: '#FA8128',
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                }}
                    onPress={() => {
                        navigation.navigate('AddPLot')
                    }}
                >
                    <Image
                        source={require('../assets/plus.png')}
                        style={{
                            width: 30,
                            height: 30,
                            marginTop: 15,
                            alignSelf: 'center'
                        }}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default PMain