import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './Layouts/MainLayout';
import Products from './Pages/Products';
import FormProduct from './Pages/FormProduct';
import Home from './Pages/Home';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/add' element={<FormProduct props='add'/>}/>
      <Route path='/products/edit/:id' element={<FormProduct props='edit'/>}/>
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
