import React, {useContext} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Button} from 'react-native-paper';

import auth from '@react-native-firebase/auth';
import Container from '../Components/Container';
import {AppContext} from '../context/AppContext';

const WelcomeScreen = () => {
  const context = useContext(AppContext);
  const {user} = context;

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const showAboutUs = () => {
    Alert.alert(
      'oneCRM',
      `Version 1.0\nCustomer Relationship Management App\nDeveloped by Dimuthu Dhanushka\nIndex: 18000932\nReg: 2018/cs/093`,
      [{text: 'OK'}],
    );
  };

  return (
    <Container style={styles.container}>
      <View>
        <Text style={styles.welcome}>
          {user && auth().currentUser.displayName}
        </Text>
        <Button mode="outlined" onPress={handleSignOut}>
          Update profile
        </Button>
      </View>
      <View>
        <Button onPress={() => showAboutUs()}>About App</Button>
        <Button mode="outlined" onPress={handleSignOut}>
          sign out
        </Button>
      </View>
    </Container>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingTop: 50,
    fontFamily: 'Mukta-SemiBold',
  },
  container: {
    justifyContent: 'space-between',
  },
  box: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
  },
});
