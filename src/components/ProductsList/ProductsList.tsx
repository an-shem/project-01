// rfc rafc

import { useEffect, useState } from 'react';
import type { Product } from '../../types';
import { Link } from 'react-router-dom';

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    const productsRes = await res.json();
    setProducts(productsRes);
  }

  return (
    <div>
      <ul className="grid grid-cols-5 gap-5">
        {products.map((p) => (
          <li
            key={'product ' + p.id}
            className="flex flex-col items-center gap-2.5 p-5 border border-solid border-pink-700 rounded-2xl font-semibold text-cyan-700 hover:shadow-2xl hover:scale-98 bg-fuchsia-200 hover:bg-fuchsia-200/80"
          >
            <h3 className=" flex-1">{p.title}</h3>
            <img src={p.images[0]} alt="product" className="w-full" />
            <p className="font-[Monoton]">{p.price}$</p>
            <Link
              to={`/products/${p.id}`}
              className="py-1.5 px-4 border border-solid border-pink-700 rounded-2xl hover:bg-pink-600 hover:text-pink-100"
            >
              To product
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
