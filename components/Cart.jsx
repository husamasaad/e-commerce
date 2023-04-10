import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlineLeft, AiOutlineShopping, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';


import { useStateContext } from '@/context/stateContext';
import { urlFor } from '@/lib/client';

const Cart = () => {

  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove, formatPrice } = useStateContext();

  return (
    <div className='cart-wrapper'>
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>قائمة المشتريات :</span>
          <span className='cart-num-items'>{totalQuantities} items</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart text-dark'>
            <AiOutlineShopping  size={150} />
            <h3>قائمة مشترياتك فارغة</h3>
            <Link href="#">
              <button 
                type='button' 
                onClick={() => setShowCart(false)}
                className='btn-custom p-3 fw-bold'
              >
                استمر في التسوق
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className='product row' key={item._id}>
              <img src={urlFor(item?.image[0])} className='cart-product-image p-2 col-3' alt="" />
              <div className='text-dark col-7 d-flex flex-column justify-content-around'>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className='fs-4 m-0'>{item.name}</h5>
                  <h4 className='fw-bold text-danger'>SDG {formatPrice(item.price)}</h4>
                </div>
                  <div className='d-flex justify-content-between'>
                    <p className=" d-flex align-items-center m-0">
                      <span className='d-block btn btn-sm btn-danger p-2 shadow' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus/></span>
                      <span className='d-block fs-3 p-2'>{item.quantity}</span>
                      <span className='d-block btn btn-sm btn-success p-2 shadow' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus/></span>
                    </p>
                    <button type='button' className='remove-item' onClick={() => onRemove(item)}>
                      <TiDeleteOutline/>
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="cart-heading d-flex justify-content-end ps-5 pe-4 mt-2 text-dark w-100">
              <p className='heading'>المجموع الكلي : </p>
              <p className='cart-num-items'>SDG {formatPrice(totalPrice)}</p>
            </div>
            <div className="mx-auto w-100 text-center">
              <Link href="/success">            
              <button type='button' className='btn-custom my-0' onClick={() => setShowCart(false)}>
                Checkout
              </button>
              </Link>
            </div>
          </div>
        )}  
      </div>
    </div>
  )
}

export default Cart