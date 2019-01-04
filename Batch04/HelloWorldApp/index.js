/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import Login from './session03/Login'
import Instagram from './session04/Instagram'
import FlexLayout from './session04/FlexLayout'
import FlexLayoutComplex from './session04/FlexLayoutComplex'
import ScrollViewComponent from './session05/ScrollViewComponent'
import NetworkingComponent from './session05/NetworkingComponent'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => NetworkingComponent);
