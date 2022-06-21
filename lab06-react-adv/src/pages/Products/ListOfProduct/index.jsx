export function ListOfProduct() {
  const listProduct = [
    {
      id: 1, 
      name: 'iPhone', 
      price: 1000
    },
    {
      id: 2, 
      name: 'iPad Pro', 
      price: 1500
    },
    {
      id: 3, 
      name: 'macBook Pro', 
      price: 3000
    }
  ];
  return(
    <>
      <div>List of product</div>
      <ol>
        <li>Product item 1</li>
        <li>Product item 2</li>
        <li>Product item 3</li>
        <li>Product item 4</li>
        <li>Product item 5</li>
      </ol>
    </>
  );
}