import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto px-4 py-8">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {cart.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center justify-end hover:scale-110 cursor-pointer duration-300 ease-in">
                <img
                  src={item.image}
                  alt={item.name}
                  className=" w-48 h-48 object-cover border border-blue-800 rounded mb-2 "
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-red-700 mb-1">{item.title.split(" ").slice(0,5).join(" ") + "..."}</h3>
                  <p className="text-blue-900 ">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-sky-200 p-4 rounded">
              <div className="font-bold text-lg mb-4">Your Cart</div>
              <div className="text-black mb-4">
                <p>Total Items: {cart.length}</p>
              </div>
              <div className="text-black mb-4">
                <p>Total Amount: ${totalAmount.toFixed(2)}</p>
              </div>
              <button className=" text-white px-4 py-2 rounded hover:scale-110 bg-red-700 cursor-pointer duration-300 ease-in">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;





