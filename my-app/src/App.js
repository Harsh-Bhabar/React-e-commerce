import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Slider from './Components/Promotions/Slider';
import FeaturedCategories from './Components/Products/FeaturedCategories';
import ProductCard from './Components/Products/ProductCard';
import ProductList from './Components/Products/ProductList';

function App() {
  return (
    <>
      <Header title={"MyApp"}/>
      <Slider />
      <FeaturedCategories />
      <ProductList />
    </>
  );
}

export default App;
