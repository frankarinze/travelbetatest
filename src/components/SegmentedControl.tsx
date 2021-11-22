import React, { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors, Layout } from '../theme';
import { ScreenSize } from '../utils';

type SegmentedControlOptions = {
  options: string[],
  selectedIndex: number,
  onSelectedIndex: (index: number) => void,
}

const SegmentedControl = ({
  options,
  selectedIndex,
  onSelectedIndex,
}: SegmentedControlOptions): JSX.Element => {
  const onOptionPress = useCallback((index: number) => {
    onSelectedIndex(index);
  }, [onSelectedIndex]);

  if (options.length < 1) {
    return (<></>);
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {options.map((option, i) => (
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              key={option}
              style={styles.optionContainer}
              onPress={() => { onOptionPress(i); }}
            >
              <Text style={[styles.optionText, selectedIndex === i && styles.selectedOptionText]}>{option}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Layout.SV_30,
    marginTop: (ScreenSize.SCREEN_HEIGHT + 100) / 3.6,
  },
  optionText: {
    color: Colors.Primary.TEXT_GREY,
    textAlign:'left',
    fontSize:Layout.FSV_14,
    
    justifyContent:'space-between'
  

  },
  selectedOptionText: {
    color: Colors.Primary.BLACK,
  },
  selectedIndicator: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 2,
    backgroundColor: Colors.Primary.GREY,
  },
  isSelectedIndicator: {
    backgroundColor: Colors.Primary.BLACK,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  optionContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: 0,
  },
});

export default SegmentedControl;
