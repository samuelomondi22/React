import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import CoursesPage from './courses/CoursesPage';

function App() {
    return(
        <div className='container-fluid'>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/> 
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/courses' component={CoursesPage}/>
            <Route component={PageNotFound}/> 
            </Switch>
        </div>
    )
}

export default App;

//Route exact path so only empty route matches so it just doesnt match any route
//react router will watch URL render the proper route, header will always be display above
//Switch only declares that one route should match. once one matches it stops looking for matching routes 
//<Route component={PageNotFound}/> no path because if non of the route match it should return the error message
