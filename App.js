/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
 
   return (
     <NavigationContainer>
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