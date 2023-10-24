/**
 * @format
 */
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';

// Initialize PushNotification
PushNotification.configure({
    // Called when a notifictaion is received
    onNotification: function (notification) {
      console.log('Notification:', notification);
      // Handle the received notification here
    },
    // Request permissions
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: false,
  });

AppRegistry.registerComponent(appName, () => App);
