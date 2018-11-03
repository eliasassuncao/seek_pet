import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from '../../reducers'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {AuthSwitchNavigator} from '../../navigators'
import {Root} from 'native-base'

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <AuthSwitchNavigator/>
                </Root>
            </Provider>
        )
    }
}