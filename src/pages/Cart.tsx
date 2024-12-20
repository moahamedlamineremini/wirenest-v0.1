import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8 text-sm">
        <Link to="/" className="text-gray-500 hover:text-black">Home</Link>
        <span className="text-gray-500">/</span>
        <span>Cart</span>
      </div>

      <h1 className="text-2xl mb-8">Your cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-6">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <div className="text-sm text-gray-500 mt-1">
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border rounded">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 min-w-[40px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-medium">{item.price}€</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Order Summary</h2>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>€{subtotal}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              <span>-€{discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>€{deliveryFee}</span>
            </div>
            <div className="flex justify-between font-medium pt-3 border-t">
              <span>Total</span>
              <span>€{total}</span>
            </div>
          </div>

          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 px-4 py-2 bg-gray-50 rounded"
            />
            <button className="px-4 py-2 bg-black text-white rounded">
              Apply
            </button>
          </div>

          <button className="w-full py-3 bg-black text-white rounded flex items-center justify-center gap-2">
            Go to Checkout
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;