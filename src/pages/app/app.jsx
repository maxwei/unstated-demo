//react
import React from 'react';
//css
import './app.scss';
//路由
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';
//页面组件
import Home from '../home/home';
import Demo from '../demo/demo';

class App extends React.Component{
    constructor(props){
        super(props);
        //初始化state
        this.state={
        };
    }
    render(){
        return(
            <div className="app">
                <nav>
                    <Link to="/demo">Demo页</Link>
                </nav>
                <hr/>
                <Switch>              
                    <Route exact path="/demo" component={Demo}/>
                    <Redirect to="/demo"/>
                </Switch>
            </div>
        )
    }
}

//导出组件
export default App;