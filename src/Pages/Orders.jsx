import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', product: 'Laptop', quantity: 1, price: 1200, status: 'Delivered' },
    { id: 2, customerName: 'Jane Smith', product: 'Mouse', quantity: 2, price: 50, status: 'Pending' },
    { id: 3, customerName: 'Bob Johnson', product: 'Keyboard', quantity: 1, price: 150, status: 'Processing' }
  ])

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return 'bg-green-100 text-green-800'
      case 'Pending': return 'bg-yellow-100 text-yellow-800'
      case 'Processing': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  return (
    <div className='flex bg-gray-200 min-h-screen'>
      <div className='flex w-60 bg-gray-800 text-white flex-col'>
        <div className='p-6 text-2xl font-bold border-b border-gray-700'>
            Dashboard
        </div>

        <nav className='flex flex-col p-4 gap-7'>
            <Link to="/" className='hover:bg-green-700 p-2 rounded-lg'>Home</Link>
            <Link to="/Customers" className='hover:bg-green-700 p-2 rounded-lg'>Customers</Link>
            <Link to="/Orders" className='hover:bg-green-700 p-2 rounded-lg bg-green-700'>Orders</Link>
            <Link to="/Setting" className='hover:bg-green-700 p-2 rounded-lg'>Setting</Link>
        </nav>
      </div>

      <div className='flex-1 flex-col flex'>
        <header className='bg-white shadow p-4 flex relative justify-between'>
          <h1 className='text-xl font-semibold p-3'>Orders Management</h1>
          <button className='bg-blue-700 border boder-1 rounded-lg w-24 h-12 text-white'>Logout</button>
        </header> 

        <main className='p-6'>
          <div className='bg-white rounded-lg shadow p-6'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold'>Order List</h2>
              <div className='flex gap-2'>
                <div className='text-sm text-gray-600'>
                  Total Orders: {orders.length}
                </div>
              </div>
            </div>

            <div className='overflow-x-auto'>
              <table className='w-full table-auto'>
                <thead>
                  <tr className='bg-gray-100'>
                    <th className='px-4 py-2 text-left'>Order ID</th>
                    <th className='px-4 py-2 text-left'>Customer</th>
                    <th className='px-4 py-2 text-left'>Product</th>
                    <th className='px-4 py-2 text-left'>Quantity</th>
                    <th className='px-4 py-2 text-left'>Price</th>
                    <th className='px-4 py-2 text-left'>Total</th>
                    <th className='px-4 py-2 text-left'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className='border-b hover:bg-gray-50'>
                      <td className='px-4 py-2 font-medium'>#{order.id}</td>
                      <td className='px-4 py-2'>{order.customerName}</td>
                      <td className='px-4 py-2'>{order.product}</td>
                      <td className='px-4 py-2'>{order.quantity}</td>
                      <td className='px-4 py-2'>${order.price}</td>
                      <td className='px-4 py-2 font-semibold'>${order.price * order.quantity}</td>
                      <td className='px-4 py-2'>
                        <select 
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          className={`px-2 py-1 rounded text-sm font-medium ${getStatusColor(order.status)}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {orders.length === 0 && (
                <div className='text-center py-8 text-gray-500'>
                  No orders found.
                </div>
              )}
            </div>

            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='bg-blue-50 p-4 rounded-lg'>
                <h3 className='font-semibold text-blue-800'>Pending Orders</h3>
                <p className='text-2xl font-bold text-blue-600'>
                  {orders.filter(o => o.status === 'Pending').length}
                </p>
              </div>
              <div className='bg-yellow-50 p-4 rounded-lg'>
                <h3 className='font-semibold text-yellow-800'>Processing Orders</h3>
                <p className='text-2xl font-bold text-yellow-600'>
                  {orders.filter(o => o.status === 'Processing').length}
                </p>
              </div>
              <div className='bg-green-50 p-4 rounded-lg'>
                <h3 className='font-semibold text-green-800'>Delivered Orders</h3>
                <p className='text-2xl font-bold text-green-600'>
                  {orders.filter(o => o.status === 'Delivered').length}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Orders
