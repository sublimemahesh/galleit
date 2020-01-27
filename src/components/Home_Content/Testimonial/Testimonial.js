import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Testimonial extends Component {
    render() {
        return (
                <div class="col-md-3 col-sm-4 col-xs-12">
                <div class="hot-deals">
                    <h2><i class="fa fa-clock-o"></i> Testimonial</h2>
                    <div class="hotdeals-slider slider-home4 simple-owl-slider">
                        <div class="wrap-item" data-navigation="true" data-pagination="false" data-itemscustom="[[0,1]]">
                        <OwlCarousel items={1} margin={0} autoplay ={true} loop nav dots={false}>
                            <div class="item">
                                <ul class="list-product-hotdeal">
                                    <li>
                                        <div class="author-testimo">
                                            <div class="author-test-link">
                                                <a href="#"><img src={'assets/images/home2/test1.jpg'} alt="" /></a>
                                            </div>
                                            <div class="author-test-info">
                                                <h3><a href="#">Janet Cummings</a></h3>
                                                <span>Beamsoft</span>
                                            </div>
                                        </div>
                                        <p class="desc">Proin urna enim, semper at egestas sed, elem entum in justo. Mauris sed mauris biben dum est imperdiet. </p>
                                    </li>
                                    <li>
                                        <div class="author-testimo">
                                            <div class="author-test-link">
                                                <a href="#"><img src={'assets/images/home2/test1.jpg'} alt="" /></a>
                                            </div>
                                            <div class="author-test-info">
                                                <h3><a href="#">Janet Cummings</a></h3>
                                                <span>Beamsoft</span>
                                            </div>
                                        </div>
                                        <p class="desc">Proin urna enim, semper at egestas sed, elem entum in justo. Mauris sed mauris biben dum est imperdiet. </p>
                                    </li>
                                </ul>
                            </div>
                            <div class="item">
                                <ul class="list-product-hotdeal">
                                    <li>
                                        <div class="author-testimo">
                                            <div class="author-test-link">
                                                <a href="#"><img src={'assets/images/home2/test1.jpg'} alt="" /></a>
                                            </div>
                                            <div class="author-test-info">
                                                <h3><a href="#">Janet Cummings</a></h3>
                                                <span>Beamsoft</span>
                                            </div>
                                        </div>
                                        <p class="desc">Proin urna enim, semper at egestas sed, elem entum in justo. Mauris sed mauris biben dum est imperdiet. </p>
                                    </li>
                                    <li>
                                        <div class="author-testimo">
                                            <div class="author-test-link">
                                                <a href="#"><img src={'assets/images/home2/test1.jpg'} alt="" /></a>
                                            </div>
                                            <div class="author-test-info">
                                                <h3><a href="#">Janet Cummings</a></h3>
                                                <span>Beamsoft</span>
                                            </div>
                                        </div>
                                        <p class="desc">Proin urna enim, semper at egestas sed, elem entum in justo. Mauris sed mauris biben dum est imperdiet. </p>
                                    </li>
                                </ul>
                            </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
                );
    }
}
export default Testimonial;