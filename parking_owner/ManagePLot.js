import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const ManagePLot = () => {

    const navigation = useNavigation()
    const [name, setName] = useState('');
    const [badName, setBadName] = useState(false);
    const [email, setEmail] = useState('');
    const [badEmail, setBadEmail] = useState(false);

    const updatePLot = () => {
        if (name == '') {
            setBadName(true);
        }
        else {
            setBadName(false);
            if (email == '') {
                setBadEmail(true);
            }
            else {
                setBadEmail(false);
                saveData();
            }
        }
    }

    const saveData = async () => {
        // await AsyncStorage.setItem('NAME', name);
        // await AsyncStorage.setItem('EMAIL', email);
        // await AsyncStorage.setItem('MOBILE', mobile);
        // await AsyncStorage.setItem('PASSWORD', password);
        navigation.goBack();
    };

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
                    </View>
                    <Text
                        style={{
                            marginTop: 10,
                            alignSelf: 'center',
                            fontSize: 24,
                            fontWeight: '600',
                            color: '#000'
                        }}>
                        Manage Parking Lot
                    </Text>

                    <Text
                        style={{
                            marginTop: 30,
                            marginLeft: 30,
                            fontSize: 18,
                            fontWeight: '600',
                            color: '#000'
                        }}>
                        MaRs West Tower
                    </Text>
                    <Text
                        style={{
                            marginTop: 5,
                            marginLeft: 30,
                            fontSize: 15,
                            fontWeight: '400',
                            color: '#000'
                        }}>
                        661 University Avenue
                    </Text>
                    <Text
                        style={{
                            marginTop: 5,
                            marginLeft: 30,
                            fontSize: 15,
                            fontWeight: '400',
                            color: '#000'
                        }}>
                        Total Slots: 60
                    </Text>

                    <CustomTextInput
                        placeholder='Enter Available Parking Spots'
                        icon={require('../assets/ps.png')}
                        value={name}
                        keyboardType={'number-pad'}
                        onChangeText={(txt) => {
                            setName(txt)
                        }}
                    />

                    {
                        badName === true && (
                            <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                                Please Enter Available Parking Spots
                            </Text>)
                    }

                    <CustomTextInput
                        placeholder='Enter New Price '
                        icon={require('../assets/dollar.png')}
                        value={email}
                        keyboardType={'number-pad'}
                        onChangeText={(txt) => {
                            setEmail(txt)
                        }}
                    />

                    {
                        badEmail === true && (
                            <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                                Please Enter New Price
                            </Text>)
                    }

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#FA8128',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '70%',
                            height: 60,
                            alignSelf: 'center',
                            borderRadius: 10,
                            marginTop: 40
                        }}
                        onPress={() => {
                            updatePLot();
                        }}
                    >
                        <Text style={{
                            color: '#fff',
                            fontSize: 20,
                            fontWeight: '600'
                        }}
                        >Update</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ManagePLot