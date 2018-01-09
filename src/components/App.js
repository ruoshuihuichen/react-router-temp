import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    /*Link,*/
    Switch
} from 'react-router-dom';
import Home from './Home';
import User from './User';
import Profile from './Profile'
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import MenuLink from './MenuLink';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.css';
export default(
    <Router>
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">玫瑰园婚纱摄影</div>
                    </div>
                    <ul className="nav navbar-nav">
                        <MenuLink label="首页" to="/home"/>
                        <MenuLink label="用户管理" to="/user"/>
                        <MenuLink label="系统设置" to="/profile"/>
                        {/*<li><Link to="/home">首页</Link></li>
                        <li><Link to="/user">用户管理</Link></li>
                        <li><Link to="/profile">系统设置</Link></li>*/}
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Switch>{/*匹配到一个后就不再匹配*/}
                            <Route exact path="/" component={Home}/>{/*精确匹配*/}
                            <Route path="/login" component={Login}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/user" component={User}/>
                            <ProtectedRoute path="/profile" component={Profile}/>
                           {/* <Route path="/profile" component={Profile}/>*/}
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </Router>
)