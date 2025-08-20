import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';

import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { productImagePipe } from '../../pipes/product-image.pipe';


@Component({
  selector: 'app-product-carousel',
  imports: [ productImagePipe ] ,
  templateUrl: './product-carousel.html',
  styleUrl: './product-carousel.css'
})
export class ProductCarousel implements AfterViewInit {

  ngAfterViewInit(): void {

    const element = this.swiperDiv().nativeElement;
    if( !element ){
      return;
    }

  const swiper = new Swiper(element, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

  modules: [Navigation, Pagination],


    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });  }

  images = input.required<string[]>()
  swiperDiv = viewChild.required<ElementRef>('swiperDiv')

}
