import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookingList from '../screens/Bookings/BookingList';
import Login from '../screens/Auth/Login';


const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Navigator
        >
            <Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
            <Screen name="RootStack" component={RootStack} options={{ headerShown: false }} />
        </Navigator>
    )
}

export default StackNavigator

const RootStack = () => {
    return (
        <Navigator>
            <Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
        </Navigator>)
}

const AuthStack = () => {
    return (
        <Navigator>
            <Screen
                name="BookingList"
                component={BookingList}
                options={{ headerShown: false }}
            />
        </Navigator>)
}

