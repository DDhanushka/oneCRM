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
      <Text style={styles.welcome}>Welcome</Text>
      <Button mode="contained" onPress={handleSignOut}>
        sign out
      </Button>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Mukta-SemiBold',
  },
});
