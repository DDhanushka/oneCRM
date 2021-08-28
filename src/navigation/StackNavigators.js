// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TasksScreen from '../screens/TasksScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import EditTaskScreen from '../screens/EditTaskScreen';

import ContactsScreen from '../screens/ContactsScreen';
import AddContactScreen from '../screens/AddContactScreen';
import EditContactScreen from '../screens/EditContactScreen';

const Stack = createStackNavigator();

export function TasksNav() {
  return (
    <NavigationContainer independent={true} s>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Task" component={TasksScreen} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
        <Stack.Screen name="EditTask" component={EditTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function ContactsNav() {
  return (
    <NavigationContainer independent={true} s>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="AddContact" component={AddContactScreen} />
        <Stack.Screen name="EditContact" component={EditContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
