import React from 'react';
// import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Top Menu section
 import TopMenuSection from './components/topmenusection/TopMenuSection.js'

// Home Page Slider
 import HomeSliderAndCategory from './components/homesliderandcategory/HomeSliderAndCategory.js'

// Flash Deals Sections
 import FlashDeals from './components/allsections/flashdeals/FlashDeals.js'

// New Arrival Sections
 import NewArrivalWeb from './components/allsections/newarrival/NewArrivalWeb.js'

// Best Selling Sections
 import BestSellingWeb from './components/allsections/bestselling/BestSellingWeb.js'

// Hot Category Sections
 import HotCategorySecWeb from './components/allsections/hotcategory/HotCategorySecWeb.js'

// Top Brands Sections
 import TopBrandsSectionWeb from './components/allsections/topbrands/TopBrandsSectionWeb.js'

// Home Banner Section
 import HomeBannerSec from './components/allsections/homebannersection/HomeBannerSec.js'

// Global Shopping Section
 import GlobalShoppingWeb from './components/allsections/globalshopping/GlobalShoppingWeb.js'

// More To Love All Product Section
 import MoreToLoveAllProducts from './components/allsections/moretoloveallproducts/MoreToLoveAllProducts.js'




function App() {
  return (
      <>
      <div className="orpon-bd-web-version-main-section-box">
        
        <TopMenuSection/>
        <HomeSliderAndCategory/>
        <FlashDeals/>
        <NewArrivalWeb/>
        <GlobalShoppingWeb/>
        <BestSellingWeb/>
        <HomeBannerSec/>
        <TopBrandsSectionWeb/>
        <HotCategorySecWeb/>
        <MoreToLoveAllProducts/>
        
      </div>
      </>
  );
}

export default App;
