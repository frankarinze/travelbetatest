import React from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { Images } from "../../resources"
import { TBIconProps } from "../../types/Icon"



export const TBIcon = ({
    name,
    style,
    size,
    onPress
}: TBIconProps): JSX.Element => {

    // Variables
    const Container: any = onPress ? TouchableOpacity : View;
    return (
        <Container>
            <Image
                source={name}
                style={style}
                fadeDuration={1000}
            />
        </Container>
    )
}