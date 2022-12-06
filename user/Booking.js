import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Booking = () => {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <View style={{
        flex: 1
      }}>
        <View style={{
          flex: 1,
          alignSelf: 'center'
        }}>
          <Text
            style={{
              marginTop: 20,
              fontWeight: '600',
              fontSize: 25,
            }}
          >
            Current Booking
          </Text>
        </View>
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
      </View>
    </SafeAreaView>
  )
}

export default Booking