import { View, Text, SafeAreaView, TouchableOpacity, AppState, FlatList, Button } from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import React, { useEffect, useState } from 'react';
import PushNotification from 'react-native-push-notification';

const HomeScreen = ({ navigation }) => {
  const scheduleLocalNotification = () => {
    // Define the notification details
    const notificationDetails = {
      alertBody: 'This is a local notification!',
      alertTitle: 'Local Notification',
      alertAction: 'view',
      soundName: 'default',
      category: 'notificationCategory',
      userInfo: { customKey: 'customValue' },
      applicationIconBadgeNumber: 1,
    };
    const fireDate = new Date();
    fireDate.setSeconds(fireDate.getSeconds() + 5);
    PushNotificationIOS.addNotificationRequest({
      id: 'unique-notification-id',
      title: 'Local Notification',
      body: 'This is a local notification!',
      fireDate: fireDate.toISOString(), // Convert the date to ISO string format
      ...notificationDetails,
    });
  };
  // What branch is this? Master branch
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Send Notification" onPress={scheduleLocalNotification} />
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