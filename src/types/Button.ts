import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ToggleButtonProps  {
    style?: StyleProp<ViewStyle>;
    // children?: React.ReactNode;
    icon?: (() => JSX.Element);
    onPress?: () => void
    size: number;
    source?: { uri: string | null | undefined };
  };

export interface ButtonProps  {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    labelStyle?: StyleProp<TextStyle>;
    labelFontStyle?: 'text:extrabold'
    | 'text:bold'
    | 'text:semibold'
    | 'text:medium'
    | 'text'
    | 'text:light';
    color?: string;
    mode?: 'text' | 'contained' | 'outlined';
    icon?: (() => JSX.Element);
    loading?: boolean;
    onPress?: () => void
  };