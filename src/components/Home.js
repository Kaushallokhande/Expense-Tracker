import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Cashflow Section */}
            <div className="bg-white rounded-lg shadow p-6">
                <div className="border-b border-gray-200 pb-5 flex items-center justify-between">
                    {/* Tabs for Cashflow */}
                    <div className="flex space-x-8">
                        <a href="#" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">Cashflow</a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Last 7 days</a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Last 30 days</a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">All-time</a>
                    </div>
                    {/* New Invoice Button */}
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                        + New Invoice
                    </button>
                </div>

                {/* Cashflow Data Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {/* Revenue */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <p className="text-gray-500">Revenue</p>
                        <p className="text-3xl font-semibold">$405,091.00</p>
                        <p className="text-green-500">+4.75%</p>
                    </div>
                    {/* Overdue Invoices */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <p className="text-gray-500">Overdue Invoices</p>
                        <p className="text-3xl font-semibold">$12,787.00</p>
                        <p className="text-red-500">+54.02%</p>
                    </div>
                    {/* Outstanding Invoices */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <p className="text-gray-500">Outstanding Invoices</p>
                        <p className="text-3xl font-semibold">$245,988.00</p>
                        <p className="text-green-500">-1.39%</p>
                    </div>
                    {/* Expenses */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <p className="text-gray-500">Expenses</p>
                        <p className="text-3xl font-semibold">$30,156.00</p>
                        <p className="text-red-500">+10.18%</p>
                    </div>
                </div>

                {/* Recent Activity Section */}
                <div className="mt-8">
                    <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-4">
                        <ul className="divide-y divide-gray-200">
                            {/* Transaction Row */}
                            <li className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Reform</p>
                                        <p className="text-sm text-gray-500">Website redesign</p>
                                    </div>
                                    <div className="text-sm text-gray-900">$7,600.00 USD <span className="text-green-600 ml-2">Paid</span></div>
                                    <div className="text-sm text-gray-500">$500.00 tax</div>
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline">View transaction</a>
                                </div>
                            </li>

                            {/* Another Transaction */}
                            <li className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Tom Cook</p>
                                        <p className="text-sm text-gray-500">Salary</p>
                                    </div>
                                    <div className="text-sm text-gray-900">$10,000.00 USD <span className="text-gray-600 ml-2">Withdraw</span></div>
                                    <div className="text-sm text-gray-500">$0 tax</div>
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline">View transaction</a>
                                </div>
                            </li>

                            {/* Another Transaction */}
                            <li className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Tuple</p>
                                        <p className="text-sm text-gray-500">Logo design</p>
                                    </div>
                                    <div className="text-sm text-gray-900">$2,000.00 USD <span className="text-red-600 ml-2">Overdue</span></div>
                                    <div className="text-sm text-gray-500">$130.00 tax</div>
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline">View transaction</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Recent Clients Section */}
                <div className="mt-8">
                    <h2 className="text-lg font-medium text-gray-900">Recent Clients</h2>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-4">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="bg-gray-200 p-2 rounded-full">
                                        {/* Client Avatar or Logo */}
                                        <img src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="Tuple" className="h-10 w-10" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900">Tuple</p>
                                        <p className="text-sm text-gray-500">Last invoice: December 13, 2022</p>
                                    </div>
                                </div>
                                <div className="text-sm text-red-600">$2,000.00 Overdue</div>
                            </div>
                            <a href="#" className="text-sm font-medium text-blue-600 hover:underline mt-4 block">View all</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
