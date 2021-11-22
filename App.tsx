import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Router from './src/navigation/Router';
import Routes from './src/navigation/Routes';
import FlightScreen from './src/screens/Flight';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Hotel, More, Tour, Visa } from './src/screens';
import { Colors } from './src/theme';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const BottomTab = createBottomTabNavigator();



const INITIAL_ROUTE = Routes.FLIGHT;

const Stack = createStackNavigator();

const RootStackNavigator = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName={INITIAL_ROUTE}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      cardStyle: {
        backgroundColor: Colors.Primary.DARK_GREY,
      },
   
      headerMode:'screen'
    }}
  >

    <Stack.Screen
      name={Routes.FLIGHT}
      component={BottomTabNavigator}
      options={{
        headerShown: false,
        
      }}
      
      
    />
  </Stack.Navigator>
);

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        {/* <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name={Routes.Flight.INDEX}
            component={FlightScreen}
            options={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
            }}
          />
        </Stack.Navigator> */}
      <RootStackNavigator/>
      </NavigationContainer>

    </SafeAreaProvider>
    // <Router/>
  );
}

export default App;