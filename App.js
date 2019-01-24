/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from "react-redux";
import AppContainer from "./src/views";
import store from './src/redux/store'
export default class App extends Component {
    constructor () {
        super()
    }
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}