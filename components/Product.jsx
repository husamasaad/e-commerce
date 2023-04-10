import React from 'react';
import Link from 'next/link';



import { urlFor } from '@/lib/client';

const Product = ({ product : {image, name, slug, price, details, subtitle} }) => {
    // Formating prices : 10000 => 10,000
    const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
      maximumFractionDigits: 0,
    })
    const formatPrice = (price) => {
      return `${INTEGER_FORMATTER.format(price)}`
    }

  return (
    <div className='mx-md-3'>
      <div className="shop-card">
        <div className="title">
          {name}
        </div>
        <div className="desc">
          {subtitle}
        </div>
        <div className="slider">
            <img src={urlFor(image && image[0])} className='py-4 img-fluid'/>
        </div>

        <div className="cta d-flex align-items-center justify-content-between">
          <Link href={`/product/${slug.current}`}>
          <button className="btn">
            اقرأ المزيد
          </button>
          </Link>
          <div className="price">SDG {formatPrice(price)}</div>
        </div>
      </div>
    </div>
  )
}

export default Product


{/* <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link> */}