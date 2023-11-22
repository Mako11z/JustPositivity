import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import realm from '../RealmFiles/realmConfig';
import { createReflection, readPosEntries, readPosEntryByID } from "../RealmFiles/realmFunctions";
import { useState } from 'react';
import styles from '../Styles/styles';

const CreateReflectionScreen = ({ route }) => {
    // Passed posEntry._id from PosMessageScreen
    const { posEntryId } = route.params;
    const [reflectionContent, setReflectionContent] = useState(""); // State variable to hold relfection content
    // Create insatnce of MongoDB objectID
    const objectIdForPosEntry = Realm.BSON.ObjectID.createFromHexString(posEntryId);
    const posEntry = readPosEntryByID(objectIdForPosEntry);
    // Add a reflection
    const addReflection = () => {
        if (reflectionContent.trim() === "") return;
        // Create a new reflection
        createReflection(reflectionContent, posEntry._id);
        // Clear the input field 
        setReflectionContent("");
    };
    return (
        <View>
            <View style={styles.pos_text_header_conatiner}>
                <Text style={styles.pos_text_header}> {posEntry.content} </Text>
            </View>
            <TextInput
                    style={styles.text_input}
                    multiline={true}
                    placeholder="  Enter a new reflection"
                    value={reflectionContent} // Connection to reflectionContent state variable
                    onChangeText={(text) => setReflectionContent(text)}
                />
            <TouchableOpacity
                onPress={() => addReflection()}
            >
                <View style={styles.add_new_entry_conatiner}>
                    <Text style={styles.add_new_entry}>Add Reflection</Text>
                </View>
            </TouchableOpacity> 
        </View>
    );
};

export default CreateReflectionScreen;