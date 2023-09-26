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
     const e1 = createPosEntry("This is my name");
     createReflection("Hey this is my first reflection", e1._id);
     createReflection("Im am a srub", e1._id);
     createReflection("This app is going really well. Im learningt alot from this maby, im using chat gpt to kinda of do a lot but its still pretty cool", e1._id);
     const e2 = createPosEntry("This gane is prettyu fgood");
     createReflection("Wassup", e2._id);
     createReflection("Wasssssup", e2._id);
 
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