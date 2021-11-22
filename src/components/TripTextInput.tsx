import React from "react"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import { Icons, Images } from "../resources"
import { Colors, Layout } from "../theme"
import { TripProps } from "../types"
import { TBIcon } from "./Icon"

export const TripTextInput = ({ Icon, name, value }: TripProps): JSX.Element => {
    return (
        <View style={styles.inputsContainer}>
            <>
                <View style={styles.inputWrapper}>
                    <View style={styles.iconLeftStyle}>
                        <TBIcon
                            style={styles.inputIcon}
                            name={Icon}
                        />
                    </View>
                    <View style={styles.labelStyle} >
                        <Text style={styles.labelTextStyle}> {name}</Text>
                        <Text ellipsizeMode='tail' numberOfLines={1} style={styles.labelStyle}>
                            {value}
                        </Text>
                    </View>
                </View>

            </>
        </View>
    )
}

const styles = StyleSheet.create({
    addAddressButtonLabel: { color: Colors.Primary.GREY_2 },

    inputsContainer: {
        marginVertical: Layout.SV_5
    },
    input: {
        // height: 'au,
        margin: 12,
        borderWidth: 0,
        background: '#fff',
        padding: 10,
    },
    containerWrapper: {
        height: Layout.SV_40,
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#C7C8C9',
        flexDirection: 'row',
        marginBottom: '5%',
    },
    inputIcon: {
        height: Layout.SV_22,
        width: Layout.SV_22,
        marginHorizontal: Layout.SV_5
    },
    labelStyle: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: Layout.SV_5,
        overflow: 'hidden',
        width: '90%',
    },
    inputWrapper: {
        flexDirection: 'row',
        padding: Layout.SV_8,
        borderRadius: Layout.SV_6,
        backgroundColor: Colors.Primary.INPUT_BACKGROUND_GREY,
        // whiteSpace: 'nowrap',
        overflow: 'hidden',
        // textOverflow: 'ellipsis',
    },
    iconLeftStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: Layout.SV_10,
    },
    iconRightStyle: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginHorizontal: Layout.SV_10,
    },
    labelTextStyle: {
        color: Colors.Primary.BLACK,
        fontSize: Layout.FSV_12,
        // fontFamily: 'Poppins-Medium',
    },
    labelView: {
        height: Layout.SV_25,
        marginLeft: Layout.SV_5,
        marginTop: Layout.SV_10,
    },
    rowContainer: {
        flexDirection: 'row',
        paddingHorizontal: Layout.SV_20,
    },



    confirmButtonLabel: { color: Colors.Primary.WHITE, marginTop: Layout.SV_10 },
    cancelButtonLabel: { color: Colors.Primary.BLACK, marginTop: Layout.SV_10 },
});

{/* <TextInput
                            // onChangeText={onChangeNumber}
                            value='Lagos - Murtala Muhammed Inter...'
                            placeholder="Departing from"
                            keyboardType="name-phone-pad"
                            underlineColorAndroid="transparent"
                            style={styles.labelStyle}
                        /> */}