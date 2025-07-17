import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import type { Category } from '../../types';

interface ProductCreateDto {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

const AddProductSchema = Yup.object().shape({
  title: Yup.string().required('Required').min(3, 'Too Short!').max(50, 'Too Long!'),
  price: Yup.number().positive('Must be positiv').required('Required'),
  description: Yup.string().min(3, 'Too Short!').required('Required'),
  category: Yup.number().positive('Must be positiv').required('Required'),
  image: Yup.string().min(3, 'Too Short!').required('Required'),
});

const CreateProduct = () => {
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);

  async function fetchCategories() {
    const res = await fetch('https://api.escuelajs.co/api/v1/categories');
    const arr = await res.json();
    setCategories(arr);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchAddProduct(newProduct: ProductCreateDto) {
    const res = await fetch('https://api.escuelajs.co/api/v1/products', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(newProduct),
    });

    if (res.status === 201) {
      setMessage('Successfully added product!');
    }
  }

  return (
    <div className="flex flex-col items-center gap-10 min-h-full p-5 bg-purple-200">
      <h1 className="text-3xl underline text-pink-700 font-[Monoton]">Add product</h1>
      {message ? <div>{message}</div> : null}
      <Formik
        initialValues={{
          title: '',
          price: null,
          description: '',
          category: '1',
          image: '',
        }}
        validationSchema={AddProductSchema}
        onSubmit={(values) => {
          const { title, price, description, category, image } = values;
          const newProduct: ProductCreateDto = {
            title,
            price: Number(price),
            description,
            categoryId: Number(category),
            images: [image],
          };
          fetchAddProduct(newProduct);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-1.5 max-w-110 p-10 border border-solid border-pink-700 rounded-3xl text-cyan-800  text-xl bg-pink-200">
            <label className="mt-5">Title:</label>
            <Field name="title" class={'w-80 px-5 py-1 border border-sollid border-pink-700 rounded-2xl'} />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <label className="mt-5">Price:</label>
            <Field
              name="price"
              placeholder="0"
              class={'w-80 px-5 py-1 border border-sollid border-pink-700 rounded-2xl'}
            />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <label className="mt-5">Description:</label>
            <Field name="description" class={'w-80 px-5 py-1 border border-sollid border-pink-700 rounded-2xl'} />
            {errors.description && touched.description ? <div>{errors.description}</div> : null}
            <label className="mt-5">Category:</label>
            <Field
              as="select"
              name="category"
              class={'w-80 px-5 py-1 border border-sollid border-pink-700 rounded-2xl'}
            >
              {/* <option value="1">Electronics</option>
              <option value="2">Clothes</option> */}
              {categories.map((c) => (
                <option value={c.id}>{c.name}</option>
              ))}
            </Field>
            {errors.category && touched.category ? <div>{errors.category}</div> : null}
            <label className="mt-5">Image:</label>
            <Field name="image" class={'w-80 px-5 py-1 border border-sollid border-pink-700 rounded-2xl'} />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}
            <button
              type="submit"
              className="w-fit px-6 py-1 mx-auto mt-5 border border-sollid border-pink-700 rounded-2xl"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProduct;
