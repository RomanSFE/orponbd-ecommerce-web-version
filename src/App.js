import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Home Page Section
import HomePageWeb from './components/homepage/HomePageWeb.js'

// Womens Fashion Category start
import WomensFashion from './components/categoriespages/womensfashions/WomensFashion';
import WomensSubWatches from './components/categoriespages/womensfashions/subcategorywomens/WomensSubWatches.js';
import WomenSubBeautyAndHealth from './components/categoriespages/womensfashions/subcategorywomens/WomenSubBeautyAndHealth';
import WomensSubBags from './components/categoriespages/womensfashions/subcategorywomens/WomensSubBags';
// Womens Fashion Category End

// Top Brand Start
import XiaomiBrand from './components/topbrands/xiaomi/XiaomiBrand';
// Top Brand End

// Details Section All Products flash deal, New arrival etc
import NewArrivalAllProducts from './components/detailssection/newarrivaldetails/NewArrivalAllProducts';
// Details Section All Products flash deal, New arrival etc



function App() {
  return (
      <>
      <div className="orpon-bd-web-version-main-section-box">

        <Switch>
          <Route exact path="/" component={HomePageWeb}/>

          {/* Women Fashion Category start */}
          <Route path="/womens-fashion" component={WomensFashion}/>
          <Route path="/womens-sub-watchs" component={WomensSubWatches}/>
          <Route path="/womens-sub-beauty-and-health" component={WomenSubBeautyAndHealth}/>
          <Route path="/womens-sub-womens-bags" component={WomensSubBags}/>
          {/* Women Fashion Category start */}

          {/* Top Brands Start */}
          <Route path="/brand-xiaomi" component={XiaomiBrand}/>
          {/* Top Brands End */}

          {/* Details Section All Products flash deal, New arrival etc */}
          <Route path="/new-arrival-all-products" component={NewArrivalAllProducts}/>
          {/* Details Section All Products flash deal, New arrival etc */}

        </Switch>
        
      </div>
      </>
  );
}

export default App;
