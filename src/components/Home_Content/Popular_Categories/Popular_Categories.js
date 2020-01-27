import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Popular_Categories extends Component {
    render() {
        return (
                <div class="hot-deal-box content-product18">
        <div class="container">
            <div class="popcat-list-box">
                <h2><span>popular categories</span></h2>
            </div>
            <div class="row">
            <div class="col-md-9">
                <div class="product-box18">

                    <div class="row">

                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="hot-deal-tab-slider">
                                <div class="hot-deal-tab-title">
                                    <label>Laptops</label>
                                </div>
                                <div class="tab-content">
                                    <div class="">
                                        <div class="hot-deal-slider slider-home2">
                                            <div class="wrap-item" data-navigation="true" data-pagination="false" data-itemscustom="[[0,1],[480,2],[768,3],[980,4],[1200,4]]">
                                            <OwlCarousel items={4} margin={0} autoplay ={false} nav dots={false}>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>10%</strong>
                                                                <span>+10% for Member123</span>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/Products/1.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/Products/2.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Chromebook 14 G5</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$567.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/Products/4.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/Products/5.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Spectre 13</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$565.00</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>37%</strong>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/Products/5.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/Products/4.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Elite Dragonfly</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$986.00</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>15%</strong>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/Products/2.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/Products/5.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Spectre 13</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$765.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>30%</strong>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/Products/1.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/Products/4.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Spectre 13</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$567.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>10%</strong>
                                                                <span>+10% for Member</span>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/Products/5.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/Products/2.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Elite Dragonfly</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$567.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </OwlCarousel>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-adv-simple">
                                <a href="#"><img alt="" src={'assets/images/Products/banner-3.jpg'} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-box18">

                    <div class="row">

                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="hot-deal-tab-slider">
                                <div class="hot-deal-tab-title">
                                    <label>Smart Phones</label>
                                </div>
                                <div class="tab-content">
                                    <div class="">
                                        <div class="hot-deal-slider slider-home2">
                                            <div class="wrap-item" data-navigation="true" data-pagination="false" data-itemscustom="[[0,1],[480,2],[768,3],[980,4],[1200,4]]">
                                            <OwlCarousel items={4} margin={0} autoplay ={false} nav dots={false}>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>10%</strong>
                                                                <span>+10% for Member123</span>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/photos/mobile/0.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/photos/mobile/1.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Chromebook 14 G5</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$567.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/photos/mobile/2.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/photos/mobile/3.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Spectre 13</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$565.00</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>37%</strong>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/photos/mobile/5.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/photos/mobile/6.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Elite Dragonfly</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$986.00</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>15%</strong>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/photos/mobile/7.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/photos/mobile/8.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Spectre 13</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$765.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>30%</strong>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/photos/mobile/9.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/photos/mobile/10.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Spectre 13</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$567.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>10%</strong>
                                                                <span>+10% for Member</span>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/photos/mobile/11.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/photos/mobile/12.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Elite Dragonfly</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$567.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </OwlCarousel>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-adv-simple">
                                <a href="#"><img alt="" src={'assets/images/Products/banner-1.jpg'} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-box18">

                    <div class="row">

                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="hot-deal-tab-slider">
                                <div class="hot-deal-tab-title">
                                    <label>Computers</label>
                                </div>
                                <div class="tab-content">
                                    <div class="">
                                        <div class="hot-deal-slider slider-home2">
                                            <div class="wrap-item" data-navigation="true" data-pagination="false" data-itemscustom="[[0,1],[480,2],[768,3],[980,4],[1200,4]]">
                                            <OwlCarousel items={4} margin={0} autoplay ={false} nav dots={false}>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>10%</strong>
                                                                <span>+10% for Member123</span>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/Products/3.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/Products/2.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">iMac G4-2002</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$567.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/Products/4.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/Products/5.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Spectre 13</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$565.00</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>37%</strong>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/Products/5.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/Products/4.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Elite Dragonfly</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$986.00</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>15%</strong>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/Products/2.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/Products/5.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Spectre 13</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$765.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>30%</strong>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/Products/1.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/Products/4.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Spectre 13</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$567.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-hot-deal-product">
                                                        <div class="hot-deal-product-thumb">
                                                            <div class="cat-hover-percent">
                                                                <strong>10%</strong>
                                                                <span>+10% for Member</span>
                                                            </div>
                                                            <div class="product-thumb">
                                                                <a class="product-thumb-link" href="#">
                                                                    <img alt="" src={'assets/images/Products/5.jpg'} class="first-thumb" />
                                                                    <img alt="" src={'assets/images/Products/2.jpg'} class="second-thumb" />
                                                                </a>
                                                                <div class="product-info-cart">
                                                                    <div class="product-extra-link">
                                                                        <a class="wishlist-link" href="#"><i class="fa fa-heart-o"></i></a>
                                                                        <a class="compare-link" href="#"><i class="fa fa-toggle-on"></i></a>
                                                                        <a class="quickview-link" href="#"><i class="fa fa-search"></i></a>
                                                                    </div>
                                                                    <a class="addcart-link" href="#"><i class="fa fa-shopping-basket"></i> Add to Cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="hot-deal-product-info">
                                                            <h3 class="title-product"><a href="#">HP Elite Dragonfly</a></h3>
                                                            <div class="info-price">
                                                                <span>$455.99 </span>
                                                                <del>$567.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </OwlCarousel>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-adv-simple">
                                <a href="#"><img alt="" src={'assets/images/Products/banner-2.jpg'} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12 col-xs-12 hidden-sm">
                <div class="item-adv-simple">
                    <a href="#"><img src={'assets/images/Products/ad-1.jpg'} alt="" /></a>
                </div>
                <div class="item-adv-simple">
                    <a href="#"><img src={'assets/images/Products/ad-3.jpg'} alt="" /></a>
                </div>
                <div class="item-adv-simple">
                    <a href="#"><img src={'assets/images/Products/ad-2.jpg'} alt="" /></a>
                </div>
                <div class="item-adv-simple">
                    <a href="#"><img src={'assets/images/Products/ad-4.jpg'} alt="" /></a>
                </div>
            </div>
            </div>
        </div>
    </div>
                );
    }
}
export default Popular_Categories;