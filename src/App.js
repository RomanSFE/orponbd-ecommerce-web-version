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
import TopBrandsAllWeb from './components/topbrands/TopBrandsAllWeb';
import XiaomiBrand from './components/topbrands/xiaomi/XiaomiBrand';
// Top Brand End

// Details Section All Products flash deal, New arrival etc
import NewArrivalAllProducts from './components/detailssection/newarrivaldetails/NewArrivalAllProducts';
import BestSellingsDetails from './components/detailssection/bestsellingdetails/BestSellingsDetails';
import FlashDealDetails from './components/detailssection/flashdealdetails/FlashDealDetails';
// Details Section All Products flash deal, New arrival etc

// Pre Order Details
import PreOrderDetails from './components/preorderdetails/PreOrderDetails';
// Pre Order Details

// Grocery Main Page Details
import GroceryAllItems from './components/grocerydetailspage/GroceryAllItems';
import CookingEssentialCategoryDetails from './components/grocerydetailspage/cookingcatdetails/CookingEssentialCategoryDetails';
import SnacksAndConfectionaryCatDetails from './components/grocerydetailspage/snacksandconfectdetails/SnacksAndConfectionaryCatDetails';
import BeverageCatDetails from './components/grocerydetailspage/beveragedetails/BeverageCatDetails';
import HealthAndBeautyCatDetails from './components/grocerydetailspage/healthandbeauty/HealthAndBeautyCatDetails';
// Grocery Main Page Details

// Admin User Signin
import AdminUserSignin from './components/userpart/AdminUserSignin';
// Admin User Signin



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
          <Route path="/top-brands-all-brands" component={TopBrandsAllWeb}/>
          <Route path="/brand-xiaomi" component={XiaomiBrand}/>
          {/* Top Brands End */}

          {/* Details Section All Products flash deal, New arrival etc */}
          <Route path="/new-arrival-all-products" component={NewArrivalAllProducts}/>
          <Route path="/best-selling-all-products" component={BestSellingsDetails}/>
          <Route path="/flash-deal-all-products" component={FlashDealDetails}/>
          {/* Details Section All Products flash deal, New arrival etc */}

          {/* Pre Order Details  */}
          <Route path="/pre-order-details" component={PreOrderDetails}/>
          {/* Pre Order Details  */}

          {/* Grocery Main Page Details  */}
          <Route path="/grocery-all-items" component={GroceryAllItems}/>
          <Route path="/grocery-cooking-essentials-all-items" component={CookingEssentialCategoryDetails}/>
          <Route path="/grocery-snacks-confectionary-all-items" component={SnacksAndConfectionaryCatDetails}/>
          <Route path="/grocery-beverage-all-items" component={BeverageCatDetails}/>
          <Route path="/grocery-health-and-beauty-all-items" component={HealthAndBeautyCatDetails}/>
          {/* Grocery Main Page Details  */}

          {/* Admin User Signin */}
          <Route path="/admin-signin" component={AdminUserSignin}/>
          {/* Admin User Signin  */}



        </Switch>
        
      </div>
      </>
  );
}

export default App;
