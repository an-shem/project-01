import { ProductsList } from '../../components/ProductsList/ProductsList';

const ProductsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-full p-5 bg-purple-200">
      <h2 className="text-3xl underline text-pink-700 font-[Monoton]">Products list</h2>
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
