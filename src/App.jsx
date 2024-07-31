import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './code/store';
import Desplay from './code/desplay';
import Input from './code/input';

function App() {
    return (
        <Provider store={store}>
            <Input />
            <Desplay />
        </Provider>
    );
}

export default App
