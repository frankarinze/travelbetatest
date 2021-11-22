import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { StackNavigationProp } from '@react-navigation/stack';


// Types
export type Navigation = NavigationScreenProp<NavigationState, NavigationParams> & {
    setOptions: (options: Record<string, null | object | string | (() => JSX.Element)>) => void;
    reset: ({
      index,
      routes,
    }: { index: number, routes: [{ name: string }] }) => void;
    openDrawer: () => void,
    closeDrawer: () => void,
  };
  
  export type NavigationProps = {
    navigation: Navigation;
    route?: any;
    locationPermission?: any;
  };