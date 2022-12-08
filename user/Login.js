import { View, Text, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import CustomTextInput from '../Common/CustomTextInput'
import CommonButton from '../Common/CommonButton'
import { useNavigation } from '@react-navigation/native';
import Loader from '../Common/Loader';
import axios from 'axios';
import { BASE_URL } from '../Api/Api';

const Login = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const login = () => {
        setModalVisible(true);
        if (email == '') {
            setModalVisible(false);
            setBadEmail(true);
        } else {
            setBadEmail(false);
            if (password == '') {
                setModalVisible(false);
                setBadPassword(true);
            } else {
                setTimeout(() => {
                    setBadPassword(false);
                    getData();
                }, 1500);
            }
        }
    }

    const getData = async () => {
        const data = {
            email: email.toLocaleLowerCase(),
            password: password,
          };
          console.log(data);
          axios
            .post(BASE_URL + "/api/user/logIn", data)
            .then((result) => {
              console.log(result.data);
              if (!result.data.success) {
                alert("Plese Enter Valid Details");
                setEmail("");
                setPassword("");
              } else {
                props.navigation.navigate("Home", {
                  userId: result.data.data._id,
                });
                setEmail("");
                setPassword("");
                setId(result.data.data._id);
              }
            })
            .catch((error) => console.log(error));
    }

    return (
        <ScrollView style={{
            flex: 1
        }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }} >
                <Image
                    source={require('../assets/parkit.png')}
                    style={{
                        width: 60,
                        height: 60,
                        alignSelf: 'center',
                        marginTop: 100
                    }}
                />
                <Text
                    style={{
                        marginTop: 50,
                        alignSelf: 'center',
                        fontSize: 24,
                        fontWeight: '600',
                        color: '#000'
                    }}>Login</Text>

                <CustomTextInput
                    placeholder='Enter Email Id'
                    icon={require('../assets/email.png')}
                    value={email}
                    onChangeText={(txt) => {
                        setEmail(txt)
                    }}
                />
                {
                    badEmail === true && (
                        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                            Please Enter Email Id
                        </Text>)
                }
                <CustomTextInput
                    placeholder='Enter Password'
                    type={'password'}
                    icon={require('../assets/password.png')}
                    value={password}
                    onChangeText={(txt) => {
                        setPassword(txt)
                    }}
                />
                {
                    badPassword === true && (
                        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                            Please Enter Password
                        </Text>)
                }
                <CommonButton
                    title={'Login'}
                    bgColor={'#FA8128'}
                    textColor={'#fff'}
                    onPress={() => {
                        login();
                    }}
                />
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: '400',
                        alignSelf: 'center',
                        marginTop: 20,
                        textDecorationLine: 'underline',
                    }} onPress={() => {
                        navigation.navigate('Signup')
                    }}
                >Don't Have an account? Register Now</Text>
                {/* <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
            </View>
        </ScrollView>
    )
}

export default Login