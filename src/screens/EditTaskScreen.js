import React, {useState, useEffect} from 'react';
import {StyleSheet, Alert, View, Text} from 'react-native';
import {Button, Appbar, TextInput} from 'react-native-paper';
import Container from '../Components/Container';
import {ActivityIndicator} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import theme from '../assets/theme';
import {Switch} from 'react-native-paper';

const EditTaskScreen = ({navigation, route}) => {
  const {taskId} = route.params;

  const [task, setTask] = useState('');
  const [desc, setDesc] = useState('');
  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      const task = await firestore()
        .collection('Users')
        .doc(auth().currentUser.uid)
        .collection('Tasks')
        .doc(taskId)
        .get();

      console.log(task.data());
      setTask(task.data().title);
      setDesc(task.data().description);
      setComplete(task.data().complete);
    };
    fetchTask();
  }, []);

  const handleAddTask = () => {
    if (task !== '' && desc !== '') {
      editTask();
    } else {
      Alert.alert('Empty values', 'Please enter something', [{text: 'OK'}]);
    }
  };

  const editTask = async () => {
    setLoading(true);
    await firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .collection('Tasks')
      .doc(taskId)
      .update({
        title: task,
        complete: complete,
        description: desc,
      })
      .then(() => {
        console.log('Task updated!');
        setLoading(false);
        navigation.goBack();
      });
    // setTask('');
  };

  return (
    <>
      <Appbar>
        <Appbar.Content title="Edit task" />
      </Appbar>
      <Container style={{paddingTop: 15}}>
        <View style={styles.toggle}>
          <Text style={styles.font}>Done</Text>
          <Switch
            value={complete}
            onValueChange={() => setComplete(!complete)}
          />
        </View>
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
                Update
              </Button>
              <Button onPress={() => navigation.goBack()}>Cancel</Button>
            </View>
          )}
        </View>
      </Container>
    </>
  );
};

export default EditTaskScreen;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  btnGroup: {
    marginTop: 25,
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  font: {
    fontFamily: 'Mukta-Regular',
    fontSize: 18,
  },
});
