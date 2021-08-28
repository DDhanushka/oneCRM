import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../Components/Container';

const EditContactScreen = () => {
  return (
    <>
      <Appbar>
        <Appbar.Content title="Update contact" />
      </Appbar>
      <Container>
        <Text>Contacts</Text>
      </Container>
    </>
  );
};

export default EditContactScreen;

const styles = StyleSheet.create({});
