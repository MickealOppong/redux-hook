import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../features/cart/cartSlice';
const CartItem = ({ title, img, price, amount, id }) => {
  const dispatch = useDispatch();

  return <div className='mt-2'>
    <article className='flex justify-between '>
      <div className='flex  w-96'>
        <img src={img} alt={title} className='w-20 h-20' />
        <div className=' flex flex-col items-start ml-2 text-gray-500 gap-y-2'>
          <p className='text-xs'>{title.substring(0, 70)}</p>
          <span className='text-gray-500 text-xs'>&#36;{price}</span>
          <button className='text-sky-500 text-xs capitalize'
            onClick={() => dispatch(removeItem(id))}>remove</button>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <button onClick={() => dispatch(increase(id))}>
          <FaChevronUp className='text-sky-700 font-bold' />
        </button>
        <span className='text-gray-500'>{amount}</span>
        <button onClick={() => dispatch(decrease(id))}>
          <FaChevronDown className='text-sky-700 font-bold' />
        </button>
      </div>

    </article>

  </div>
}

export default CartItem;