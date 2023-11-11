import { Text, View, TextInput, Button } from 'react-native';
import realm from '../RealmFiles/realmConfig';
import { createReflection, readPosEntries, readPosEntryByID } from "../RealmFiles/realmFunctions";
import { useState } from 'react';

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
            <Text> {posEntry.content} </Text>
            <TextInput
                    placeholder="Enter a new reflection"
                    value={reflectionContent} // Connection to reflectionContent state variable
                    onChangeText={(text) => setReflectionContent(text)}
                />
            <Button title="Create Reflection" onPress={addReflection} />
        </View>
    );
};

export default CreateReflectionScreen;