import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Center, Modal } from 'native-base'

interface LoadingModal {
    isVisible: boolean;

}

const LoadingModal = ({
    isVisible
}: LoadingModal) => {
    return (
        <Center>
            <Modal
                isOpen={isVisible}
            >
                <View
                    style={{
                        backgroundColor: 'white',
                        minHeight: 100,
                        minWidth: 300,
                        borderRadius: 20,
                        padding: 20,
                        elevation: 6
                    }}
                // shadow={5}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 27,
                                fontWeight: 'bold',
                                marginBottom: 10
                            }}
                        >Please wait
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <ActivityIndicator
                                color={'#FFC857'}
                                size={50}
                            />
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '300',
                                    marginLeft: 15
                                }}
                            >Loading...</Text>
                        </View>

                    </View>
                </View>
            </Modal>
        </Center>
    )
}

export default LoadingModal

const styles = StyleSheet.create({})