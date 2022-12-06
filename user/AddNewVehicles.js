import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddNewVehicles = () => {

    const navigation = useNavigation()
    const [name, setName] = useState('');
    const [badName, setBadName] = useState(false);
    const [email, setEmail] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const addvehicle = () => {
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
                    <Text
                        style={{
                            marginTop: 50,
                            alignSelf: 'center',
                            fontSize: 24,
                            fontWeight: '600',
                            color: '#000'
                        }}>
                        Add New Vehicle
                    </Text>

                    <CustomTextInput
                        placeholder='Enter Car Name'
                        icon={require('../assets/cn.png')}
                        value={name}
                        onChangeText={(txt) => {
                            setName(txt)
                        }}
                    />

                    {
                        badName === true && (
                            <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                                Please Enter Car Name
                            </Text>)
                    }

                    <CustomTextInput
                        placeholder='Enter Licence Plate'
                        icon={require('../assets/plate.png')}
                        value={email}
                        onChangeText={(txt) => {
                            setEmail(txt)
                        }}
                    />
                    {
                        badEmail === true && (
                            <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                                Please Enter Licence Plate
                            </Text>)
                    }
                    <CommonButton
                        title={'Add Vehicle'}
                        bgColor={buttonDisabled ? '#BeBeBe' : '#FA8128'}
                        textColor={'#fff'}
                        onPress={() => {
                            addvehicle();
                        }}
                        disabled={buttonDisabled}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddNewVehicles