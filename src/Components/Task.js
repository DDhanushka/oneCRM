import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import theme from '../assets/theme';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';

const Task = props => {
  const {description, title, complete, id} = props;

  const deleteTask = () => {
    firestore()
      .collection('tasks')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Task deleted!');
      });
  };

  const handleDelete = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => deleteTask()},
    ]);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{description}</Text>
        </View>
        <TouchableOpacity onPress={() => null}>
          <MaterialIcon
            name="border-color"
            size={26}
            color={theme.colors.font}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete()}>
          <MaterialIcon name="close" size={26} color="#D83D27" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Task;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Mukta-Medium',
    fontSize: 20,
    color: theme.colors.font,
  },
  desc: {
    fontFamily: 'Mukta-Light',
    fontSize: 16,
    color: '#555',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
    paddingTop: 5,
  },
  icon: {
    margin: 10,
  },
});
