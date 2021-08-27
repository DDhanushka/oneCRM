import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {FAB} from 'react-native-paper';
import Container from '../Components/Container';

const TasksScreen = ({navigation}) => {
  return (
    <Container>
      <Text>Tasks</Text>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('AddTask')}
        theme={{colors: {...{accent: '#0500EE'}}}}
      />
    </Container>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
