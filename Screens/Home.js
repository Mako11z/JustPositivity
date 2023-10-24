import { View, Text, SafeAreaView, TouchableOpacity, AppState, FlatList, Button } from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import React, { useEffect, useState } from 'react';
import PushNotification from 'react-native-push-notification';

const HomeScreen = ({ navigation, route }) => {
    const { customVar } = route.params;
    useEffect(() => {
        console.log(customVar);
    }, []);
    return (
        <View>
            <Text>Home Screen</Text>
            <Button 
            title='Positive Messages'
            onPress={() => {
            navigation.navigate('PosMessage')
        }}
        />
        </View>
    )
}

export default HomeScreen;