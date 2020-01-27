import React, { Component }
from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Brands_Carousel extends Component {
render() {
return (

<div class="container">
    <div class="pop-cat-slider slider-home4 pop-cat13">
        <div class="popcat-list-box popcat-list-box1">
            <h2><span>brands</span></h2>
        </div>
        <div class="wrap-item" data-pagination="false" data-navigation="true" data-itemscustom="[[0,3],[480,4],[768,7],[992,8],[1200,9]]">
            <OwlCarousel items={9} margin={0} autoplay ={false} nav dots={false}>
                <div class="item-pop-cat">
                    <div class="zoom-image-thumb">
                        <a href="#"><img src={'assets/images/brands/hp.jpg'} alt="" /></a>
                    </div>
                    <h2 class="pop-cat-title">HP</h2>
                </div>
                <div class="item-pop-cat">
                    <div class="zoom-image-thumb">
                        <a href="#"><img src={'assets/images/brands/Dells.png'} alt="" /></a>
                    </div>
                    <h2 class="pop-cat-title">Dell</h2>
                </div>
                <div class="item-pop-cat">
                    <div class="zoom-image-thumb">
                        <a href="#"><img src={'assets/images/brands/acer.jpg'} alt="" /></a>
                    </div>
                    <h2 class="pop-cat-title">Acer</h2>
                </div>
                <div class="item-pop-cat">
                    <div class="zoom-image-thumb">
                        <a href="#"><img src={'assets/images/brands/asus.png'} alt="" /></a>
                    </div>
                    <h2 class="pop-cat-title">Asus</h2>
                </div>
                <div class="item-pop-cat">
                    <div class="zoom-image-thumb">
                        <a href="#"><img src={'assets/images/brands/hp.jpg'} alt="" /></a>
                    </div>
                    <h2 class="pop-cat-title">HP</h2>
                </div>
                <div class="item-pop-cat">
                    <div class="zoom-image-thumb">
                        <a href="#"><img src={'assets/images/brands/Dells.png'} alt="" /></a>
                    </div>
                    <h2 class="pop-cat-title">Dell</h2>
                </div>
                <div class="item-pop-cat">
                    <div class="zoom-image-thumb">
                        <a href="#"><img src={'assets/images/brands/acer.jpg'} alt="" /></a>
                    </div>
                    <h2 class="pop-cat-title">Acer</h2>
                </div>
                <div class="item-pop-cat">
                    <div class="zoom-image-thumb">
                        <a href="#"><img src={'assets/images/brands/asus.png'} alt="" /></a>
                    </div>
                    <h2 class="pop-cat-title">Asus</h2>
                </div>
                <div class="item-pop-cat">
                    <div class="zoom-image-thumb">
                        <a href="#"><img src={'assets/images/brands/hp.jpg'} alt="" /></a>
                    </div>
                    <h2 class="pop-cat-title">HP</h2>
                </div>
                <div class="item-pop-cat">
                    <div class="zoom-image-thumb">
                        <a href="#"><img src={'assets/images/brands/Dells.png'} alt="" /></a>
                    </div>
                    <h2 class="pop-cat-title">Dell</h2>
                </div>
                <div class="item-pop-cat">
                    <div class="zoom-image-thumb">
                        <a href="#"><img src={'assets/images/brands/acer.jpg'} alt="" /></a>
                    </div>
                    <h2 class="pop-cat-title">Acer</h2>
                </div>
                <div class="item-pop-cat">
                    <div class="zoom-image-thumb">
                        <a href="#"><img src={'assets/images/brands/asus.png'} alt="" /></a>
                    </div>
                    <h2 class="pop-cat-title">Asus</h2>
                </div>
            </OwlCarousel>
        </div>
    </div>
</div>
        );
        }
}
export default Brands_Carousel;