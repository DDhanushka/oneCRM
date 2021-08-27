import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const WelcomeScreen = () => {
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <View>
      <Text>Welcome</Text>
      <Button mode="contained" onPress={handleSignOut}>
        sign out
      </Button>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
