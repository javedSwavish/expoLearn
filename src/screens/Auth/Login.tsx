import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../../const/globalStyle'
import LogoIcon from '../../assets/svg/LogoIcon'

const Login = () => {
    return (
        <View style={globalStyle.FAJ}>
            <Text>Login</Text>
            <LogoIcon />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})