import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Home Page Section
import HomePageWeb from './components/homepage/HomePageWeb.js'

// Womens Fashion Category
import WomensFashion from './components/categoriespages/womensfashions/WomensFashion';
// Womens Fashion Category Sub Watches
import WomensSubWatches from './components/categoriespages/womensfashions/subcategorywomens/WomensSubWatches.js';




function App() {
  return (
      <>
      <div className="orpon-bd-web-version-main-section-box">

        <Switch>
          <Route exact path="/" component={HomePageWeb}/>
          <Route path="/womens-fashion" component={WomensFashion}/>
          <Route path="/womens-sub-watchs" component={WomensSubWatches}/>
        </Switch>
        
      </div>
      </>
  );
}

export default App;
