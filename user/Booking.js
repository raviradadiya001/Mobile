import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Booking = () => {
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
            Current Booking
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
              height: 100,
              borderTopLeftRadius: 10,
              borderTopEndRadius: 10,
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
                    fontSize: 15,
                    fontWeight: '600',
                    marginLeft: 20,
                    marginTop: 10
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
                    Time Remaining
                  </Text>
                  <Text style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '600',
                    marginLeft: 20,
                  }}>
                    00:17:50 min Left
                  </Text>
                </View>
                <View style={{
                  flex: 1
                }}>
                  <Image
                    source={require('../assets/car.png')}
                    style={{
                      alignSelf: 'flex-end',
                      marginRight: 20,
                      width: 60,
                      height: 60,
                      marginTop: 10
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{
              backgroundColor: '#FA8128',
              alignItems: 'flex-start',
              width: '85%',
              height: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
              disabled={true}
            >
              <Text style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
                Add Time
              </Text>
            </TouchableOpacity>
          </View>
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
              height: 100,
              borderTopLeftRadius: 10,
              borderTopEndRadius: 10,
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
                    fontSize: 15,
                    fontWeight: '600',
                    marginLeft: 20,
                    marginTop: 10
                  }}>
                    101 College Street
                  </Text>
                  <Text style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: '400',
                    marginLeft: 20,
                    marginTop: 10
                  }}>
                    Time Remaining
                  </Text>
                  <Text style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '600',
                    marginLeft: 20,
                  }}>
                    00:27:50 min Left
                  </Text>
                </View>
                <View style={{
                  flex: 1
                }}>
                  <Image
                    source={require('../assets/car.png')}
                    style={{
                      alignSelf: 'flex-end',
                      marginRight: 20,
                      width: 60,
                      height: 60,
                      marginTop: 10
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{
              backgroundColor: '#FA8128',
              alignItems: 'flex-start',
              width: '85%',
              height: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
              disabled={true}
            >
              <Text style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
                Add Time
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}

export default Booking