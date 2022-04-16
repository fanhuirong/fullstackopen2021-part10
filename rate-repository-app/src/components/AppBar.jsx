import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
  return (<View>
      <Text>Welcome!</Text>
      <Link to="/sign">sign</Link>
    </View>)
;
};

export default AppBar;