import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
// import Routes from '../../navigation/Routes';
import { Layout } from '../theme';

import {
    NavigationProps,
} from '../types';

export const Hotel = ({ navigation }: NavigationProps): JSX.Element => {

    // Render
    return ( 
        <View style={styles.container}>
           <Text>One way Tfab</Text> 
        </View>
    )
};

const styles = StyleSheet.create({
    // safeAreaContainer: { flex: 1 },
    container: {
        flex: 1,
        paddingHorizontal: Layout.SV_10,
    },
});

