import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './Routes';
import {
  Hotel,
  Visa,
  Tour,
  More,
} from '../screens';
import { Colors, Layout } from '../theme';
import FlightScreen from '../screens/Flight';
import { Icons } from '../resources';
import { TBIcon } from '../components/Icon';

const TAB_INITIAL_ROUTE = Routes.Flight.INDEX;

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = (): JSX.Element => (
  <BottomTab.Navigator
    initialRouteName={TAB_INITIAL_ROUTE}
    // tabBar={(props: any) => (
    //   <BottomTabBar {...props} />
    // )}
    sceneContainerStyle={styles.container}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Flight') {
          iconName = focused
            ? Icons.TabBar.Flight_Active
            : Icons.Booking.Flight;
        } else if (route.name === 'Hotel') {
          iconName = focused ? Icons.TabBar.Hotel_Active : Icons.TabBar.Hotel;
        }
        else if (route.name === 'Visa') {
          iconName = focused ? '' : '';
        }
        else if (route.name === 'Tour') {
          iconName = focused ? '' : '';
        }
        else if (route.name === 'More') {
          iconName = focused ? '' : '';
        }

        return <TBIcon name={iconName} style={styles.ic} />;
      },
      tabBarActiveTintColor: 'gold',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarStyle: {backgroundColor: Colors.Primary.BLUE, },
    })}
  >
    <BottomTab.Screen
      name={Routes.Flight.INDEX}
      component={FlightScreen}
    />

    <BottomTab.Screen
      name={Routes.Hotel.INDEX}
      component={Hotel}
    />

    <BottomTab.Screen
      name={Routes.Visa.INDEX}
      component={Visa}
    />

    <BottomTab.Screen
      name={Routes.Tour.INDEX}
      component={Tour}

    />

    <BottomTab.Screen
      name={Routes.More.INDEX}
      component={More}
    />
  </BottomTab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.Primary.BLACK,
  },
  ic: {
    height: Layout.SV_22,
    width: Layout.SV_22,
    marginHorizontal: Layout.SV_5
  }
});

export default BottomTabNavigator;
