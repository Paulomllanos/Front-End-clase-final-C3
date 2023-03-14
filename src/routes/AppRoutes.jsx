import { Routes, Route, Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useContext } from 'react';

import LayoutMain from '../components/layout/Layaout.main';
import Auth from '../pages/auth/Auth';
import Cart from '../pages/cart/Cart';
import Home from '../pages/home/Home';
import Products from '../pages/products/Products';




const AppRoutes = () => {
  
  const stateContext = useContext(UserContext);

  const token = stateContext.userState.token;

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutMain />}>
          <Route path='/' element={<Home token={token}/>} />
          <Route path='/products' element={<Products />} />
          {!token && <Route path='/auth' element={<Auth />} />}
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Navigate to='/'/>} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes;