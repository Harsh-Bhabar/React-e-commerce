import "./App.css";
import Header from "./Components/Header/Header";
import Slider from "./Components/Promotions/Slider";
import FeaturedCategories from "./Components/Products/FeaturedCategories";
import ProductList from "./Components/Products/ProductList";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import Register from "./Components/Forms/Register";
import Login from "./Components/Forms/Login";
import { Provider } from 'react-redux';
import store from './store'

function App() {
  const [parentModal, setParentModal] = useState("none");
  const [users, setUsers] = useState([]);

  const modalToOpen = (dataFromModalClick) => {
    setParentModal(dataFromModalClick);
  };

  const closeModal = () => {
    console.log("none");
    setParentModal("none");
  };

  const loginUser = (newUser) => {
    const userFound = users.find(
      (user) =>
        user.email === newUser.userEmail && user.password === newUser.userPass
    );
    return userFound ? true : false;
  };

  return (
    <Provider store={store}>
      {parentModal === "register" && (
        <Register closeModal={closeModal} />
      )}
      {parentModal === "login" && (
        <Login closeModal={closeModal} />
      )}
      <Header title={"MyApp"} modalToOpen={modalToOpen} />
      <Slider />
      <FeaturedCategories />
      <ProductList />
      <Footer footerTitle={"MyApp"} />
    </Provider>
  );
}

export default App;
