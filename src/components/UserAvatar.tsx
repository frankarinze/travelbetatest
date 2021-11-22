import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { scale } from 'react-native-size-matters';
import { Colors, Layout } from '../theme';
import { UserAvatarProps } from '../types';


const UserAvatar = ({
    active,
    size,
    isHome,
    avatarSize,
    source,
    onPress
}: UserAvatarProps): JSX.Element => {
    
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
                    borderRadius: size / 2,
                },
                isHome && styles.containerIconHome,
                !!avatarSize && styles.cardIcon,
            ]}
            onPress={onPress}
        >
            <FastImage
                style={[
                    styles.avatarImage,
                    { borderRadius: normalizedSize / 3 },
                ]}
                source={source as any}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Common.BADGE_DEFAULT,
        borderWidth: 1.5,
        borderColor: Colors.Primary.WHITE,
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
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
});

export default UserAvatar;
