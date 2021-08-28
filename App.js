import React, {useState, useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import TabNavigator from './src/navigation/TabNavigator';
import theme from './src/assets/theme';
import {StatusBar} from 'react-native';
import {AppContext} from './src/context/AppContext';

const Stack = createStackNavigator();

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <>
      <AppContext.Provider value={{user}}>
        <StatusBar backgroundColor="#0400A7" />
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              {!user ? (
                <Stack.Screen name="loginScreen" component={LoginScreen} />
              ) : (
                <Stack.Screen name="tabs" component={TabNavigator} />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </AppContext.Provider>
    </>
  );
};

export default App;
