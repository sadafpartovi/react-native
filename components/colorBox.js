import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({colorName, colorHex}) => {
  const boxColor = {
    backgroundColor: colorHex
  }

  const textColor =  {
    color: parseInt(colorHex.replace('#', ''), 16) > 0xffffff /1.1 ? 'black' : 'white'
  }
  return (
    <View style={[styles.container, boxColor]}>
      <Text style={[styles.text, textColor]}>{colorName}: {colorHex}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    height: 30,
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorBox;
