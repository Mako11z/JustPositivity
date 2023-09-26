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
  // Add configuration options here
  onNotification: function (notification) {
    // Handle the notification here
    console.log('Notification:', notification);
    // You can navigate to a specific screen or perform an action here
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
});
AppRegistry.registerComponent(appName, () => App);
