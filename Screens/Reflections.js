import React, { useEffect, useState } from "react";
import Realm from "realm";
import { View, Text, SafeAreaView, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import { readPosEntryByID } from "../RealmFiles/realmFunctions";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import styles from "../Styles/styles";

const ReflectionScreen = ({ route }) => {
    const { posEntryId } = route.params;
    const [posEntry, setPosEntry] = useState(null);
    const nav = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
          const fetchPosEntry = () => {
            const objectIdForPosEntry = Realm.BSON.ObjectID.createFromHexString(posEntryId);
            const posEntryData = readPosEntryByID(objectIdForPosEntry);
            setPosEntry(posEntryData);
          };
          fetchPosEntry();
        }, [posEntryId])
      );

    const renderItem = ({ item }) => (
        <View style={styles.reflection_entries_container}>
            <Text style={styles.reflection_entries_text}>{item.reflectContent}</Text>
        </View>
    );

    const navToCreateReflectionScreen = (posEntryId) => {
        nav.navigate('CreateReflection', { posEntryId: posEntryId.toHexString() });
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.pos_text_header_conatiner_reflections}> 
                    <Text style={styles.pos_text_header}>
                        {posEntry?.content}
                    </Text>
                </View>
                <TouchableOpacity 
                 onPress={() => navToCreateReflectionScreen(posEntry._id)} 
                >
                   <View style={styles.add_reflection_container}>
                     <Text style={styles.add_reflection_text}>Add a reflection</Text>
                   </View>
                </TouchableOpacity>
                <View style={styles.reflection_header_conatiner}> 
                    <Text style={styles.reflection_header}>Reflections</Text>
                </View>
                <FlatList
                    data={posEntry?.reflections}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </SafeAreaView>
    );
};

export default ReflectionScreen;
