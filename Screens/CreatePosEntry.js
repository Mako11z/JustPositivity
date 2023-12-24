import { Text, View, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import realm from '../RealmFiles/realmConfig';
import { createPosEntry, readPosEntries } from '../RealmFiles/realmFunctions';
import { useState } from 'react';
import styles from '../Styles/styles';

const CreatePosEntryScreen = () => {
    const [newPosEntryContent, setPosEntryContent] = useState(""); // State variavle to hold posEntry content
    // Add a new posEntry
    const addNewPosEntry = () => {
        if (newPosEntryContent.trim() === "") return;
        createPosEntry(newPosEntryContent);
        // Clear the input fields
        setPosEntryContent('');
    };
    return (
        <View>
            <ImageBackground
                source={require('../Images/JP-Background.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
            <View style={styles.create_pos_header_container}>
                <Text style={styles.create_pos_header}>Write something Positive</Text>
            </View>
            <TextInput
                style={styles.text_input}
                multiline={true}
                placeholder='  Write something positive'
                value={newPosEntryContent}
                onChangeText={(text) => setPosEntryContent(text)}
            />
            <TouchableOpacity
                onPress={() => addNewPosEntry()}
            >
                <View style={styles.add_new_entry_conatiner}>
                    <Text style={styles.add_new_entry}>Add new entry</Text>
                </View>
            </TouchableOpacity> 
            </ImageBackground>
        </View>
    );
};

export default CreatePosEntryScreen;