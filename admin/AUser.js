import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const AUser = () => {
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
                        Registered Users
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
                            height: 80,
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
                                        +16457575757
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '400',
                                        marginLeft: 20,
                                    }}>
                                        abc@gmail.com
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
                            height: 80,
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
                                        +16457575757
                                    </Text>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: '400',
                                        marginLeft: 20,
                                    }}>
                                        abc@gmail.com
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

export default AUser