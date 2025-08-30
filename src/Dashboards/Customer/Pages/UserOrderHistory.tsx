import React from "react";

// Dummy order data
const orders = [
  {
    id: "ORD-20250821",
    date: "Aug 21, 2025",
    status: "Delivered",
    deliveredAt: "Aug 28, 2025",
    customer: {
      address: "Banani, Dhaka, Bangladesh",
      phone: "+88017XXXXXXXX",
    },
    items: [
      { name: "Nike Air Max 270", qty: 1, price: 120, image: "/default-product.png" },
      { name: "AirPods Pro", qty: 2, price: 200, image: "/default-product.png" },
    ],
    total: 520,
  },
  {
    id: "ORD-20250810",
    date: "Aug 10, 2025",
    status: "Delivered",
    deliveredAt: "Aug 18, 2025",
    customer: {
      address: "Uttara, Dhaka, Bangladesh",
      phone: "+88017XXXXXXXX",
    },
    items: [
      { name: "MacBook Pro", qty: 1, price: 1500, image: "/default-product.png" },
      { name: "Logitech Mouse", qty: 1, price: 50, image: "/default-product.png" },
    ],
    total: 1550,
  },
];

const UserOrderHistory: React.FunctionComponent = () => {
  return (
    <div className="max-w-4xl mx-auto my-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Order History</h1>
      <div className="space-y-6 max-h-[600px] overflow-y-auto px-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-6 border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-3">
              <h2 className="font-bold">Order #{order.id}</h2>
              <span
                className={`font-medium ${
                  order.status === "Delivered" ? "text-green-600" : "text-red-600"
                }`}
              >
                {order.status}
              </span>
            </div>

            {/* Items */}
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Qty {item.qty} × ${item.price}
                    </p>
                  </div>
                  <p className="ml-auto font-semibold">${item.qty * item.price}</p>
                </div>
              ))}
            </div>

            {/* Delivery + Actions */}
            <div className="mt-3 text-sm text-gray-600">
              <p>
                <strong>Delivered on:</strong> {order.deliveredAt}
              </p>
              <p>
                <strong>Ship to:</strong> {order.customer.address}
              </p>
              <p>
                <strong>Phone:</strong> {order.customer.phone}
              </p>
              <p>
                <strong>Total Paid:</strong> ${order.total}
              </p>
            </div>

            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
                Download Invoice
              </button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                Reorder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOrderHistory;
