import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const LoginScreen = ({navigation}) => (
    <SafeAreaView>
        <Text>Screen: Login</Text>
        <TouchableHighlight onPress={navigation.navigate('Home')}>Go to home</TouchableHighlight>
    </SafeAreaView>


);

export default LoginScreen;