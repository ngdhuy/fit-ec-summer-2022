import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Home } from './Home'; 
import { Products } from './Products';
import { About } from './About';
import { Contact } from './Contact';

export default function Pages(props) {
  return(
    <>
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='products/*' element={<Products />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}