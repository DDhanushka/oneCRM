import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Appbar, TextInput} from 'react-native-paper';
import Container from '../Components/Container';
import {ActivityIndicator} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';
import theme from '../assets/theme';

const AddTaskScreen = ({navigation}) => {
  const [task, setTask] = useState('');
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const ref = firestore().collection('tasks');

  const handleAddTask = () => {
    if (task !== '' && desc !== '') {
      addTask();
    } else {
      alert('Empty fields');
    }
  };

  const addTask = async () => {
    setLoading(true);
    await ref
      .add({
        title: task,
        complete: false,
        description: desc,
      })
      .then(() => {
        console.log('Task added!');
        setLoading(false);
        navigation.goBack();
      });
    setTask('');
  };

  return (
    <>
      <Appbar>
        <Appbar.Content title="Add new task" />
      </Appbar>
      <Container>
        <TextInput
          mode="outlined"
          label="Task title"
          value={task}
          autoFocus
          onChangeText={val => {
            setTask(val);
          }}
          style={styles.textInput}
          outlineColor={theme.colors.primary}
        />
        <TextInput
          mode="outlined"
          label="Task description"
          value={desc}
          onChangeText={val => {
            setDesc(val);
          }}
          style={styles.textInput}
          outlineColor={theme.colors.font}
          multiline
          numberOfLines={5}
        />
        <View style={styles.btnGroup}>
          {loading ? (
            <ActivityIndicator animating={true} />
          ) : (
            <View>
              <Button mode="contained" onPress={() => handleAddTask()}>
                Add
              </Button>
              <Button onPress={() => navigation.goBack()}>Cancel</Button>
            </View>
          )}
        </View>
      </Container>
    </>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  btnGroup: {
    marginTop: 25,
  },
});
