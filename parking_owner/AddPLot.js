import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { BASE_URL } from '../Api/Api';

const AddPLot = () => {

  const navigation = useNavigation()
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [ParkingName, setParkingName] = useState("");
  const [badParkingName, setBadParkingName] = useState(false);
  const [spots, setSpots] = useState("");
  const [badspots, setBadspots] = useState(false);
  const [rate, setRate] = useState("");
  const [badrate, setBadrate] = useState(false);
  const [street, setStreet] = useState("");
  const [badstreet, setBadstreet] = useState(false);
  const [city, setCity] = useState("");
  const [badcity, setBadcity] = useState(false);
  const [province, setProvince] = useState("");
  const [badprovince, setBadprovince] = useState(false);
  const [postalcode, setPostalCode] = useState("");
  const [badpostalcode, setBadpostalcode] = useState(false);

  const saveData = async () => {
    const addParking = {
      ParkingName: ParkingName,
      spots: spots,
      rate: rate,
      street: street,
      city: city,
      province: province,
      postalcode: postalcode,
    };
    console.log(addParking);
    axios
      .post(`${BASE_URL}/api/parkingOwner/addParking`, addParking)
      .then((result) => {
        console.log(result.data);
        props.navigation.navigate("PHome");
        setParkingName("");
        setSpots("");
        setRate("");
        setStreet("");
        setCity("");
        setProvince("");
        setPostalCode("");
      })
      .catch((error) => console.log(error));
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
            value={ParkingName}
            onChangeText={(txt) => {
              setParkingName(txt)
            }}
          />

          {
            badParkingName === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Enter Building Name
              </Text>)
          }

          <CustomTextInput
            placeholder='Enter Total Parking Spot'
            icon={require('../assets/car-park.png')}
            keyboardType={'number-pad'}
            value={spots}
            onChangeText={(txt) => {
              setSpots(txt)
            }}
          />

          {
            badspots === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Enter Total Parking Spot
              </Text>)
          }

          <CustomTextInput
            placeholder='Enter Price Per 30 min'
            icon={require('../assets/dollar.png')}
            value={rate}
            keyboardType={'number-pad'}
            onChangeText={(txt) => {
              setRate(txt)
            }}
          />

          {
            badrate === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Enter Price Per 30 min
              </Text>)
          }

          <CustomTextInput
            placeholder='Enter Street Address'
            icon={require('../assets/street.png')}
            value={street}
            onChangeText={(txt) => {
              setStreet(txt)
            }}
          />

          {
            badstreet === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Enter Street Address
              </Text>)
          }

          <CustomTextInput
            placeholder='Enter City'
            icon={require('../assets/city.png')}
            value={city}
            onChangeText={(txt) => {
              setCity(txt)
            }}
          />

          {
            badcity === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Enter City
              </Text>)
          }

          <CustomTextInput
            placeholder='Enter Province'
            icon={require('../assets/canada.png')}
            value={province}
            onChangeText={(txt) => {
              setProvince(txt)
            }}
          />

          {
            badprovince === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Enter Province
              </Text>)
          }

          <CustomTextInput
            placeholder='Enter Postal Code'
            icon={require('../assets/postbox.png')}
            keyboardType={'number-pad'}
            value={postalcode}
            onChangeText={(txt) => {
              setPostalCode(txt)
            }}
          />

          {
            badpostalcode === true && (
              <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                Please Valid Postal Code
              </Text>)
          }

          <CommonButton
            title={'Add New Lot'}
            bgColor={buttonDisabled ? '#BeBeBe' : '#FA8128'}
            textColor={'#fff'}
            onPress={() => {
              saveData();
            }}
            disabled={buttonDisabled}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddPLot