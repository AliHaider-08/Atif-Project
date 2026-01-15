import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashbaord = () => {
  const [stats, setStats] = useState({
    totalSales: 5340,
    totalOrders: 5632,
    totalCustomers: 6716
  })

  const [recentCustomers, setRecentCustomers] = useState([])
  const [recentOrders, setRecentOrders] = useState([])

  useEffect(() => {
    // Simulate fetching data from localStorage or API
    const customers = JSON.parse(localStorage.getItem('customers')) || [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' }
    ]
    
    const orders = JSON.parse(localStorage.getItem('orders')) || [
      { id: 1, customerName: 'John Doe', product: 'Laptop', quantity: 1, price: 1200, status: 'Delivered' },
      { id: 2, customerName: 'Jane Smith', product: 'Mouse', quantity: 2, price: 50, status: 'Pending' }
    ]

    setRecentCustomers(customers.slice(0, 3))
    setRecentOrders(orders.slice(0, 3))

    // Calculate dynamic stats
    const totalSales = orders.reduce((sum, order) => sum + (order.price * order.quantity), 0)
    const deliveredOrders = orders.filter(order => order.status === 'Delivered').length

    setStats({
      totalSales,
      totalOrders: orders.length,
      totalCustomers: customers.length
    })
  }, [])
  return (
    <div className='flex bg-gray-200 min-h-screen'>
      <div className='flex w-60 bg-gray-800 text-white flex-col'>
        <div className='p-6 text-2xl font-bold border-b border-gray-700'>
            Dashboard
        </div>

        <nav className='flex flex-col p-4 gap-7'>
       
            <Link to="/" className='hover:bg-green-700 p-2 rounded-lg'>Home</Link>
            <Link to="/Customers" className='hover:bg-green-700 p-2 rounded-lg'>Customers</Link>
            <Link to="/Orders" className='hover:bg-green-700 p-2 rounded-lg'>Orders</Link>
            <Link to="/Setting" className='hover:bg-green-700 p-2 rounded-lg'>Setting</Link>
         
        </nav>
      </div>


      <div className='flex-1 flex-col flex'>
       <header className='bg-white shadow p-4  flex relative justify-between'>
        <h1 className='text-xl font-semibold p-3'>Welcome to Dashboard</h1>
          <button className='bg-blue-700 border boder-1 rounded-lg w-24 h-12 text-white'>Logout</button>
        </header> 



        <main className='p-6 space-y-3'>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 h-36'>
            <div className='bg-white  border-2 rounded-lg shadow p-6 text-center'>
            <h2 className='text-lg font-semibold'>Total Sales</h2>
            <p className='text-2xl font-bold text-green-700 mt-3'>${stats.totalSales}</p>
            </div>


            <div className='bg-white border-2 rounded-lg shadow p-6 text-center'>
              <h2 className='text-lg font-semibold'> Total Orders</h2>
              <p className='text-2xl font-bold text-red-600 mt-3'>{stats.totalOrders}</p>
            </div>


            <div className='bg-white border-2 rounded-lg shadow p-6 text-center'>
              <h2 className='text-lg font-semibold'>Total Customers</h2>
              <p className='text-2xl font-bold text-blue-600 mt-3'>{stats.totalCustomers}</p>
            </div>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <div className='bg-white border-2 rounded-lg shadow p-6'>
              <h3 className='text-lg font-semibold mb-4'>Recent Customers</h3>
              <div className='space-y-3'>
                {recentCustomers.map(customer => (
                  <div key={customer.id} className='flex justify-between items-center p-2 hover:bg-gray-50 rounded'>
                    <div>
                      <p className='font-medium'>{customer.name}</p>
                      <p className='text-sm text-gray-600'>{customer.email}</p>
                    </div>
                    <span className='text-sm text-green-600'>Active</span>
                  </div>
                ))}
                {recentCustomers.length === 0 && (
                  <p className='text-gray-500 text-center'>No recent customers</p>
                )}
              </div>
            </div>

            <div className='bg-white border-2 rounded-lg shadow p-6'>
              <h3 className='text-lg font-semibold mb-4'>Recent Orders</h3>
              <div className='space-y-3'>
                {recentOrders.map(order => (
                  <div key={order.id} className='flex justify-between items-center p-2 hover:bg-gray-50 rounded'>
                    <div>
                      <p className='font-medium'>#{order.id} - {order.product}</p>
                      <p className='text-sm text-gray-600'>{order.customerName}</p>
                    </div>
                    <div className='text-right'>
                      <p className='font-medium'>${order.price * order.quantity}</p>
                      <span className={`text-xs px-2 py-1 rounded ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
                {recentOrders.length === 0 && (
                  <p className='text-gray-500 text-center'>No recent orders</p>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

    </div>
  )
}

export default Dashbaord
