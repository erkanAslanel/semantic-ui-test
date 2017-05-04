import React  from 'react';
import {render} from 'react-dom';
import { Grid, Image } from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import About from './layout/about/index.jsx';
import Home from './layout/home/index.jsx';
import MenuExampleBasic from './layout/master/menu.jsx';

render(
    <Router>
    <div>
    <MenuExampleBasic />
    <div   style={{marginLeft: 220 + 'px'}}>

    <Grid columns={1} padded>
         <Grid.Column>

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
                 <Route  path="/about" component={About}/>
         </Grid.Column>
       </Grid>


    </div>



    </div>
</Router>, document.getElementById('app'));
