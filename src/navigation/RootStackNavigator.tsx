import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import Routes from './Routes';

import { Colors } from '../theme';

const INITIAL_ROUTE = Routes.FLIGHT;

const Stack = createStackNavigator();

const RootStackNavigator = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName={INITIAL_ROUTE}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      // cardStyle: {
      //   backgroundColor: Colors.Primary.BLACK_1,
      // },
    }}
  >
    <Stack.Screen
      name={Routes.FLIGHT}
      component={BottomTabNavigator}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
       
      }}
    />
  </Stack.Navigator>
);

export default RootStackNavigator;
