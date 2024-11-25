import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import {UserProvider} from "./context/User/UserContext";
import {Login} from "./Pages/Profile/Login";
import {Reviews} from "./Pages/Reviews/Reviews";
import AddProducts from "./Pages/ManageProducts/AddProducts/AddProducts";
import EditProducts from "./Pages/ManageProducts/EditProducts/EditProducts";
import {Profile} from "./Pages/Profile/Profile";
import {Register} from "./Pages/Profile/Register";

function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Register />}/>
            <Route path='profile' element={<Profile />}/>
            <Route path='products' element={<Products />}/>
            <Route path='about' element={<About />}/>
            <Route path='reviews' element={<Reviews />}/>
            <Route path='product/new' element={<AddProducts />}/>
            <Route path='products/:id/edit' element={<EditProducts />}/>
        </Route>
    ));

  return (
      <UserProvider>
          <div className='app'>
              <RouterProvider router={router}/>
          </div>
      </UserProvider>

  );
}

export default App;
