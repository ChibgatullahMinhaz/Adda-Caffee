import React, { useState } from "react";

const TrackSelfOrder: React.FunctionComponent = () => {
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  const orders = [
    {
      id: "ORD-2025082401",
      product: { name: "Nike Air Max 270", image: "https://via.placeholder.com/60" },
      price: 120,
      qty: 1,
      status: "Shipped",
      date: "Aug 25, 2025",
      estDelivery: "Sep 5, 2025",
      trackingNumber: "TRK123456789",
      courier: "DHL Express",
      customer: {
        name: "Chibgatullah Minhaz",
        address: "Banani, Dhaka, Bangladesh",
        phone: "+8801712-345678",
      },
    },
    {
      id: "ORD-2025082402",
      product: { name: "Apple AirPods Pro", image: "https://via.placeholder.com/60" },
      price: 200,
      qty: 2,
      status: "Processing",
      date: "Aug 28, 2025",
      estDelivery: "Sep 7, 2025",
      trackingNumber: "TRK987654321",
      courier: "FedEx",
      customer: {
        name: "Chibgatullah Minhaz",
        address: "Banani, Dhaka, Bangladesh",
        phone: "+8801712-345678",
      },
    },
  ];

  const steps = ["Placed", "Processing", "Shipped", "Out for Delivery", "Delivered"];

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold">
              <th className="p-3">Order ID</th>
              <th className="p-3">Product</th>
              <th className="p-3">Total</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{order.id}</td>
                <td className="p-3 flex items-center gap-2">
                  <img src={order.product.image} alt={order.product.name} className="h-10 w-10 rounded" />
                  {order.product.name}
                </td>
                <td className="p-3">${order.price * order.qty}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Track
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tracking Details */}
      {selectedOrder && (
        <div className="mt-10 p-6 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Tracking Order: {selectedOrder.id}</h2>

          {/* Product Summary */}
          <div className="flex items-center gap-4 border-b pb-4 mb-4">
            <img
              src={selectedOrder.product.image}
              alt={selectedOrder.product.name}
              className="h-16 w-16 rounded-lg border"
            />
            <div>
              <h3 className="font-medium">{selectedOrder.product.name}</h3>
              <p className="text-sm text-gray-600">
                Qty: {selectedOrder.qty} × ${selectedOrder.price}
              </p>
              <p className="font-semibold text-gray-800">
                Total: ${selectedOrder.price * selectedOrder.qty}
              </p>
              <p className="text-sm text-gray-500">Est. Delivery: {selectedOrder.estDelivery}</p>
            </div>
          </div>

          {/* Order Progress Timeline */}
          <div className="relative mb-6">
            <div className="absolute top-5 left-5 right-5 h-1 bg-gray-300"></div>
            <div className="flex justify-between relative">
              {steps.map((step, index) => {
                const isActive = steps.indexOf(selectedOrder.status) >= index;
                return (
                  <div key={step} className="flex flex-col items-center w-1/5">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2
                      ${isActive ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"}`}
                    >
                      {index + 1}
                    </div>
                    <p className={`text-sm ${isActive ? "text-green-600 font-medium" : "text-gray-500"}`}>
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Delivery Address */}
          <div className="p-4 border rounded-lg mb-4 bg-white">
            <p className="font-semibold text-gray-700 mb-1">Delivery Address</p>
            <p>{selectedOrder.customer.name}</p>
            <p>{selectedOrder.customer.address}</p>
            <p>{selectedOrder.customer.phone}</p>
          </div>

          {/* Support */}
          <button
            onClick={() => setSelectedOrder(null)}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition"
          >
            Close Tracking
          </button>
        </div>
      )}
    </div>
  );
};

export default TrackSelfOrder;
