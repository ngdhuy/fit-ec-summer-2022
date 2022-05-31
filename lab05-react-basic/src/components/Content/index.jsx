import React from 'react';
import Products from '../Products';
import './style.css';

function Content(props) {
  return (
    <div className='content'>
      <h1>Content of pages</h1>
      <hr />
      <Products />
    </div>
  );
}

export default Content;