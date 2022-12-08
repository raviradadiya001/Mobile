import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonButton from '../Common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import PMain from './PMain'
import PHistory from './PHistory'
import PAccount from './PAccount'

const PHome = () => {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <View style={{ flex: 1 }}>
            {selectedTab == 0 ? (
                <PMain />
            ) : selectedTab == 1 ? (
                <PHistory />
            ) : (
                <PAccount />
            )
            }
            <View
                style={{
                    position: 'absolute',
                    bottom: 1,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    elevation: 5,
                }}>
                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 10
                    }}
                    onPress={() => {
                        setSelectedTab(0);
                    }}
                >
                    <Image
                        source={require('../assets/home.png')}
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: selectedTab == 0 ? '#FA8128' : '#000'
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setSelectedTab(1);
                    }}
                >
                    <Image
                        source={require('../assets/history.png')}
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: selectedTab == 1 ? '#FA8128' : '#000'
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                    onPress={() => {
                        setSelectedTab(2);
                    }}
                >
                    <Image
                        source={require('../assets/account.png')}
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: selectedTab == 2 ? '#FA8128' : '#000'
                        }}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default PHome