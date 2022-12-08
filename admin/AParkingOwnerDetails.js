import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const AParkingOwnerDetails = () => {
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
                        marginTop: 20,
                        fontSize: 25,
                        fontWeight: '600',
                    }}>
                        Parking Owner Details
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
                            height: '100%',
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
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '400',
                                        marginLeft: 20,
                                    }}>
                                        Email: abc@gmail.com
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '400',
                                        marginLeft: 20,
                                    }}>
                                        Total Spots: 60
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '400',
                                        marginLeft: 20,
                                    }}>
                                        Payment Date: Dec 21, 2020
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '400',
                                        marginLeft: 20,
                                    }}>

                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default AParkingOwnerDetails