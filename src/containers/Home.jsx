import React from 'react'
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Carouselitems from '../components/Carouselitems'
import '../assets/styles/App.css';

const Home =() =>{

 return(
    <div className="App">
        <Header/>
        <Search/>
        <Carousel>
            <Carouselitems/>
            <Carouselitems/>
            <Carouselitems/>
        </Carousel>

        <Carousel>
            <Carouselitems/>
            <Carouselitems/>
            <Carouselitems/>
        </Carousel>
        
    </div>
 )
    

}

export default Home