import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const AParkingOnwer = () => {
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
                        Parking Owner
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
                                navigation.navigate('AParkingOwnerDetails')
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
                                        Prabhu Prabhu
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '600',
                                        marginLeft: 20,
                                    }}>
                                        MaRS West Tower
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '400',
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
                                            marginTop: 22,
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
                                navigation.navigate('AParkingOwnerDetails')
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
                                        Prabhu Prabhu
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '600',
                                        marginLeft: 20,
                                    }}>
                                        MaRS West Tower
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '400',
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
                                            marginTop: 22,
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
        </SafeAreaView >
    )
}

export default AParkingOnwer