import ProductItem from '../ProductItem';
import './style.css';

export default function Products(props) {
  const products = [
    {
      id: 1, 
      name: 'iPhone',
      price: 2000
    },
    {
      id: 2, 
      name: 'iPad',
      price: 2500
    },
    {
      id: 3, 
      name: 'macBook',
      price: 3000
    },
    {
      id: 4, 
      name: 'Mac Studio',
      price: 5000
    },
  ];

  return (
    <div>
      <h3>List of Product</h3>
      {
        products.map((item, index) => 
          <ProductItem key={index} obj={item} />
        )
      }
    </div>
  );
}