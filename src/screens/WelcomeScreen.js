import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
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
      <Button title="sign out" onPress={handleSignOut} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
