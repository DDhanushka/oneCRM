// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TasksScreen from '../screens/TasksScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const Stack = createStackNavigator();

export function TasksNav() {
  return (
    <NavigationContainer independent={true} s>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Task" component={TasksScreen} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
