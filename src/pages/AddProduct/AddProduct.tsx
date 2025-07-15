import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

interface NewProduct {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

const ProductSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Required'),
  price: Yup.number().positive('Price must be positive').required('Required'),
  description: Yup.string().min(2, 'Too Short!').required('Required'),
  categoryId: Yup.string().required('Required'),
  image: Yup.string().url().nullable().required('Required'),
});

export const AddProduct = () => {
  const [message, setMessage] = useState('');

  async function fetchAddProduct(newProduct: NewProduct) {
    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/products', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify(newProduct),
      });

      if (res.status === 201) {
        setMessage('Your product has been successfully added!');
      } else {
        throw new Error('An error occurred while adding a product.');
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      }
    }
  }

  return (
    <div>
      <h1>Add Product</h1>
      {message ? <div>{message}</div> : null}
      <Formik
        initialValues={{
          title: '',
          price: 0,
          description: '',
          categoryId: 1,
          image: '',
        }}
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          console.log(values);
          const newProduct: NewProduct = {
            title: values.title,
            price: Number(values.price),
            description: values.description,
            categoryId: Number(values.categoryId),
            images: [values.image],
          };
          fetchAddProduct(newProduct);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Title:</label>
            <Field name="title" />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <label>Price:</label>
            <Field name="price" />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <label>Description:</label>
            <Field name="description" />
            {errors.description && touched.description ? <div>{errors.description}</div> : null}
            <Field as="select" name="categoryId">
              <option value="25">Clothes</option>
              <option value="26">Electronics</option>
              <option value="27">Furniture</option>
            </Field>
            <label>Image:</label>
            <Field name="image" />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
