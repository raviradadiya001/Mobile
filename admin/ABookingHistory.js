import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonButton from '../Common/CommonButton'
import { useNavigation } from '@react-navigation/native'

const ABookingHistory = () => {
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
                            height: 160,
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
                                        Chhote
                                    </Text>
                                    <View style={{
                                        flexDirection: 'row'
                                    }}>
                                        <Text style={{
                                            color: '#000',
                                            fontSize: 14,
                                            fontWeight: '400',
                                            marginLeft: 20,
                                        }}>
                                            Nissan Altima
                                        </Text>
                                        <Text style={{
                                            color: '#000',
                                            fontSize: 14,
                                            fontWeight: '400',
                                            marginLeft: 20,
                                        }}>
                                            GALI GANG
                                        </Text>
                                    </View>
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
                            height: 160,
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
                                        Divine
                                    </Text>
                                    <View style={{
                                        flexDirection: 'row'
                                    }}>
                                        <Text style={{
                                            color: '#000',
                                            fontSize: 14,
                                            fontWeight: '400',
                                            marginLeft: 20,
                                        }}>
                                            Nissan Altima
                                        </Text>
                                        <Text style={{
                                            color: '#000',
                                            fontSize: 14,
                                            fontWeight: '400',
                                            marginLeft: 20,
                                        }}>
                                            RIDER
                                        </Text>
                                    </View>
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
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default ABookingHistory