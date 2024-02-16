import React from 'react'
import ProductCard from './ProductCard';

const ProductsList = () => {
  const productData = [
    {
      title: "Product 1",
      price: "100",
      img: "https://dkstatics-public.digikala.com/digikala-products/e89295ab7e1e907808099079ac4ee49a67c771c0_1704658742.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      title: "Product 2",
      price: "200",
      img: "https://dkstatics-public.digikala.com/digikala-products/10b3ddf4ed5afd60ba74e4d5e2c1866d79716c7f_1675155251.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      title: "Product 3",
      price: "300",
      img: "https://dkstatics-public.digikala.com/digikala-products/d4831d5e9394e4d9a0a8869b16309bb688a05388_1683354523.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      title: "Product 4",
      price: "400",
      img: "https://dkstatics-public.digikala.com/digikala-products/793ea0b7b2bd40b9270043ff3e488b3594832f7f_1705499290.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
  ];
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      {productData.map((item) => (
        <ProductCard
          title={item.title}
          price={item.price}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default ProductsList