import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '@/lib/client';
import { Product } from '@/components';
import { useStateContext } from '@/context/stateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, subtitle, cat } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart, formatPrice } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <section className='bg-white py-5'>
      <div className='container py-5 my-5'>
        <div className='row align-tems-center'>
          <div className='col-12 col-md-6 text-center order-2 order-md-1'>
            <img src={urlFor(image && image[index])} className="p-img img-fluid bg-light shadow p-5 rounded" />
            <div className="d-flex gap-2 mt-4 flex-wrap">
              {image?.map((item, i) => (
                <img 
                  key={i}
                  src={urlFor(item)}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
          <div className='col-12 col-md-6 px-5 py-5 py-md-0 order-1 order-md-2'>
            <p className='fw-light fs-5 m-0 d-flex align-items-center gap-1'>
              الفئة : <span className='text-danger fw-bold'>{cat}</span>
            </p>
            <h1 className='display-3 fw-bold mb-4'>{name}</h1>
            <p className='fw-light fs-5'>
              الوصف :
              <span className='d-block lead'>
                {details}
              </span>
            </p>
            <div className='d-flex gap-5 align-items-center'>
              <p className='fw-light fs-5 my-5 d-flex align-items-center gap-1'>
                السعر :
                <span className='display-5 fw-bold text-danger'>
                  SDG {formatPrice(price)}
                </span>
              </p>
              <p className=" d-flex align-items-center m-0">
                <span className="d-block btn btn-sm btn-danger p-2 shadow" onClick={decQty}><AiOutlineMinus /></span>
                <span className="d-block fs-3 p-2">{qty}</span>
                <span className="d-block btn btn-sm btn-success p-2 shadow" onClick={incQty}><AiOutlinePlus /></span>
              </p>
            </div>
            <button type="button" className="btn-custom" onClick={() => onAdd(product, qty)}>أضف إلى السلة</button>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails




// <div className='bg-white py-5'>
// <div className="product-detail-container row">
//   <div className='col-12 col-md-6 text-center'>
//     <div className="image-container">
//       <img src={urlFor(image && image[index])} className="product-detail-image" />
//     </div>
//     <div className="small-images-container">
//       {image?.map((item, i) => (
//         <img 
//           key={i}
//           src={urlFor(item)}
//           className={i === index ? 'small-image selected-image' : 'small-image'}
//           onMouseEnter={() => setIndex(i)}
//         />
//       ))}
//     </div>
//   </div>

//   <div className="product-detail-desc col-12 col-md-6 text-white">
//     <h1>{name}</h1>
//     <div className="reviews">
//       <div>
//         <AiFillStar />
//         <AiFillStar />
//         <AiFillStar />
//         <AiFillStar />
//         <AiOutlineStar />
//       </div>
//       <p>
//         (20)
//       </p>
//     </div>
//     <h4>وصف المنتج: </h4>
//     <p>{details}</p>
//     <p className="price">${price}</p>
//     <div className="quantity">
//       <h3>Quantity:</h3>
//       <p className="quantity-desc">
//         <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
//         <span className="num">{qty}</span>
//         <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
//       </p>
//     </div>
//     <div className="buttons">
//       <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
//       <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
//     </div>
//   </div>
// </div>

// <div className="maylike-products-wrapper">
//     <h2>You may also like</h2>
//     <div className="marquee">
//       <div className="maylike-products-container track">
//         {products.map((item) => (
//           <Product key={item._id} product={item} />
//         ))}
//       </div>
//     </div>
// </div>
// </div>