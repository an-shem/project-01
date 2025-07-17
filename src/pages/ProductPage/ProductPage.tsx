import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Product } from '../../types';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  async function fetchProduct(id: string | undefined) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const obj = await res.json();
    setProduct(obj);
  }

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  return (
    <div className="flex flex-col items-center gap-2.5 w-[30%] my-20 mx-auto p-5 border border-solid border-pink-700 rounded-2xl font-semibold text-cyan-700   bg-fuchsia-200 ">
      <h3 className="flex-1">{product?.title}</h3>
      <img src={product?.images[0]} alt="product" className="w-full" />
      <p className="font-[Monoton]">{product?.price}$</p>
      <Link
        to={`/products`}
        className="py-1.5 px-4 border border-solid border-pink-700 rounded-2xl hover:bg-pink-600 hover:text-pink-100"
      >
        {'<- Go back'}
      </Link>
    </div>
  );
}
