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
        <View style={{
          flex: 1
        }}>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Booking