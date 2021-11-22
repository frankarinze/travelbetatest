import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TripTextInput } from '../../components/TripTextInput';
import { Icons } from '../../resources';
// import Routes from '../../navigation/Routes';
import { Colors, Layout } from '../../theme';
import ToggleButton from '../../components/ToggleButton'

import {
    NavigationProps,
} from '../../types';
import { ScreenSize } from '../../utils';
import { IS_ANDROID } from '../../utils/ScreenSize';

const MultiCity = ({ navigation }: NavigationProps): JSX.Element => {
    // Render
    return (
        <View style={styles.container}>
            <ScrollView
                style={{
                   
                }}
                //   contentOffset={{ x: -Layout.SV_10, y: 0 }}
                // contentInset={{ left: Layout.SV_10 }}
                // showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >

                <Text style={styles.tripTitle}>TRIP A</Text>
                <View style={{ position: 'relative' }}>
                    <TripTextInput
                        Icon={Icons.Booking.Flight}
                        value='Lagos - Murtala Muhammed International airport'
                        name={'From'}
                    />
                    <ToggleButton
                        source={Icons.Booking.ToggleIc}
                        size={Layout.SV_28}
                        onPress={() => { }}
                        style={{
                            position: 'absolute',
                            top: '38%',
                            zIndex: 20,
                            right: 20

                        }}
                    />
                    <TripTextInput
                        Icon={Icons.Booking.Arriving}
                        value='Lagos - Murtala Muhammed International airport'
                        name={'To'}
                    />
                </View>

                <TripTextInput
                    Icon={Icons.Booking.Date}
                    value='Wed 22 September 2021'
                    name={'Departure'}
                />
                <View style={styles.lineWrapper}>
                    <View style={styles.topMask} />
                    <View style={styles.rightMask} />
                    <View style={styles.leftMask} />
                </View>

                {/* ///////////////////TRIP B STARTS////////////////////// */}
                <Text style={styles.tripTitle}>TRIP B</Text>
                <View style={{ position: 'relative' }}>
                    <TripTextInput
                        Icon={Icons.Booking.Flight}
                        value='Lagos - Murtala Muhammed International airport'
                        name={'From'}
                    />
                    <ToggleButton
                        source={Icons.Booking.ToggleIc}
                        size={Layout.SV_28}
                        onPress={() => { }}
                        style={{
                            position: 'absolute',
                            top: '38%',
                            zIndex: 20,
                            right: 20

                        }}
                    />
                    <TripTextInput
                        Icon={Icons.Booking.Arriving}
                        value='Lagos - Murtala Muhammed International airport'
                        name={'To'}
                    />
                </View>

                <TripTextInput
                    Icon={Icons.Booking.Date}
                    value='Wed 22 September 2021'
                    name={'Departure'}
                />
            </ScrollView>


        </View>
    )
};

const styles = StyleSheet.create({
    // safeAreaContainer: { flex: 1 },
    container: {
        flex: 1,
        paddingHorizontal: Layout.SV_10,
        paddingVertical: Layout.SV_5
    },
    tripTitle: {
        color: Colors.Primary.TEXT_GREY,
        marginVertical: Layout.SV_5

    },
    lineWrapper: {
        height: 1,
        marginVertical: Layout.SV_5,
        borderStyle: 'dashed',
        borderWidth: 1.5,
        borderColor: '#b7c2c6',
        position: 'relative',
        overflow: 'hidden',
    },
    topMask: {
        height: 3,
        width: 9999,
        backgroundColor: 'white',
        position: 'absolute',
        top: -3,
        left: 0,
    },
    rightMask: {
        height: 9999,
        width: 3,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        right: -3,
    },
    leftMask: {
        height: 9999,
        width: 3,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: -3,
    },
});

export default MultiCity;
