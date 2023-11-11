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
            <Text>{item.reflectContent}</Text>
        </View>
    );

    const navToCreateReflectionScreen = (posEntryId) => {
        nav.navigate('CreateReflection', { posEntryId: posEntryId.toHexString() });
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text>{posEntry && posEntry.content}</Text>
                <Button title="Create Reflection" onPress={() => navToCreateReflectionScreen(posEntry._id)} />
                <Text>Reflections:</Text>
                <FlatList
                    data={posEntry && posEntry.reflections}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </SafeAreaView>
    );
};

export default ReflectionScreen;
