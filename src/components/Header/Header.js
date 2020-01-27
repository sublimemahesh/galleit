import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/logo/logo.png';
import flag_usa from '../../images/home2/flag-usa.png';
import flag_french from '../../images/home1/flag-french.jpg';
import flag_german from '../../images/home1/flag-german.jpg';

class Header extends Component {
    render() {
        return (
                <div id="header">
                    <div class="container">
                        <div class="sub-header4">
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <ul class="top-info top-info-left">
                                        <li class="top-contact">
                                            <p><i class="fa fa-phone"></i> Call us: +94 11 366 3500</p>
                                        </li>
                                        <li class="top-language has-child">
                                            <a class="language-selected" href="#"><img alt="" src={flag_usa} />USA </a>
                                            <ul class="sub-menu-top">
                                                <li><a href="#"><img alt="" src={flag_usa} />USA</a></li>
                                                <li><a href="#"><img alt="" src={flag_french} />French</a></li>
                                                <li><a href="#"><img alt="" src={flag_german} />German</a></li>
                                            </ul>
                                        </li>
                                        <li class="top-currency has-child">
                                            <a class="currency-selected" href="#"><span>$</span>USD</a>
                                            <ul class="sub-menu-top">
                                                <li><a href="#"><span>€</span>EUR</a></li>
                                                <li><a href="#"><span>¥</span>JPY</a></li>
                                                <li><a href="#"><span>$</span>USD</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="top-info">
                                        <ul class="top-info-right">
                                            <li><a href="#"><i class="fa fa-user"></i> My account</a></li>
                                            <li><a href="#"><i class="fa fa-heart"></i> Wishlist</a></li>
                                            <li><a href="#"><i class="fa fa-arrow-circle-o-right"></i>Checkout</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="header4">
                            <div class="row">
                                <div class="col-md-3 col-sm-3 col-xs-12">
                                    <div class="logo4">
                                        <a href="./"><img src={logo} alt="Logo" /></a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-5 col-xs-12">
                                    <div class="smart-search search-form4">
                                        <div class="select-category">
                                            <a href="#" class="category-toggle-link">All</a>
                                            <ul class="list-category-toggle sub-menu-top">
                                                <li><a href="#">Computers</a></li>
                                                <li><a href="#">Laptops</a></li>
                                                <li><a href="#">Smart Phones</a></li>
                                            </ul>
                                        </div>
                                        <form class="smart-search-form">
                                            <input type="text"  name="search" value="Find product, categories..." onfocus="if (this.value == this.defaultValue)
                                                                    this.value = ''" onblur="if (this.value == '')
                                                                                this.value = this.defaultValue" />
                                            <input type="submit" value="search" />
                                        </form>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-4 col-xs-12">
                                    <div class="wrap-register-cart">
                                        <div class="register-box">
                                            <ul>
                                                <li><a href="#">Login</a></li>
                                                <li><a href="#">register</a></li>
                                            </ul>
                                            <p>My Account & Oder</p>
                                        </div>
                                        <div class="mini-cart mini-cart-2">
                                            <a href="cart.html" class="header-mini-cart2">
                                                <span class="total-mini-cart-icon"><i class="fa fa-shopping-basket"></i></span>
                                                <span class="total-mini-cart-item">0</span>
                                            </a>
                                            <div class="content-mini-cart">
                                                <h2>(2) ITEMS IN MY CART</h2>
                                                <ul class="list-mini-cart-item">
                                                    <li>
                                                        <div class="mini-cart-edit">
                                                            <a class="delete-mini-cart-item" href="#"><i class="fa fa-trash-o"></i></a>
                                                            <a class="edit-mini-cart-item" href="#"><i class="fa fa-pencil"></i></a>
                                                        </div>
                                                        <div class="mini-cart-thumb">
                                                            <a href="#"><img alt="" src="../../images/home1/mini-cart-thumb.png" /></a>
                                                        </div>
                                                        <div class="mini-cart-info">
                                                            <h3><a href="#">Burberry Pink &amp; black</a></h3>
                                                            <div class="info-price">
                                                                <span>$59.52</span>
                                                                <del>$17.96</del>
                                                            </div>
                                                            <div class="qty-product">
                                                                <span class="qty-down">-</span>
                                                                <span class="qty-num">1</span>
                                                                <span class="qty-up">+</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="mini-cart-edit">
                                                            <a class="delete-mini-cart-item" href="#"><i class="fa fa-trash-o"></i></a>
                                                            <a class="edit-mini-cart-item" href="#"><i class="fa fa-pencil"></i></a>
                                                        </div>
                                                        <div class="mini-cart-thumb">
                                                            <a href="#"><img alt="" src="images/home1/mini-cart-thumb.png" /></a>
                                                        </div>
                                                        <div class="mini-cart-info">
                                                            <h3><a href="#">Burberry Pink &amp; black</a></h3>
                                                            <div class="info-price">
                                                                <span>$59.52</span>
                                                                <del>$17.96</del>
                                                            </div>
                                                            <div class="qty-product">
                                                                <span class="qty-down">-</span>
                                                                <span class="qty-num">1</span>
                                                                <span class="qty-up">+</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div class="mini-cart-total">
                                                    <label>TOTAL</label>
                                                    <span>$24.28</span>
                                                </div>
                                                <div class="mini-cart-button">
                                                    <a class="mini-cart-view" href="#">view my cart </a>
                                                    <a class="mini-cart-checkout" href="#">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-nav2 header-nav4">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-9 col-sm-12 col-xs-12 col-md-offset-3">
                                    <nav class="main-nav main-nav4">
                                        <ul>
                                            <li><a href="./">home</a></li>
                                            <li><a href="grid.html">products</a></li>
                                            <li><a href="list.html">brands</a></li>
                                        </ul>
                                        <a href="#" class="toggle-mobile-menu"><span>Menu</span></a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}
export default Header;