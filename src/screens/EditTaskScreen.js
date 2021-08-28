import React, {useState} from 'react';
import {StyleSheet, Alert, View} from 'react-native';
import {Button, Appbar, TextInput} from 'react-native-paper';
import Container from '../Components/Container';
import {ActivityIndicator} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import theme from '../assets/theme';

const AddTaskScreen = ({navigation}) => {
  const [task, setTask] = useState('');
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddTask = () => {
    if (task !== '' && desc !== '') {
      addUser();
      addTask();
    } else {
      Alert.alert('Empty values', 'Please enter something', [{text: 'OK'}]);
    }
  };

  const addUser = async () => {
    await firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .set({
        name: auth().currentUser.displayName,
        email: auth().currentUser.email,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  const addTask = async () => {
    setLoading(true);
    await firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .collection('Tasks')
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
      <Container style={{paddingTop: 15}}>
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
