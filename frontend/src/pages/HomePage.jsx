import React from 'react'
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero/Hero.jsx";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct.jsx";
//import Events from "../components/Events/Events";
//import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer.jsx";

const HomePage = () => {
  return (
 
<div> 
   <Header activeHeading={1} />
   <Hero />
   <Categories />
   <BestDeals />
  <FeaturedProduct />
  <Footer />
</div>
      
        
        
       
        //<Events /> 
        //
        //<Sponsored />
        //<Footer />
   
  )
}

export default HomePage