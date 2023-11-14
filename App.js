/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// This is the server
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, AppState, FlatList, Button } from 'react-native';
import {createRealmContext} from '@realm/react';
import realm from './RealmFiles/realmConfig';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PosMessageScreen from './Screens/PosMessage';
import ReflectionScreen from './Screens/Reflections';
import CreatePosEntryScreen from './Screens/CreatePosEntry';
import CreateReflectionScreen from './Screens/CreateReflection';

import { createPosEntry, createReflection, deleteAllEntries, generateRandomElement } from './RealmFiles/realmFunctions';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PushNotification from 'react-native-push-notification';
import WebSocket from 'react-native-websocket';
import loadPosMessages from './Functions/loadMessages';

import styles from './Styles/styles';

const Stack = createNativeStackNavigator();
const App = () => {
  const [daily_pos, setDailyPos] = useState(generateRandomElement());
    useEffect(() => { 
      const initilizeApp = () => {
        // Load the initial positive messages into databse
        loadPosMessages();
        // WebSocket connection
        const ws = new WebSocket('ws://localhost:3000'); // Use your server's IP address
        // When connection is open, log it
        ws.onopen = () => {
       console.log('WebSocket connected');
      };
        // When message is recieved, log it
        ws.onmessage = (event) => {
       console.log('WebSocket message received:', event.data);
       };
      };
      initilizeApp();
    }, []);
 
   const scheduleImmediateNotification = () => {
     // Generate new positive message
     setDailyPos(generateRandomElement());
     PushNotification.localNotification({
       title: 'Daily Positivity',
       message: `${daily_pos}`,
     });
   };

  return (
    <NavigationContainer>
      {/*  Set up a websocket component to handle communictaion  */}
      <WebSocket
       url="ws://localhost:3000" // Replace with your server URL
       onOpen={() => console.log('WebSocket connection opened')}
       onClose={() => console.log('WebSocket connection closed')}
       onError={(error) => console.error('WebSocket error:', error)}
       onMessage={(event) => {
          const data = event.data;
          console.log('Received WebSocket data:', data);
          // Validate message sent from server, if they match then send notification
          if (data === 'SendPushNotification') {
            console.log('Received "SendPushNotification" message');
            console.log('Scheduling immediate notification...');
            scheduleImmediateNotification();
          } else {
            console.log('Received unexpected message:', data);
          }
      }}
     />
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ title: 'Home' }}
      >
        {({ navigation }) => (
        <View>
          <View style={styles.title_container}>
            <Text style={styles.title_text}> JustPositivity </Text>
          </View>
          <View style={styles.welcome_container}>
            <Text style={styles.welcome_text}>Welcome back, </Text>
            <Text style={styles.name_text}> Isaiah </Text>
          </View>
          <View style={styles.daily_pos_header_container}>
            <Text style={styles.daily_pos_header_text}>Heres your daily dose of positivity!</Text>
          </View>
          <View style={styles.positivity_container}>
            <Text style={styles.daily_pos_text}>  {daily_pos} </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
             title="Positive Messages"
              onPress={() => {
              navigation.navigate('PosMessage');
            }}
            style={styles.button}
            > 
            <Text style={styles.button_text}>Explore Positivity</Text>
          </TouchableOpacity>
          </View>
      </View>
       )}
      </Stack.Screen>
        <Stack.Screen
          name='PosMessage'
          component={PosMessageScreen}
          options={{title: 'Explore Positivity'}}
        />
        <Stack.Screen
          name='CreatePosEntry'
          component={CreatePosEntryScreen}
          options={{title: 'Create Positive Entry'}}
        />
        <Stack.Screen
          name='Reflections'
          component={ReflectionScreen}
          options={{ title: 'Reflections' }}
        />
        <Stack.Screen
          name='CreateReflection'
          component={CreateReflectionScreen}
          options={{title: 'Create you reflection'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

