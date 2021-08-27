import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import Container from '../Components/Container';

const AddTaskScreen = ({navigation}) => {
  return (
    <Container>
      <Text>Add task </Text>
      <Button onPress={() => navigation.goBack()}>Cancel</Button>
    </Container>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({});
