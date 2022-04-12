import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Link } from "react-router-native";

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
  return <View >
      <View style={styles.container}> Repositories </View>
      {/* <Link to="/sign">Sign</Link> */}

    </View>;
};

export default AppBar;