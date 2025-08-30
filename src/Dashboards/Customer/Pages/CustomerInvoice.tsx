import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Dummy data
const orderHistory = [
  {
    id: "ORD-20250821",
    date: "Aug 21, 2025",
    status: "Delivered",
    items: [
      { name: "Nike Air Max 270", qty: 1, price: 120 },
      { name: "AirPods Pro", qty: 2, price: 200 },
    ],
    total: 520,
  },
  {
    id: "ORD-20250810",
    date: "Aug 10, 2025",
    status: "Delivered",
    items: [
      { name: "MacBook Pro", qty: 1, price: 1500 },
      { name: "Logitech Mouse", qty: 1, price: 50 },
    ],
    total: 1550,
  },
];

const CustomerInvoice: React.FC = () => {
  const generatePDF = (order: typeof orderHistory[0]) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Invoice", 14, 20);
    doc.setFontSize(12);
    doc.text(`Order ID: ${order.id}`, 14, 30);
    doc.text(`Date: ${order.date}`, 14, 37);
    doc.text(`Status: ${order.status}`, 14, 44);

    const tableColumn = ["Item", "Quantity", "Price", "Subtotal"];
    const tableRows: (string | number)[][] = [];

    order.items.forEach((item) => {
      const row = [item.name, item.qty, `$${item.price}`, `$${item.qty * item.price}`];
      tableRows.push(row);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 55,
    });

    doc.text(`Total: $${order.total}`, 14, doc.lastAutoTable.finalY + 10);

    doc.save(`Invoice-${order.id}.pdf`);
  };

  return (
    <div className="max-w-5xl mx-auto my-8 px-2">
      <h1 className="text-2xl font-bold text-center mb-6">Order Invoices</h1>
      <div className="space-y-6 max-h-[600px] overflow-y-auto">
        {orderHistory.map((order) => (
          <div
            key={order.id}
            className="flex justify-between items-center p-6 border rounded-lg bg-white shadow-md"
          >
            <div>
              <h2 className="font-bold text-lg">Order #{order.id}</h2>
              <p className="text-gray-600">Date: {order.date}</p>
              <p className="text-gray-600">Status: {order.status}</p>
              <p className="font-semibold mt-1">Total: ${order.total}</p>
            </div>
            <button
              onClick={() => generatePDF(order)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Export PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerInvoice;
