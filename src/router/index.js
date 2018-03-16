/**
 * 全局路由安装
 * 组件异步加载需要安装 react-hot-loader
 *
 */
import React, { Component } from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import App from '../App'
import  history  from '../history'
import LazyRoute from 'lazy-route'


class ROUTER extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter history={history}>
                <App>

                    <Route
                        exact
                        path='/'
                        render={props => (
                            <LazyRoute {...props} component={ import ('../pages/home') } />
                        )}
                    />
                    <Route
                       path='/info'
                       render={props => (
                           <LazyRoute {...props} component={ import ('../pages/info') } />
                       )}
                    />
                    <Route
                        path='/list'
                        render={props => (
                            <LazyRoute {...props} component={ import ('../pages/list') } />
                        )}
                    />
                </App>
            </BrowserRouter>
        )
    }
}

export default ROUTER;