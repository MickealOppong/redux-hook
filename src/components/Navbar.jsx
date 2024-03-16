import { FaShoppingBag } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const { total } = useSelector((store) => store.cart)

  return <nav className='mx-auto bg-sky-700 h-16'>
    <div className="flex items-center justify-around mx-auto py-4 md:justify-evenly">
      <h3 className='text-2xl capitalize text-white'>redux</h3>
      <div className='flex relative'>
        <FaShoppingBag className='text-white  text-3xl' />
        <div className='flex justify-center absolute -top-2 left-4  bg-sky-900 rounded-full w-6 h-6'>
          <p className='text-md text-white'>{total}</p>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar;