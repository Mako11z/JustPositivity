import { View, Text, SafeAreaView, TouchableOpacity, AppState, FlatList, Button } from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import React, { useEffect, useState } from 'react';
import PushNotification from 'react-native-push-notification';

const HomeScreen = ({ navigation }) => {
  /*const scheduleLocalNotification = () => {
    // Schedule a local notification
PushNotification.localNotification({
  channelId: 'default-channel-id', // Channel ID (for Android 8+)
  title: 'Hello world',
  message: 'Hello everybody',
  // Add other options here as needed
});
  }*/
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