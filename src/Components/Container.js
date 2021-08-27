import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Container = props => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
});
