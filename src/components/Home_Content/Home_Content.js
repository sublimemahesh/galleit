import React, { Component } from 'react';
import Main_Banner from './Main_Banner/Main_Banner';
import Testimonial from './Testimonial/Testimonial';
import Brands_Carousel from './Brands_Carousel/Brands_Carousel';
import Best_Deal from './Best_Deal/Best_Deal';
import Popular_Categories from './Popular_Categories/Popular_Categories';
import Category_Side_Bar from './Category_Side_Bar/Category_Side_Bar';
import Privacy_Shipping from './Privacy_Shipping/Privacy_Shipping';
import Order_Details from './Order_Details/Order_Details';

class Home_Content extends Component {
    render() {
        return (
                <div id="content">
                    <div class="container">
                        <div class="row">
                            <Category_Side_Bar />
                            <Main_Banner />
                            <Testimonial />
                        </div>
                        <Privacy_Shipping />
                    </div>
                    <Brands_Carousel />
                    <Best_Deal />
                    <Popular_Categories />
                    <Order_Details />
                </div>
                );
    }
}
export default Home_Content;