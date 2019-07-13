import React from 'react';

import { GlobalStyled } from './styled'
import { IconFontStyled } from './statics/iconfont/iconfont'

import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter ,Route } from 'react-router-dom'

import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'


import 'antd/dist/antd.css';

function App() {
    return (
        <Provider store = {store}>
            <div className = "App" >
                <GlobalStyled/>
                <IconFontStyled/>
                <Header></Header>
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail' exact component={Detail}></Route>

                    </div>

                </BrowserRouter>

            </div>
        </Provider>

    );
}

export default App;