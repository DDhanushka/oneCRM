import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import Container from '../Components/Container';
import {Button, ActivityIndicator} from 'react-native-paper';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(
        'janex.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User signed in!');
        setLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(
        'janex.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <Container>
      <Text>Login</Text>
      <Button mode="contained" onPress={handleSignIn}>
        Sign In
      </Button>
      <Button onPress={handleSignUp}>Sign Up </Button>
      {loading && <ActivityIndicator animating={true} />}
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
