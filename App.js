/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// This is the server
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, AppState, FlatList } from 'react-native';
import {createRealmContext} from '@realm/react';
import realm from './RealmFiles/realmConfig';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PosMessageScreen from './Screens/PosMessage';
import HomeScreen from './Screens/Home';
import ReflectionScreen from './Screens/Reflections';

import { createPosEntry, createReflection, deleteAllEntries } from './RealmFiles/realmFunctions';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PushNotification from 'react-native-push-notification';
import WebSocket from 'react-native-websocket';

const Stack = createNativeStackNavigator();
const App = () => {

    deleteAllEntries();
    const e1 = createPosEntry("You are enough");
    createReflection("Hey this is my first reflection", e1._id);
    createReflection("One thing I want to work on is not being self concious about my looks. I just need to love myself", e1._id);
    createReflection("I need to work on myself in a way where I love myself", e1._id);
    const e2 = createPosEntry("Its okay to mess up");
    createReflection("I honestly hate messing up. I dont want to let anyone down", e2._id);
    createReflection("I guess I can grow from my mess ups and learn from them", e2._id);

    useEffect(() => {
     // Initialize PushNotification
     PushNotification.configure({
       onNotification: function (notification) {
         console.log('Notification:', notification);
         // Handle the received notification here
       },
       permissions: {
         alert: true,
         badge: true,
         sound: true,
       },
       popInitialNotification: true,
     });
 
     // WebSocket connection
     const ws = new WebSocket('ws://localhost:3000'); // Use your server's IP address
     ws.onopen = () => {
       console.log('WebSocket connected');
     };
 
     ws.onmessage = (event) => {
       console.log('WebSocket message received:', event.data);
     };
   }, []);
 
   const scheduleImmediateNotification = () => {
     PushNotification.localNotification({
       title: 'Immediate Notification',
       message: 'Hello World!',
     });
   };

  return (
    <NavigationContainer>
      <WebSocket
       url="ws://localhost:3000" // Replace with your server URL
       onOpen={() => console.log('WebSocket connection opened')}
       onClose={() => console.log('WebSocket connection closed')}
       onError={(error) => console.error('WebSocket error:', error)}
       onMessage={(data) => {
         console.log('Received WebSocket data:', data);
         // You can handle the received data and trigger push notification here
         // Example: send a push notification when "send_notification" is received
         scheduleImmediateNotification(); //This will schedule the message
       }}
     />
      <Stack.Navigator>
        <Stack.Screen
          name="Home" // Name of File
          component={HomeScreen} // Name of Screen
          options={{ title: 'Home'}}
        />
        <Stack.Screen
          name='PosMessage'
          component={PosMessageScreen}
          options={{title: 'Positive Entries'}}
        />
        <Stack.Screen
          name='Reflections'
          component={ReflectionScreen}
          options={{ title: 'Reflections' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

