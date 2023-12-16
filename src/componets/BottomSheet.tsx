import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Actionsheet, Box, Button, Center, useDisclose, Text, Icon, FlatList, ScrollView } from 'native-base';
import LogoIcon from '../assets/svg/LogoIcon';

const BottomSheet = () => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose()
    return (
        <Center>
            <Button onPress={onOpen}>Actionsheet</Button>
            <Actionsheet
                isOpen={isOpen}
                onClose={onClose} size="full"

            >
                <Actionsheet.Content
                    maxHeight={300}
                    minHeight={200}
                >
                    {/* <FlatList
                        data={new Array(30)}
                        renderItem={() => {
                            return <View style={{ height: 100, borderWidth: 1, margin: 5, width: 200 }}>
                                <Text>sdfdf</Text>
                            </View>
                        }}
                    /> */}
                    <ScrollView>
                        {[...new Array(50)].map((el, i) => {
                            return <View
                                key={i}
                                style={{ height: 100, borderWidth: 1, margin: 5, width: 200 }}>
                                <Text>sdfdf</Text>
                            </View>
                        })}
                    </ScrollView>
                    {/* <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text fontSize="16" color="gray.500" _dark={{
                            color: "gray.300"
                        }}>
                            Albums
                        </Text>
                    </Box>
                    <Actionsheet.Item startIcon={<Icon as={LogoIcon} size="6" name="delete" />}>
                        Delete
                    </Actionsheet.Item>
                    <Actionsheet.Item startIcon={<Icon as={LogoIcon} name="share" size="6" />}>
                        Share
                    </Actionsheet.Item>
                    <Actionsheet.Item startIcon={<Icon as={LogoIcon} name="play-circle" size="6" />}>
                        Play
                    </Actionsheet.Item>
                    <Actionsheet.Item startIcon={<Icon as={LogoIcon} size="6" name="favorite" />}>
                        Favourite
                    </Actionsheet.Item>
                    <Actionsheet.Item startIcon={<Icon as={LogoIcon} size="6" name="delete" />}>
                        Delete
                    </Actionsheet.Item>
                    <Actionsheet.Item startIcon={<Icon as={LogoIcon} name="share" size="6" />}>
                        Share
                    </Actionsheet.Item>
                    <Actionsheet.Item startIcon={<Icon as={LogoIcon} name="play-circle" size="6" />}>
                        Play
                    </Actionsheet.Item>
                    <Actionsheet.Item startIcon={<Icon as={LogoIcon} size="6" name="favorite" />}>
                        Favourite
                    </Actionsheet.Item> */}
                </Actionsheet.Content>
            </Actionsheet>
        </Center>
    )
}


export default BottomSheet

const styles = StyleSheet.create({})