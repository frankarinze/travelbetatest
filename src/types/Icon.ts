import { StyleProp, ViewStyle } from "react-native";

export interface TBIconProps {
    name: string | undefined | any;
    size?: number
    style?: StyleProp<ViewStyle> | any;
    onPress?: (() => void);
}
export type UserAvatarProps = {
    size: number;
    isHome: boolean;
    active: boolean;
    avatarSize?: number;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode | null;
    onPress?: (() => void);
    source?: { uri: string | null };
}
