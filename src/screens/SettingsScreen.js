import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
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

  return (
    <Container>
      <Text style={styles.welcome}>
        Welcome {user && auth().currentUser.displayName}
      </Text>
      <Text>{user && auth().currentUser.uid}</Text>
      <Button mode="contained" onPress={handleSignOut}>
        sign out
      </Button>
    </Container>
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
