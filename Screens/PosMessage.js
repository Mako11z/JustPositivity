import { View, Text, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import {createRealmContext} from '@realm/react';
import realm from '../RealmFiles/realmConfig';
import { createPosEntry, readPosEntries } from '../RealmFiles/realmFunctions';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';



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

    // Add a new posEntry
    const addNewPosEntry = () => {
        if (newPosEntryContent.trim() === "") return;
        createPosEntry(newPosEntryContent);

        // Clear the input fields
        setPosEntryContent('');

        // Refresh the content
        const data = readPosEntries();
        setPosEntryData(data);
    };
    return (
        <SafeAreaView>
        <View>
            <Text>Reflect Screen</Text>
            <TextInput
                placeholder='Add something positive'
                value={newPosEntryContent}
                onChangeText={(text) => setPosEntryContent(text)}
            />
            <Button title='Add new PosEntry' onPress={addNewPosEntry} />
            {posEntryData.map((item) => (
                <TouchableOpacity
                    key={item._id}
                    onPress={() => navToReflectScreen(item._id)}>
                        <View>
                            <Text>title: {item.content} </Text>
                        </View>
                    </TouchableOpacity>
            ))}
        </View>
        </SafeAreaView>
    );
};

export default PosMessageScreen;