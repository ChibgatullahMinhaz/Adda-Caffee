import React from "react";

const CustomerHome: React.FunctionComponent = () => {
    // dummy data
    const stats = [
        { title: "Total Orders", value: 12 },
        { title: "Pending Orders", value: 2 },
        { title: "Reward Points", value: 50 },
    ];

    const recentOrders = [
        { id: "#1234", item: "Cappuccino", status: "Delivered", date: "2025-08-25" },
        { id: "#1235", item: "Latte", status: "Pending", date: "2025-08-27" },
        { id: "#1236", item: "Cold Brew", status: "Processing", date: "2025-08-29" },
    ];

    return (
        <div className="p-6 space-y-6">
            {/* Welcome */}
            <h2 className="text-2xl font-bold">👋 Welcome back, Minhaz!</h2>
            <p className="text-gray-600">Here’s a quick overview of your activity.</p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="bg-white shadow rounded-2xl p-4 flex flex-col items-center"
                    >
                        <span className="text-xl font-semibold">{stat.value}</span>
                        <span className="text-gray-500">{stat.title}</span>
                    </div>
                ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white shadow rounded-2xl p-4">
                <h3 className="text-lg font-semibold mb-3">🛒 Recent Orders</h3>
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-600">
                            <th className="py-2">Order ID</th>
                            <th className="py-2">Item</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrders.map((order) => (
                            <tr key={order.id} className="border-t">
                                <td className="py-2">{order.id}</td>
                                <td className="py-2">{order.item}</td>
                                <td
                                    className={`py-2 font-medium ${order.status === "Delivered"
                                            ? "text-green-600"
                                            : order.status === "Pending"
                                                ? "text-yellow-600"
                                                : "text-blue-600"
                                        }`}
                                >
                                    {order.status}
                                </td>
                                <td className="py-2">{order.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Become a Rider Banner */}
            <div className="bg-gradient-to-r from-[#E3B577] to-[#d4a64d] text-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="text-2xl font-bold">🚴 Become a Rider</h3>
                <p className="mt-2 text-sm">
                    Join our team and start earning by delivering with us.
                    Flexible hours · Good pay · Be your own boss!
                </p>
                <button className="mt-4 bg-white text-[#E3B577] cursor-pointer font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
                    Apply Now
                </button>
            </div>

        </div>
    );
};

export default CustomerHome;
