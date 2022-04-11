import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   padding: 10,
   height: 100,
   backgroundColor: '#24292e',
   color: '#ffffff'
    // ...
  },
  // ...
});

const AppBar = () => {
  return <TouchableWithoutFeedback >
      <View style={styles.container}> Repositories </View>
    </TouchableWithoutFeedback>;
};

export default AppBar;