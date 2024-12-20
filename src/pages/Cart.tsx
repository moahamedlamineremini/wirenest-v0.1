import { Link } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  // Mock data - à remplacer par vos données réelles
  const cartItems: CartItem[] = [
    {
      id: '1',
      name: 'Gradient Graphic T-shirt',
      size: 'Large',
      color: 'White',
      price: 100,
      quantity: 1,
      image: '/img/gradient-tshirt.jpg'
    },
    {
      id: '2',
      name: 'Checkered Shirt',
      size: 'Medium',
      color: 'Red',
      price: 100,
      quantity: 1,
      image: '/img/checkered-shirt.jpg'
    },
    {
      id: '3',
      name: 'Skinny Fit Jeans',
      size: 'Large',
      color: 'Blue',
      price: 100,
      quantity: 1,
      image: '/img/skinny-jeans.jpg'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // 20% de réduction
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const handleQuantityChange = (id: string, change: number) => {
    // Implémenter la logique de modification de la quantité
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-sm">
        <Link to="/" className="text-gray-500 hover:text-black">Home</Link>
        <span className="text-gray-500">/</span>
        <span className="font-medium">Cart</span>
      </div>

      <h1 className="text-2xl font-medium mb-8">Your cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Premier produit */}
          <div className="border-b pb-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-gray-50 rounded-lg p-4 w-32 h-32">
                <img src="/img/panier1.png" alt="Gradient Graphic T-shirt" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium">Gradient Graphic T-shirt</h3>
                <div className="mt-1">
                  <p>Size: <span className="text-gray-600">Large</span></p>
                  <p>Color: <span className="text-gray-600">White</span></p>
                </div>
              </div>
              <div className="text-lg font-medium">
                100€
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <div className="flex items-center bg-gray-100 rounded-full">
                <button className="px-4 py-2">−</button>
                <span className="px-4 py-2">1</span>
                <button className="px-4 py-2">+</button>
              </div>
            </div>
          </div>

          {/* Deuxième produit */}
          <div className="border-b pb-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-gray-50 rounded-lg p-4 w-32 h-32">
                <img src="/img/panier2.png" alt="Checkered Shirt" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium">Checkered Shirt</h3>
                <div className="mt-1">
                  <p>Size: <span className="text-gray-600">Medium</span></p>
                  <p>Color: <span className="text-gray-600">Red</span></p>
                </div>
              </div>
              <div className="text-lg font-medium">
                100€
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <div className="flex items-center bg-gray-100 rounded-full">
                <button className="px-4 py-2">−</button>
                <span className="px-4 py-2">1</span>
                <button className="px-4 py-2">+</button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg h-fit">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount (-20%)</span>
                <span>-${discount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${deliveryFee}</span>
              </div>
              <div className="flex justify-between font-medium pt-3 border-t">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            {/* Code promo */}
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Apply
              </button>
            </div>

            {/* Bouton Checkout */}
            <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2">
              Go to Checkout
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;