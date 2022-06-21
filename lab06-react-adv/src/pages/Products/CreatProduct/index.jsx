import { Link } from "react-router-dom";

export function CreateProduct() {
  return(
    <form action='#'>
      <h1>Create new product information</h1>
      <fieldset>
        <legend>Product information</legend>
        <div>
          <label>Product name:</label>
          <input type='text' placeholder='Enter product name' />
        </div>
        <div>
          <label>Product price:</label>
          <input type='number' placeholder='Enter product price' />
        </div>
        <div>
          <label>Description (option)</label>
          <textarea placeholder='Enter description for product'></textarea>
        </div>
        <div>
          <button type='button'>Submit</button>
          <Link to='/products'>Cancel</Link>
        </div>
      </fieldset>
    </form>
  );
}