import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Button, View, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {FAB, Appbar} from 'react-native-paper';
import Container from '../Components/Container';
import Task from '../Components/Task';

const TasksScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  const ref = firestore().collection('tasks');

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {title, complete, description} = doc.data();
        list.push({
          id: doc.id,
          title,
          complete,
          description,
        });
      });

      setTasks(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      <Appbar>
        <Appbar.Content title="Tasks" />
      </Appbar>
      <Container>
        {tasks.length === 0 && (
          <View style={styles.emptyLabel}>
            <Text style={styles.emptyTxt}> Sorry ! No tasks found.</Text>
            <Text style={styles.emptyTxt}> Try adding a new one.</Text>
          </View>
        )}
        {tasks.map(e => (
          <Task key={e.id} {...e}>
            {e.title} / {e.description}
          </Task>
        ))}
      </Container>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('AddTask')}
        theme={{colors: {...{accent: '#0500EE'}}}}
      />
    </>
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
  emptyLabel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTxt: {
    fontFamily: 'Mukta-Light',
    fontSize: 20,
    color: '#aaa',
  },
});
