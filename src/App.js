import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Home Page Section
import HomePageWeb from './components/homepage/HomePageWeb.js'

// Womens Fashion Category
import WomensFashion from './components/categoriespages/womensfashions/WomensFashion';




function App() {
  return (
      <>
      <div className="orpon-bd-web-version-main-section-box">

        <Switch>
          <Route exact path="/" component={HomePageWeb}/>
          <Route path="/womens-fashion" component={WomensFashion}/>
        </Switch>
        
      </div>
      </>
  );
}

export default App;
