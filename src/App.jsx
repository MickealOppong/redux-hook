import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { calcTotals } from './features/cart/cartSlice';
import { getCartItems } from './features/cart/data';
const App = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  useEffect(() => {
    dispatch(calcTotals())
  }, [cartItems])


  if (isLoading) {
    return <main>
      <h1>Loading...</h1>
    </main>
  }
  return <main>
    {
      isOpen && <Modal />
    }
    <Navbar />
    <CartContainer />
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-rgba" style={{ display: isOpen ? 'block' : 'none' }}>
    </div>
  </main>
}
export default App;