import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// 日期国际化入口(地区)
import moment from 'moment';
import zh_Cn from 'antd/lib/locale-provider/zh_CN';
import {BrowserRouter} from 'react-router-dom';
import './api/print';
import { Provider } from 'react-redux';
import store from './store/store';
import RouteConfig from './router/index';
import { LocaleProvider } from 'antd';
import 'moment/locale/zh-cn';


moment.locale('zh-cn');

// 监听store发生的变化
// store.subscribe((store)=>{
//     console.log(store)
// })

// return <LocaleProvider locale={zh_cn}></LocaleProvider>

ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={ zh_Cn }>
            <BrowserRouter>
                <RouteConfig/>
            </BrowserRouter>
        </LocaleProvider>
        
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
