import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../../const/globalStyle'
import LoadingModal from '../../componets/LoadingModal'
import BottomSheet from '../../componets/BottomSheet'

const BookingList = () => {
    return (
        <View style={globalStyle.FAJ}
        >
            <Text>BookingList</Text>
            <LoadingModal
                isVisible={false}
            />
            <BottomSheet />
        </View>
    )
}

export default BookingList

const styles = StyleSheet.create({})