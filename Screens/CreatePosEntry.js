import { Text, View, TextInput, Button } from 'react-native';
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
            <Text>Write something Positive</Text>
            <TextInput
                style={styles.text_input}
                multiline={true}
                placeholder='Write something positive'
                value={newPosEntryContent}
                onChangeText={(text) => setPosEntryContent(text)}
            />
            <Button title='Add new PosEntry' onPress={addNewPosEntry} />
        </View>
    );
};

export default CreatePosEntryScreen;