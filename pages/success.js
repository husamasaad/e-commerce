import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/stateContext'
import { BsBagCheckFill } from 'react-icons/bs'
import { runFireworks } from '@/lib/utils'

const Success = () => {

  const { setcartItems, setTotalPrice, setTotalQuantities } = useStateContext()


  useEffect(() => {
    localStorage.clear();
    setcartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [])

  const [order, setOrder] = useState(null)
  return (
    <div className='success-wrapper container d-flex align-items-center justify-content-center'>
      <div className='success p-5'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>تم تسجيل طلبك بنجاح</h2>
        <p className='email-msg mt-3'>...ولكن للأسف هذا الموقع ليس متجرًا حقيقيًا</p>
        <p className='description'>
          إذا أعجبك الموقع وترغب في استخدامه لمنتجاتك لا تتردد في التواصل معي: <br />
          <a className='email' href='mailto:order@example.com'>
            husamibnasaad@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type='button' width="300px" className='btn-custom' >
            استمر في التسوّق
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success