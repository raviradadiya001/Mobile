import { View, Text, SafeAreaView, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

const Find = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS === 'android' && !Device.isDevice) {
                setErrorMsg(
                    'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
                );
                return;
            }
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    // let lat = location.coords.latitude
    // let lad = location.coords.longitude

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <MapView style={{
                    width: '100%',
                    height: '100%',
                }}
                    zoomEnabled={true}
                >
                    {/* <Marker 
                    coordinate={{
                        latitude:lat,
                        longitude:lad
                    }}
                    >
                    </Marker> */}

                    <View style={{
                        backgroundColor: "#fff",
                        paddingVertical: 8,
                        paddingHorizontal: 10,
                        marginHorizontal: 10,
                        borderRadius: 10,
                        marginTop: 10,
                        flexDirection: "row",
                        alignItems: "center",
                    }} >
                        <TextInput
                            placeholder="Enter Location"
                            placeholderTextColor="#000"
                            style={{
                                fontWeight: '600',
                                fontSize: 18,
                                width: '94%'
                            }}
                        />
                        <Image
                            source={require('../assets/search.png')}
                            style={{ height: 20, width: 20, }}
                        >
                        </Image>
                    </View>

                </MapView>

                {/* <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                }}>{text}</Text> */}

            </View>
        </SafeAreaView>
    )
}

export default Find