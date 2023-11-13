import { View, Text, SafeAreaView, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import {createRealmContext} from '@realm/react';
import realm from '../RealmFiles/realmConfig';
import { createPosEntry, readPosEntries } from '../RealmFiles/realmFunctions';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from '../Styles/styles';



const PosMessageScreen = () => {
    const [posEntryData, setPosEntryData] = useState([]); // State to store all of the posEntries
    const [newPosEntryContent, setPosEntryContent] = useState(""); // State variavle to hold posEntry content
    
    const nav = useNavigation(); // Navigation hook
    useEffect(() => {
        const data = readPosEntries();
        setPosEntryData(data); // Store the PosEntries in the current state
    }, []);

    // Navigate to the reflection screen for the associated posEntry
    const navToReflectScreen = (posEntryId) => {
        // Pass in posEntry._id as a hex string for serilization
        nav.navigate('Reflections', { posEntryId: posEntryId.toHexString() });
    };

    // Navigate to create positive entry screen
    const navToCreatePosEntryScreen = () => {
        nav.navigate('CreatePosEntry');
    }

    // Render each item as we scroll through the list of positiev entries
    const renderItem = ({ item }) => (
        <TouchableOpacity
          key={item._id}
          onPress={() => navToReflectScreen(item._id)}
        >
          <View style={styles.positive_entries_container}>
            <Text style={styles.positive_entries_text}> {item.content} </Text>
          </View>
        </TouchableOpacity>
      );
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navToCreatePosEntryScreen()}> 
              <View style={styles.nav_container}>
                <Text style={styles.nav_text}>Create your own!</Text>
              </View>
            </TouchableOpacity>
            <FlatList
                data={posEntryData}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
            />
        </View>
        </SafeAreaView>
    );
};

export default PosMessageScreen;