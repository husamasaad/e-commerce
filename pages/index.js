import React from 'react';

import { client } from '@/lib/client';
import { Product, FooterBanner, HeroBanner } from '@/components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = ({ products, bannerData }) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const categories = [...new Set(products.map(product => product.cat))];

  return (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData}  />

    <section className='bg-white py-5 container-fluid'>

      {
        categories.reverse().map(cat => {
          return (
            <article key={cat}>
            <div className=''>
              <div className=" mx-auto text-white text-center py-5 my-5">
                <h2 className='display-3 fw-bold section-title'>{cat}</h2>
              </div>
              <div className="row">
                <Carousel className='py-4' responsive={responsive} infinite={true} ssr={true}>
                  {products?.map((product) => {
                    if (product.cat === cat) {
                      return <Product key={product._id} product={product} />
                    }
                    })}
                </Carousel>
              </div>
            </div>
            </article>
          )
        })
      }
    </section>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;