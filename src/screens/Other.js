import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const Other = () => {
  return (
    <View>
      <Text>Other</Text>
      <Button mode="outlined" onPress={() => console.log('pressed')}>
        Hello
      </Button>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({});
