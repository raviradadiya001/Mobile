import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonButton from '../Common/CommonButton'

const ParkingDetails = () => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                    <ImageBackground
                        source={require('../assets/parkinglot.png')}
                        style={{
                            width: '100%',
                            height: 250,
                            alignSelf: 'center',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                backgroundColor: '#FA8128',
                                alignItems: 'center',
                                width: '40%',
                                height: 50,
                                alignSelf: 'flex-end',
                                borderRadius: 10,
                                marginTop: 180,
                                marginRight: 15
                            }}
                            onPress={() => {

                            }}
                        >
                            <Image
                                source={require('../assets/annotation.png')}
                                style={{
                                    marginLeft: 10,
                                    marginTop: 5,
                                    width: 25,
                                    height: 25,
                                }}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={{
                                    alignContent: 'center',
                                    color: '#fff',
                                    marginLeft: 5,
                                    fontSize: 18,
                                    fontWeight: '600',
                                }}>
                                    See Location
                                </Text>
                            </View>
                        </TouchableOpacity>
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
                        <Text style={{
                            alignContent: 'flex-start',
                            color: '#000',
                            marginLeft: 15,
                            fontSize: 12,
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
                            marginTop: 15,
                            fontSize: 18,
                            fontWeight: '400',
                        }}>
                            Availabel Facilities
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}>
                        <Image
                            source={require('../assets/disabled.png')}
                            style={{
                                marginLeft: 15,
                                marginTop: 5,
                                width: 20,
                                height: 20,
                            }}
                        />
                        <Image
                            source={require('../assets/hand.png')}
                            style={{
                                marginLeft: 15,
                                marginTop: 5,
                                width: 20,
                                height: 20,
                            }}
                        />
                        <Image
                            source={require('../assets/24hours.png')}
                            style={{
                                marginLeft: 15,
                                marginTop: 5,
                                width: 20,
                                height: 20,
                            }}
                        />
                        <Image
                            source={require('../assets/security.png')}
                            style={{
                                marginLeft: 15,
                                marginTop: 5,
                                width: 20,
                                height: 20,
                            }}
                        />
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
                            Parking Rate
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <TouchableOpacity
                            style={{
                                height: 50,
                                marginTop: 15,
                                width: 100,
                                borderRadius: 8,
                                elevation: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 15,
                                backgroundColor: '#F9F7F6',
                                shadowOpacity: 0.2,
                            }}
                        >
                            <View style={{
                                width: '100%',
                                height: '100%',
                                marginTop: 10
                            }}>
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontSize: 15,
                                        fontWeight: '500',
                                    }}
                                >
                                    30 min
                                </Text>
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontSize: 15,
                                        fontWeight: '500',
                                    }}
                                >
                                    $3.00
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: 50,
                                marginTop: 15,
                                width: 100,
                                borderRadius: 8,
                                elevation: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 15,
                                backgroundColor: '#F9F7F6',
                                shadowOpacity: 0.2,
                            }}
                        >
                            <View style={{
                                width: '100%',
                                height: '100%',
                                marginTop: 10
                            }}>
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontSize: 15,
                                        fontWeight: '500',
                                    }}
                                >
                                    1 hour
                                </Text>
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontSize: 15,
                                        fontWeight: '500',
                                    }}
                                >
                                    $6.00
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: 50,
                                marginTop: 15,
                                width: 100,
                                borderRadius: 8,
                                elevation: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 15,
                                backgroundColor: '#F9F7F6',
                                shadowOpacity: 0.2,
                            }}
                        >
                            <View style={{
                                width: '100%',
                                height: '100%',
                                marginTop: 10
                            }}>
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontSize: 15,
                                        fontWeight: '500',
                                    }}
                                >
                                    2 hours
                                </Text>
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontSize: 15,
                                        fontWeight: '500',
                                    }}
                                >
                                    $8.00
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: 50,
                                marginTop: 15,
                                width: 100,
                                borderRadius: 8,
                                elevation: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 15,
                                backgroundColor: '#F9F7F6',
                                shadowOpacity: 0.2,
                            }}
                        >
                            <View style={{
                                width: '100%',
                                height: '100%',
                                marginTop: 10
                            }}>
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontSize: 15,
                                        fontWeight: '500',
                                    }}
                                >
                                    4 hours
                                </Text>
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontSize: 15,
                                        fontWeight: '500',
                                    }}
                                >
                                    $10.00
                                </Text>
                            </View>
                        </TouchableOpacity>
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
                            Payment Accepted
                        </Text>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <TouchableOpacity
                            style={{
                                height: 80,
                                marginTop: 15,
                                width: 100,
                                borderRadius: 8,
                                elevation: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 15,
                                backgroundColor: '#F9F7F6',
                                shadowOpacity: 0.2,
                            }}
                        >
                            <View style={{
                                width: '100%',
                                height: '100%',
                                alignItems: 'flex-start'
                            }}>
                                <Image
                                    source={require('../assets/cc.png')}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        marginLeft: 25,
                                        marginTop: 5
                                    }}
                                />
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontSize: 12,
                                        fontWeight: '300',
                                    }}
                                >
                                    Credit Cards
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: 80,
                                marginTop: 15,
                                width: 100,
                                borderRadius: 8,
                                elevation: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 15,
                                backgroundColor: '#F9F7F6',
                                shadowOpacity: 0.2,
                            }}
                        >
                            <View style={{
                                width: '100%',
                                height: '100%',
                                alignItems: 'flex-start'
                            }}>
                                <Image
                                    source={require('../assets/paypal.png')}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        marginLeft: 30
                                    }}
                                />
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontSize: 12,
                                        fontWeight: '300',
                                    }}
                                >
                                    Paypal
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <CommonButton
                            title={'Book Now'}
                            bgColor={'#FA8128'}
                            textColor={'#fff'}
                            onPress={() => {
                                
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ParkingDetails