import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import OppotunitiesScreen from '../screens/OppotunitiesScreen';
import TasksScreen from '../screens/TasksScreen';
import ContactsScreen from '../screens/ContactsScreen';
import theme from '../assets/theme';
import {TasksNav} from './StackNavigators';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        shifting={false}
        barStyle={{backgroundColor: '#F9F9F9'}}
        activeColor={theme.colors.primary}
        inactiveColor="#888">
        <Tab.Screen
          name="Projects"
          component={ProjectsScreen}
          options={{
            tabBarLabel: 'Projects',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="architecture" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Oppotunities"
          component={OppotunitiesScreen}
          options={{
            tabBarLabel: 'Oppotunities',
            tabBarIcon: ({color}) => (
              <FontAwesome name="comment-dollar" color={color} size={23} />
            ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={TasksNav}
          options={{
            tabBarLabel: 'Tasks',
            tabBarIcon: ({color}) => (
              <FontAwesome name="tasks" color={color} size={23} />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{
            tabBarLabel: 'Contacts',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="account-box"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="account-cog"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
