import { useDispatch } from "react-redux";
import { clearItems } from "../features/cart/cartSlice";
import { closeModal } from '../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return <aside className="absolute w-80 top-80 left-16 md:left-24 flex flex-col justify-center md:w-96 h-36 px-4 bg-white rounded-md shadow-md lg:left-1/4 z-50">
    <div className="flex items-center">
      <h2>Do you want to remove all items from shopping cart?</h2>
    </div>
    <div className="flex justify-evenly mt-4">
      <button className="border-2 border-sky-700 w-24 capitalize text-sky-700 tracking-wider h-8" onClick={() => {
        dispatch(clearItems())
        dispatch(closeModal())
      }}>confirm</button>
      <button className="border-2 border-red-700 w-24 capitalize text-red-700 tracking-wider h-8" onClick={() => {
        dispatch(closeModal())
      }}>cancel</button>
    </div>
  </aside>
}
export default Modal;