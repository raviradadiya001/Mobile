import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddPLot = () => {

  const navigation = useNavigation()
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [mobile, setMobile] = useState('');
  const [badMobile, setBadMobile] = useState(false);
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const signupp = () => {
    setButtonDisabled(true);
    if (name == '') {
      setBadName(true);
      setButtonDisabled(false);
    }
    else {
      setBadName(false);
      if (email == '') {
        setBadEmail(true);
        setButtonDisabled(false);
      }
      else {
        setBadEmail(false);
        if (mobile == '') {
          setBadMobile(true);
          setButtonDisabled(false);
        }
        else {
          setBadMobile(false);
          setButtonDisabled(false);
          saveData();
        }
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
      <ScrollView showsVerticalScrollIndicator={false}>
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
              alignSelf: 'center',
              fontSize: 24,
              fontWeight: '600',
              color: '#000'
            }}>
            Add Parking Lot
          </Text>

          <CustomTextInput
            placeholder='Enter Building Name'
            icon={require('../assets/skyline.png')}
            value={name}
            onChangeText={(txt) => {
              setName(txt)
            }}
          />

          {
            badName === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Enter Building Name
              </Text>)
          }

          <CustomTextInput
            placeholder='Enter Total Parking Spot'
            icon={require('../assets/car-park.png')}
            keyboardType={'number-pad'}
            value={email}
            onChangeText={(txt) => {
              setEmail(txt)
            }}
          />

          {
            badEmail === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Enter Total Parking Spot
              </Text>)
          }

          <CustomTextInput
            placeholder='Enter Price Per 30 min'
            icon={require('../assets/dollar.png')}
            value={mobile}
            keyboardType={'number-pad'}
            onChangeText={(txt) => {
              setMobile(txt)
            }}
          />

          {
            badMobile === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Enter Price Per 30 min
              </Text>)
          }

          <CustomTextInput
            placeholder='Enter Street Address'
            icon={require('../assets/street.png')}
            value={email}
            onChangeText={(txt) => {
              setEmail(txt)
            }}
          />

          {
            badEmail === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Enter Street Address
              </Text>)
          }

          <CustomTextInput
            placeholder='Enter City'
            icon={require('../assets/city.png')}
            value={email}
            onChangeText={(txt) => {
              setEmail(txt)
            }}
          />

          {
            badEmail === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Enter City
              </Text>)
          }

          <CustomTextInput
            placeholder='Enter Province'
            icon={require('../assets/canada.png')}
            value={email}
            onChangeText={(txt) => {
              setEmail(txt)
            }}
          />

          {
            badEmail === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Enter Province
              </Text>)
          }

          <CustomTextInput
            placeholder='Enter Postal Code'
            icon={require('../assets/postbox.png')}
            keyboardType={'number-pad'}
            value={email}
            onChangeText={(txt) => {
              setEmail(txt)
            }}
          />

          {
            badEmail === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Valid Postal Code
              </Text>)
          }

          <CommonButton
            title={'Add New Lot'}
            bgColor={buttonDisabled ? '#BeBeBe' : '#FA8128'}
            textColor={'#fff'}
            onPress={() => {
              signupp();
            }}
            disabled={buttonDisabled}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddPLot