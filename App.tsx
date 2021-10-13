import { blue } from '@material-ui/core/colors';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import ColorBox from './components/colorBox';

const App = () => {
  return (
    // <SafeAreaView style={styles.safeArea}>
    //     <View style={styles.container}>
    //     <Text style={styles.header}>Here are my family:</Text>
    //   </View>

    //   <View>
    //     <ColorBox colorName='Cyan'colorHex='#2aa198'/>
    //     <ColorBox colorName='Blue'colorHex='#268bd2'/>
    //     <ColorBox colorName='Magenta'colorHex='#d33682'/>
    //     <ColorBox colorName='Orange'colorHex='#cb4b16'/>
    //   </View>
    // </SafeAreaView>
    <FlatList
      data={COLORS}

      //for unique key
      keyExtractor={item => item.colorName}
      renderItem={({item}) => <ColorBox colorName={item.colorName} colorHex={item.hexCode}/>}
      ListHeaderComponent={<Text style={styles.text}>Solarized Color</Text>}
    />
  );
};

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const styles = StyleSheet.create({
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },

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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  safeArea: {
    flex: 2
  }
});

export default App;
