import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { scale } from 'react-native-size-matters';
import { Colors, Layout } from '../theme';
import { ToggleButtonProps } from '../types'
import { TBIcon } from "./Icon"

export const ToggleButton = ({
    style,
    icon,
    onPress,
    size,
    source,
}: ToggleButtonProps): JSX.Element => {

    // Variables
    const normalizedSize = scale(size || 60);
    const Container: any = onPress ? TouchableOpacity : View;
    // Render
    return (
        <Container
            style={[
                styles.container,
               { 
                   width: size,
                   height: size,
                },
                style
            ]}
            onPress={onPress}
        >
            <TBIcon
                name={source}
                style={styles.avatarImage}
                onPress={onPress}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: Layout.SV_5
    },
    containerIconHome: {
        borderWidth: 1.5,
        borderColor: Colors.Primary.WHITE,
    },
    cardIcon: {
        borderWidth: 1.5,
        borderColor: Colors.Primary.WHITE,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default ToggleButton;
