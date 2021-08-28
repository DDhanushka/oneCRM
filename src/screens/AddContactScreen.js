import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../Components/Container';

const AddContactScreen = () => {
  return (
    <>
      <Appbar>
        <Appbar.Content title="Add new contact" />
      </Appbar>
      <Container>
        <Text>Contacts</Text>
      </Container>
    </>
  );
};

export default AddContactScreen;

const styles = StyleSheet.create({});
