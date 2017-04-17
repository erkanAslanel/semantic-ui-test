import React  from 'react';
import {render} from 'react-dom';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Home from './layout/home/home.jsx';

render(
    <Router>
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/topics">Topics</Link>
            </li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>

    </div>
</Router>, document.getElementById('app'));
