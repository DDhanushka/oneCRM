import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import theme from '../assets/theme';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/core';

const Task = props => {
  const navigation = useNavigation();
  const {description, title, complete, id} = props;

  const deleteTask = () => {
    firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .collection('Tasks')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Task deleted!');
      });
  };

  const handleDelete = () => {
    Alert.alert('Delete task?', 'You can not recover deleted tasks later!', [
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
        {complete ? (
          <MaterialIcon
            name="check-circle"
            size={20}
            style={{marginRight: 10}}
            color={theme.colors.accent}
          />
        ) : (
          <MaterialIcon
            name="check-circle-outline"
            size={20}
            style={{marginRight: 10}}
            color={theme.colors.font}
          />
        )}

        <View style={{flex: 1}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{description}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditTask', {taskId: id})}>
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
