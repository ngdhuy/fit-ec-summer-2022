import { Link, Routes, Route } from 'react-router-dom';

import { CreateProduct } from './CreatProduct';
import { ListOfProduct } from './ListOfProduct';
import { ProductDetail } from './ProductDetail';

export function Products() {
  return(
    <>
      <h1>This is list of Product</h1>
      <Link to='new'>Create product</Link>
      <Routes>
        <Route index element={<ListOfProduct />} />
        <Route path=':id' element={<ProductDetail />} />
        <Route path='new' element={<CreateProduct />} />
      </Routes>
    </>
  );
}