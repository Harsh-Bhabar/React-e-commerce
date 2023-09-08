import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Slider from './Components/Promotions/Slider';
import FeaturedCategories from './Components/Products/FeaturedCategories';

function App() {
  return (
    <>
      <Header title={"MyApp"}/>
      <Slider />
      <FeaturedCategories />
    </>
  );
}

export default App;
