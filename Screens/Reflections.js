import React, { useState } from "react";
import Realm from "realm";
import { View, Text, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import { createReflection, readPosEntries, readPosEntryByID } from "../RealmFiles/realmFunctions";

const ReflectionScreen = ({ route }) => {
    // Passed posEntry._id from PosMessageScreen
    const { posEntryId } = route.params;
    // Create insatnce of MongoDB objectID
    const objectIdForPosEntry = Realm.BSON.ObjectID.createFromHexString(posEntryId);
    const posEntry = readPosEntryByID(objectIdForPosEntry);

    const [reflectionContent, setReflectionContent] = useState(""); // State variable to hold relfection content
    // Add a reflection
    const addReflection = () => {
        if (reflectionContent.trim() === "") return;
        // Create a new reflection
        createReflection(reflectionContent, posEntry._id);
        // Clear the input field 
        setReflectionContent("");
    };

    return (
        <SafeAreaView>
            <View>
                <Text>Content: {posEntry.content}</Text>
                <TextInput
                    placeholder="Enter a new reflection"
                    value={reflectionContent} // Connection to reflectionContent state variable
                    onChangeText={(text) => setReflectionContent(text)}
                />
                <Button title="Add reflection" onPress={addReflection} />
                <Text>Reflections:</Text>
                {posEntry.reflections.map((reflection) => (
                    <View key={reflection._id}>
                        <Text>Reflection Content: {reflection.reflectContent} </Text>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default ReflectionScreen;