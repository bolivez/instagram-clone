import Amplify from 'aws-amplify';
import config from './aws-exports';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

Amplify.configure(config);

AppRegistry.registerComponent(appName, () => App);
