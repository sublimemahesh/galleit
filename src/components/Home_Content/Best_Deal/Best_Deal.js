import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Best_Deal extends Component {
    render() {
        return (

     <div class="main-content-home5 best-deal">
        <div class="container">
            <div class="popcat-list-box popcat-list-box1">
                <h2><span>best deals</span></h2>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="content-popular5">
                    <Tabs>
                        <div class="popular-cat-title">
                        <TabList>
                            <ul>
                                <Tab><li class="active"><a href="#best1" data-toggle="tab">best Deals</a></li></Tab>
                            </ul>
                            </TabList>
                        </div>
                        <div class="tab-content">
                        <TabPanel>
                            <div role="tabpanel" class="tab-pane fade in active" id="best1">
                                <div class="popular-cat-slider slider-home5">
                                    <div class="wrap-item" data-pagination="false" data-navigation="true" data-itemscustom="[[0, 1],[768, 2],[992, 3],[1200, 4]]">
                                    <OwlCarousel items={4} margin={0} autoplay ={false} nav dots={false}>
                                        <div class="item">
                                            <div class="item-product5">
                                                <div class="product-thumb product-thumb5">
                                                    <a href="#" class="product-thumb-link">
                                                        <img class="first-thumb" src={'assets/images/Products/4.jpg'} alt="" />
                                                        <img class="second-thumb" src={'assets/images/Products/5.jpg'} alt="" />
                                                    </a>
                                                    <div class="product-info-cart">
                                                        <div class="product-extra-link">
                                                            <a href="#" class="wishlist-link"><i class="fa fa-heart-o"></i></a>
                                                            <a href="#" class="compare-link"><i class="fa fa-toggle-on"></i></a>
                                                            <a href="#" class="quickview-link"><i class="fa fa-search"></i></a>
                                                        </div>
                                                        <a href="#" class="addcart-link"><i class="fa fa-shopping-basket"></i>  Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div class="product-info5">
                                                    <h3 class="title-product"><a href="#">HP Chromebook 14 G5 </a></h3>
                                                    <div class="info-price">
                                                        <span>$40.60 </span>
                                                    </div>
                                                    <div class="product-rating">
                                                        <div class="inner-rating"></div>
                                                        <span>(1s)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-product5">
                                                <div class="product-thumb product-thumb5">
                                                    <a href="#" class="product-thumb-link">
                                                        <img class="first-thumb" src={'assets/images/Products/2.jpg'} alt="" />
                                                        <img class="second-thumb" src={'assets/images/Products/1.jpg'} alt="" />
                                                    </a>
                                                    <div class="product-info-cart">
                                                        <div class="product-extra-link">
                                                            <a href="#" class="wishlist-link"><i class="fa fa-heart-o"></i></a>
                                                            <a href="#" class="compare-link"><i class="fa fa-toggle-on"></i></a>
                                                            <a href="#" class="quickview-link"><i class="fa fa-search"></i></a>
                                                        </div>
                                                        <a href="#" class="addcart-link"><i class="fa fa-shopping-basket"></i>  Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div class="product-info5">
                                                    <h3 class="title-product"><a href="#">HP Chromebook 14 G5 </a></h3>
                                                    <div class="info-price">
                                                        <span>$30.99 </span>
                                                        <del>$327.00</del>
                                                    </div>
                                                    <div class="product-rating">
                                                        <div class="inner-rating"></div>
                                                        <span>(1s)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-product5">
                                                <div class="product-thumb product-thumb5">
                                                    <a href="#" class="product-thumb-link">
                                                        <img class="first-thumb" src={'assets/images/Products/2.jpg'} alt="" />
                                                        <img class="second-thumb" src={'assets/images/Products/3.jpg'} alt="" />
                                                    </a>
                                                    <div class="product-info-cart">
                                                        <div class="product-extra-link">
                                                            <a href="#" class="wishlist-link"><i class="fa fa-heart-o"></i></a>
                                                            <a href="#" class="compare-link"><i class="fa fa-toggle-on"></i></a>
                                                            <a href="#" class="quickview-link"><i class="fa fa-search"></i></a>
                                                        </div>
                                                        <a href="#" class="addcart-link"><i class="fa fa-shopping-basket"></i>  Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div class="product-info5">
                                                    <h3 class="title-product"><a href="#">HP Chromebook 14 G5 </a></h3>
                                                    <div class="info-price">
                                                        <span>$59.52</span>
                                                    </div>
                                                    <div class="product-rating">
                                                        <div class="inner-rating"></div>
                                                        <span>(1s)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-product5">
                                                <div class="product-thumb product-thumb5">
                                                    <a href="#" class="product-thumb-link">
                                                        <img class="first-thumb" src={'assets/images/photos/mobile/9.jpg'} alt="" />
                                                        <img class="second-thumb" src={'assets/images/photos/mobile/12.jpg'} alt="" />
                                                    </a>
                                                    <div class="product-info-cart">
                                                        <div class="product-extra-link">
                                                            <a href="#" class="wishlist-link"><i class="fa fa-heart-o"></i></a>
                                                            <a href="#" class="compare-link"><i class="fa fa-toggle-on"></i></a>
                                                            <a href="#" class="quickview-link"><i class="fa fa-search"></i></a>
                                                        </div>
                                                        <a href="#" class="addcart-link"><i class="fa fa-shopping-basket"></i>  Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div class="product-info5">
                                                    <h3 class="title-product"><a href="#">HP Chromebook 14 G5 </a></h3>
                                                    <div class="info-price">
                                                        <span>$87.00 </span>
                                                        <del>$200.00</del>
                                                    </div>
                                                    <div class="product-rating">
                                                        <div class="inner-rating"></div>
                                                        <span>(1s)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-product5">
                                                <div class="product-thumb product-thumb5">
                                                    <a href="#" class="product-thumb-link">
                                                        <img class="first-thumb" src={'assets/images/photos/mobile/7.jpg'} alt="" />
                                                        <img class="second-thumb" src={'assets/images/photos/mobile/8.jpg'} alt="" />
                                                    </a>
                                                    <div class="product-info-cart">
                                                        <div class="product-extra-link">
                                                            <a href="#" class="wishlist-link"><i class="fa fa-heart-o"></i></a>
                                                            <a href="#" class="compare-link"><i class="fa fa-toggle-on"></i></a>
                                                            <a href="#" class="quickview-link"><i class="fa fa-search"></i></a>
                                                        </div>
                                                        <a href="#" class="addcart-link"><i class="fa fa-shopping-basket"></i>  Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div class="product-info5">
                                                    <h3 class="title-product"><a href="#">HP Chromebook 14 G5 </a></h3>
                                                    <div class="info-price">
                                                        <span>$87.00 </span>
                                                    </div>
                                                    <div class="product-rating">
                                                        <div class="inner-rating"></div>
                                                        <span>(1s)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-product5">
                                                <div class="product-thumb product-thumb5">
                                                    <a href="#" class="product-thumb-link">
                                                        <img class="first-thumb" src={'assets/images/photos/mobile/10.jpg'} alt=""/>
                                                        <img class="second-thumb" src={'assets/images/photos/mobile/11.jpg'} alt=""/>
                                                    </a>
                                                    <div class="product-info-cart">
                                                        <div class="product-extra-link">
                                                            <a href="#" class="wishlist-link"><i class="fa fa-heart-o"></i></a>
                                                            <a href="#" class="compare-link"><i class="fa fa-toggle-on"></i></a>
                                                            <a href="#" class="quickview-link"><i class="fa fa-search"></i></a>
                                                        </div>
                                                        <a href="#" class="addcart-link"><i class="fa fa-shopping-basket"></i>  Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div class="product-info5">
                                                    <h3 class="title-product"><a href="#">HP Chromebook 14 G5 </a></h3>
                                                    <div class="info-price">
                                                        <span>$87.00 </span>
                                                        <del>$200.00</del>
                                                    </div>
                                                    <div class="product-rating">
                                                        <div class="inner-rating"></div>
                                                        <span>(1s)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                            </TabPanel>
                        </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    </div>
                );
    }
}
export default Best_Deal;