


import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import './App.css';
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

//Innanzittuto eseguiamo il root dei componenti tramite il tuo url, per farlo abbiamo bisogno della libreria react router dom scrivendo in terminale: yarn add react-router-dom eimportiamo gli elmenti necessari
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//       <Home />
//       <Routes>
//         <Route path='/' />
//         <Route path='/products' />
//         <Route path='/reviews' />
//         <Route path='/About' element={<Footer />} />
//       </Routes>
//     </Router>
//   );
// };

//Usiamo router-dom per indirizzare ai vari componenti

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/products/:category" element={<ProductList />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/success" element={<Success />} />

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> */}
      </Routes>
    </Router>
  );
};

export default App;