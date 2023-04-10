import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <section className="py-5 bg-dark">
      <div className='container-fluid'>
      <h2 className='mt-4 display-3 fw-bold section-title-alt'>لم تجد ما تبحث عنه ؟
        <span>تواصل معنا لتوفيره</span>
      </h2>
      <div className='row contact align-items-center bg-light rounded mx-auto shadow'>
        <div className='col-12 col-md-6 p-4 text-center'>
          <form>
            <div className="form-item">
              <input type="text" name="sender" required />
              <label>ما اسمك:</label>
            </div>
            <div className="form-item">
              <input type="text" name="email" required />
              <label>بريدك الالكتروني:</label>
            </div>
            <div className="form-item">
              <textarea className="" name="message" required />
              <label>ما الذي تبجث عنه:</label>
            </div>
            <button className="submit-btn">إرسال</button>  
          </form>
        </div>
        <div className='col-12 col-md-6 contact-info'>
          <h2>للتواصل المباشر</h2>
          <div className='links'>
            <div className='link'>
            <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
            </div>
            <div className='link'>
            <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
            </div>
            <div className='link'>
            <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
            </div>
            <div className='link'>
            <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
            </div>
          </div>
        </div>

      </div>
      </div>
    </section>
  )
}

export default FooterBanner