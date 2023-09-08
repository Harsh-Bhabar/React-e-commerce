import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Slider from './Components/Promotions/Slider';
import FeaturedCategories from './Components/Products/FeaturedCategories';
import ProductCard from './Components/Products/ProductCard';
import ProductList from './Components/Products/ProductList';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import Register from './Components/Forms/Register';
import Login from './Components/Forms/Login';

function App() {

  const [parentModal, setParentModal] = useState("none")

  const modalToOpen = (dataFromModalClick) => {
    setParentModal(dataFromModalClick);
  }
  
  const closeModal = () => {
    console.log("none");
    setParentModal("none")
  }

  return (
    <>
      {
        parentModal === "register" && <Register closeModal={closeModal} />
      }
      {
        parentModal === "login" && <Login closeModal={closeModal} />
      }
      <Header title={"MyApp"} modalToOpen={modalToOpen} />
      <Slider />
      <FeaturedCategories />
      <ProductList />
      <Footer footerTitle={"MyApp"}/>
    </>
  );
}

export default App;
