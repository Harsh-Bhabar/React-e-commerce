import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Slider from './Components/Promotions/Slider';
import FeaturedCategories from './Components/Products/FeaturedCategories';
import ProductCard from './Components/Products/ProductCard';
import ProductList from './Components/Products/ProductList';
import Footer from './Components/Footer/Footer';
import Register from './Components/Forms/Register';

function App() {
  return (
    <>
      <Header title={"MyApp"}/>

      <Register />

      <Slider />
      <FeaturedCategories />
      <ProductList />
      <Footer footerTitle={"MyApp"}/>
    </>
  );
}

export default App;
