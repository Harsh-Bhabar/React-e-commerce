import "./App.css";
import Header from "./Components/Header/Header";
import Slider from "./Components/Promotions/Slider";
import FeaturedCategories from "./Components/Products/FeaturedCategories";
import ProductList from "./Components/Products/ProductList";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import Register from "./Components/Forms/Register";
import Login from "./Components/Forms/Login";

function App() {
  const [parentModal, setParentModal] = useState("none");
  const [users, setUsers] = useState([]);

  const modalToOpen = (dataFromModalClick) => {

    setUsers([
      {
        id: 1,
        email: "harsh",
        userName: "harsh",
        password: "harsh",
      },
      {
        id: 2,
        email: "harsh2",
        userName: "harsh2",
        password: "harsh2",
      },
    ]);

    setParentModal(dataFromModalClick);
  };

  const closeModal = () => {
    console.log("none");
    setParentModal("none");
  };

  const registerUser = (email, userName, password) => {

    const newId = users[users.length - 1] ? users[users.length - 1].id + 1 : 1;

    const newUser = {
      id: newId,
      email: email,
      userName: userName,
      password: password,
    };

    setUsers([...users, newUser]);
    setTimeout(() => {
      console.log(users);
    }, 1000);
  };

  const loginUser = (newUser) => {
    const userFound = users.find(
      (user) =>
        user.email === newUser.userEmail && user.password === newUser.userPass
    );
    return userFound ? true : false;
  };

  return (
    <>
      {parentModal === "register" && (
        <Register closeModal={closeModal} registerUser={registerUser} />
      )}
      {parentModal === "login" && (
        <Login closeModal={closeModal} loginUser={loginUser} />
      )}
      <Header title={"MyApp"} modalToOpen={modalToOpen} />
      <Slider />
      <FeaturedCategories />
      <ProductList />
      <Footer footerTitle={"MyApp"} />
    </>
  );
}

export default App;
