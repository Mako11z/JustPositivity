/**
 * @format
 */
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';


AppRegistry.registerComponent(appName, () => App);
