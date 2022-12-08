import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonButton from '../Common/CommonButton'
import { useNavigation } from '@react-navigation/native';

const PAccount = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <ScrollView style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <View style={{
            flex: 1
          }}>
            <Text style={{
              alignContent: 'flex-start',
              color: '#000',
              marginLeft: 25,
              marginTop: 15,
              fontSize: 25,
              fontWeight: '600',
            }}>
              Account
            </Text>
          </View>
          <View style={{
            flex: 1,
            marginTop: 20,
            alignSelf: 'center'
          }}>
            <View style={{ flex: 1 }}>
              <Image
                source={require('../assets/user.png')}
                style={{
                  width: 80,
                  height: 80,
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{
                color: '#000',
                marginTop: 15,
                fontSize: 18,
                fontWeight: '600',

              }}>
                Prabhu
              </Text>
              <Text style={{
                color: '#000',
                fontSize: 12,
                fontWeight: '400',
              }}>
                +1 6464646464
              </Text>
            </View>
          </View>
          <View style={{
            flex: 1,
          }}>
            <TouchableOpacity style={{
              backgroundColor: '#fff',
              alignItems: 'flex-start',
              width: '85%',
              height: 50,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}
              onPress={() => {
                navigation.navigate('PHistory')
              }}
            >
              <Text style={{
                color: '#000',
                fontSize: 18,
                fontWeight: '600',
                marginLeft: 30,
                color: '#FA8128'
              }}>
                Booking History
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{
            flex: 1,
          }}>
            <TouchableOpacity style={{
              backgroundColor: '#fff',
              alignItems: 'flex-start',
              width: '85%',
              height: 50,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}
              onPress={() => {
                navigation.navigate('')
              }}
            >
              <Text style={{
                color: '#000',
                fontSize: 18,
                fontWeight: '600',
                marginLeft: 30,
                color: '#FA8128'
              }}>
                Payment Statics
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{
            flex: 1,
          }}>
            <TouchableOpacity style={{
              backgroundColor: '#fff',
              alignItems: 'flex-start',
              width: '85%',
              height: 50,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}
              onPress={() => {

              }}
            >
              <Text style={{
                color: '#000',
                fontSize: 18,
                fontWeight: '600',
                marginLeft: 30,
                color: '#FA8128'
              }}>
                Support
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{
            flex: 1,
          }}>
            <TouchableOpacity style={{
              backgroundColor: '#fff',
              alignItems: 'flex-start',
              width: '85%',
              height: 50,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}
              onPress={() => {

              }}
            >
              <Text style={{
                color: '#000',
                fontSize: 18,
                fontWeight: '600',
                marginLeft: 30,
                color: '#FA8128'
              }}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{
            flex: 1,
          }}>
            <TouchableOpacity style={{
              backgroundColor: '#fff',
              alignItems: 'flex-start',
              width: '85%',
              height: 50,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}
              onPress={() => {

              }}
            >
              <Text style={{
                color: '#000',
                fontSize: 18,
                fontWeight: '600',
                marginLeft: 30,
                color: '#FA8128'
              }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}

export default PAccount