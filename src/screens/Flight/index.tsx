import { useIsFocused } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TBIcon } from "../../components/Icon";
import SegmentedControl from "../../components/SegmentedControl";
import UserAvatar from "../../components/UserAvatar";
import { Icons, Images } from "../../resources";
import { Colors, Layout } from "../../theme";
import { NavigationProps } from "../../types";
import ScreenSize from "../../utils/ScreenSize";
import MultiCity from "./MultiCity";
import OneWay from "./OneWay";
import RoundTrip from "./RoundTrip";

const tabs = ['ONE-WAY', 'ROUND-TRIP', 'MULTI CITY'];

 // Variables

function renderHeader() {
  return (
    <View style={styles.header}>

      <ImageBackground
        style={styles.backgroundImage}
        source={Images.Header.NewCity}
        fadeDuration={1000}
      >
        <SafeAreaView style={{
          marginHorizontal: Layout.SV_8,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <TBIcon
            style={styles.navIcon}
            name={Icons.Booking.BackIc}
            onPress={() => { }}
            
          />
          <UserAvatar
            size={45}
            isHome
            active
            source={Images.Header.DummyAvatar}
            onPress={() => { }}
            style={styles.navIcon}
          />
        </SafeAreaView>
        <Text style={{
          fontSize: Layout.FSV_32,
          fontWeight:'700',
          color: Colors.Primary.WHITE,
          marginHorizontal: Layout.SV_25,
          marginVertical: Layout.SV_70
        }}>Flights</Text>
      </ImageBackground>
    </View>
  )
}


const FlightScreen = ({ navigation }: NavigationProps): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  // Navigation
  const isFocused = useIsFocused();

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerStyle: {
  //       height: ScreenSize. HEADER_BAR_HEIGHT
  //     },
  //   });
  // }, [
  //   navigation,
  // ]);

  // Render Booking type
  const renderBookingType = () => {
    switch (selectedIndex) {
      case 0:
        return <OneWay navigation={navigation} />;
      case 1:
        return <RoundTrip navigation={navigation} />;
      default:
        return <MultiCity navigation={navigation} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <SegmentedControl
        options={tabs}
        selectedIndex={selectedIndex}
        onSelectedIndex={setSelectedIndex}
      />
      {renderBookingType()}

      {/* {isFocused && <StatusBar />} */}
    </View>
  )
}
export default FlightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Layout.SV_10,
    backgroundColor: Colors.Primary.BG_WHITE,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  header: {
    ...StyleSheet.absoluteFillObject,
    width: ScreenSize.SCREEN_WIDTH,
    height: (ScreenSize.SCREEN_HEIGHT + 100) / 3.9,

  },
  navIcon: {
    height: Layout.SV_22,
    width: Layout.SV_22,
    margin: Layout.SV_5,

  },

})
