import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cartItems, amount } = useSelector((store) => store.cart)
  const dispatch = useDispatch();
  if (cartItems < 1) {
    return <section className="max-w-md mx-auto flex flex-col items-center mt-16 ">
      <header>
        <h2 className="mb-12 text-3xl capitalize">your bag</h2>
        <h4 className="-ml-4 text-xl capitalize">is currently empty</h4>
      </header>
    </section >
  }
  return <section className="max-w-md mx-auto flex flex-col items-center mt-16 ">
    <header className="mb-12 text-3xl capitalize">
      <h2>your bag</h2>
    </header>
    <article className="flex flex-col gap-4 w-full">
      {
        cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })
      }
    </article>
    <div className="flex justify-between w-full mt-8 border-t-2 py-2">
      <p className="text-gray-900 capitalize text-xl tracking-wide">total</p>
      <span >&#36;{amount.toFixed(2)}</span>
    </div>
    <footer className='flex justify-center mt-4'><button className='bg-transparent w-36 h-8 rounded-md border-2 border-sky-500 font-semibold uppercase tracking-wider hover:bg-sky-700 hover:text-white duration-300' onClick={() => {
      dispatch(openModal())
    }}>clear cart</button>
    </footer>


  </section>
}
export default CartContainer;