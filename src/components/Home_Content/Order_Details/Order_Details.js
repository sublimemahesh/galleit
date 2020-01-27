import React, { Component } from 'react';

class Order_Details extends Component {
    render() {
        return (
                <div class="container">
                    <div class="list-service2">
                        <div class="row">

                            <div class="col-md-4 col-sm-4 col-xs-12">
                                <div class="item-service2">
                                    <div class="service-thumb2">
                                        <a href="#"><img src={'assets/images/home2/od1.png'} alt="" /></a>
                                    </div>
                                    <div class="service-info2">
                                        <h2>Order Online</h2>
                                        <span>Hours: 8AM -11PM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12">
                                <div class="item-service2">
                                    <div class="service-thumb2">
                                        <a href="#"><img src={'assets/images/home2/od2.png'} alt="" /></a>
                                    </div>
                                    <div class="service-info2">
                                        <h2>Save 30% </h2>
                                        <span>When you use credit card</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12">
                                <div class="item-service2">
                                    <div class="service-thumb2">
                                        <a href="#"><img src={'assets/images/home2/od3.png'} alt="" /></a>
                                    </div>
                                    <div class="service-info2">
                                        <h2>Free Shipping</h2>
                                        <span>On orders over $99</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}
export default Order_Details;