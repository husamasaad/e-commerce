import React from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';
import { Carousel, CarouselItem } from 'react-bootstrap';

const HeroBanner = ({ heroBanner }) => {

  const { desc, buttonText, largeText1, smallText, product } = heroBanner[0]


  return (
    <div className="row shadow align-items-center text-white text-center  gap-md-0 py-4 bg-dark mx-auto">
      <div className='col-12 col-md-6 order-2 order-md-1'>
        <div className="desc">
          <h1 className='display-5 mb-5'>{largeText1}</h1>
          <p className='fs-2 mb-5 fw-bold text-warning'>{smallText}</p>
        </div>
      </div>
      <div className='col-12 col-md-6 order-1 order-md-2'>
        <h3 className='display-5'>تخفيضات الشهر</h3>
        <h3 className='display-5 my-3 text-danger fw-bold'>{desc}</h3>
        <Carousel>
          {heroBanner.map((item) => (
            <CarouselItem key={item._id}>
            <Link href="#">
              <img src={urlFor(item.image)} alt="headphones" className="w-50" />
            </Link>
            <Carousel.Caption>
              <Link href={`/product/${item.product}`}>
                <button type='button' className='btn btn-danger mb-5 rounded-pill shadow p-3 fs-4'>{buttonText}</button>
              </Link>
            </Carousel.Caption>
          </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default HeroBanner