import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonButton from '../Common/CommonButton'
import { useNavigation } from '@react-navigation/native';

const ParkingLotDetails = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
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
                        <Text style={{
                            alignSelf: 'center',
                            color: '#000',
                            fontSize: 20,
                            fontWeight: '600',

                        }}>
                            Parking Lot Details
                        </Text>
                    </View>
                    <ImageBackground
                        source={require('../assets/parkinglot.png')}
                        style={{
                            width: '100%',
                            height: 250,
                            alignSelf: 'center',
                            marginTop: 10
                        }}
                    >
                    </ImageBackground>
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
                            MaRS West Tower
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <Image
                            source={require('../assets/annotation.png')}
                            style={{
                                width: 15,
                                height: 15,
                                marginLeft: 15,
                                marginTop: 1
                            }}
                        />
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 5,
                            fontSize: 15,
                            fontWeight: '400',

                        }}>
                            661 University Ave, Toronto
                        </Text>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 15,
                            marginTop: 20,
                            fontSize: 18,
                            fontWeight: '400',
                        }}>
                            Total Parking Spots: 60
                        </Text>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 15,
                            marginTop: 20,
                            fontSize: 18,
                            fontWeight: '400',
                        }}>
                            Reserved Parking Spots: 30
                        </Text>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 15,
                            marginTop: 20,
                            fontSize: 18,
                            fontWeight: '400',
                        }}>
                            Availabel Parking Spots: 30
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 15,
                            marginTop: 20,
                            fontSize: 18,
                            fontWeight: '400',
                        }}>
                            Parking Rate (Per 30 Min):
                        </Text>
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 5,
                            marginTop: 20,
                            fontSize: 18,
                            fontWeight: '400',
                        }}>
                            $3
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{
                flex: 1,
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
                    navigation.navigate('ManagePLot')
                }}
                >
                    <Image
                        source={require('../assets/edit.png')}
                        style={{
                            width: 30,
                            height: 30,
                            marginTop: 15,
                            alignSelf: 'center'
                        }}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ParkingLotDetails