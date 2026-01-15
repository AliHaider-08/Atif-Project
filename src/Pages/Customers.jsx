import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

const Customers = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' }
  ])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isAddingCustomer, setIsAddingCustomer] = useState(false)
  const [editingCustomer, setEditingCustomer] = useState(null)

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/Users')
        if (response.ok) {
          const customersData = await response.json()
          setCustomers(customersData)
        } else {
          console.error('Failed to fetch customers')
        }
      } catch (error) {
        console.error('Network error fetching customers:', error)
      }
    }
    
    fetchCustomers()
    console.log('Current customers data:', customers)
  }, [customers])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    if (editingCustomer) {
      handleUpdate(e)
    } else {
      e.preventDefault()
      if (formData.name && formData.email && formData.phone) {
        try {
          const response = await fetch('http://localhost:9000/api/createUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone
            })
          })
          
          if (response.ok) {
            const newCustomer = await response.json()
            console.log('Customer created successfully:', newCustomer)
            setCustomers([...customers, newCustomer])
            setFormData({ name: '', email: '', phone: '' })
            setIsAddingCustomer(false)
          } else {
            const error = await response.json()
            console.error('Error creating customer:', error)
            alert(`Error: ${error.message || 'Failed to create customer'}`)
          }
        } catch (error) {
          console.error('Network error:', error)
          alert('Network error: Failed to connect to server')
        }
      }
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:9000/api/User/${id}`, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        console.log('Customer deleted successfully')
        setCustomers(customers.filter(customer => customer.id !== id))
      } else {
        const error = await response.json()
        console.error('Error deleting customer:', error)
        alert(`Error: ${error.message || 'Failed to delete customer'}`)
      }
    } catch (error) {
      console.error('Network error:', error)
      alert('Network error: Failed to connect to server')
    }
  }

  const handleEdit = (customer) => {
    setEditingCustomer(customer)
    setFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone
    })
    setIsAddingCustomer(true)
  }

  const handleCancel = () => {
    setFormData({ name: '', email: '', phone: '' })
    setEditingCustomer(null)
    setIsAddingCustomer(false)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    if (formData.name && formData.email && editingCustomer) {
      try {
        const response = await fetch(`http://localhost:9000/api/User/${editingCustomer.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone
          })
        })
        
        if (response.ok) {
          const updatedCustomer = await response.json()
          console.log('Customer updated successfully:', updatedCustomer)
          setCustomers(customers.map(customer => 
            customer.id === editingCustomer.id ? updatedCustomer : customer
          ))
          setFormData({ name: '', email: '', phone: '' })
          setEditingCustomer(null)
          setIsAddingCustomer(false)
        } else {
          const error = await response.json()
          console.error('Error updating customer:', error)
          alert(`Error: ${error.message || 'Failed to update customer'}`)
        }
      } catch (error) {
        console.error('Network error:', error)
        alert('Network error: Failed to connect to server')
      }
    }
  }

  return (
    <div className='flex bg-gray-200 min-h-screen'>
      <div className='flex w-60 bg-gray-800 text-white flex-col'>
        <div className='p-6 text-2xl font-bold border-b border-gray-700'>
            Dashboard
        </div>

        <nav className='flex flex-col p-4 gap-7'>
            <Link to="/" className='hover:bg-green-700 p-2 rounded-lg'>Home</Link>
            <Link to="/Customers" className='hover:bg-green-700 p-2 rounded-lg bg-green-700'>Customers</Link>
            <Link to="/Orders" className='hover:bg-green-700 p-2 rounded-lg'>Orders</Link>
            <Link to="/Setting" className='hover:bg-green-700 p-2 rounded-lg'>Setting</Link>
        </nav>
      </div>

      <div className='flex-1 flex-col flex'>
        <header className='bg-white shadow p-4 flex relative justify-between'>
          <h1 className='text-xl font-semibold p-3'>Customers Management</h1>
          <button className='bg-blue-700 border boder-1 rounded-lg w-24 h-12 text-white'>Logout</button>
        </header> 

        <main className='p-6'>
          <div className='bg-white rounded-lg shadow p-6'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold'>Customer List</h2>
              <button 
                onClick={() => setIsAddingCustomer(!isAddingCustomer)}
                className='bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700'
              >
                {isAddingCustomer ? 'Cancel' : 'Add Customer'}
              </button>
            </div>

            {isAddingCustomer && (
              <div className='bg-gray-50 p-4 rounded-lg mb-6'>
                <h3 className='text-lg font-semibold mb-4'>
                  {editingCustomer ? 'Edit Customer' : 'Add New Customer'}
                </h3>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Customer Name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                    required
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                    required
                  />
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Phone Number'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                    required
                  />
                  <div className='md:col-span-3 flex gap-2'>
                    <button 
                      type='submit'
                      className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'
                    >
                      {editingCustomer ? 'Update Customer' : 'Save Customer'}
                    </button>
                    {editingCustomer && (
                      <button 
                        type='button'
                        onClick={handleCancel}
                        className='bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600'
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}

            <div className='overflow-x-auto'>
              <table className='w-full table-auto'>
                <thead>
                  <tr className='bg-gray-100'>
                    <th className='px-4 py-2 text-left'>ID</th>
                    <th className='px-4 py-2 text-left'>Name</th>
                    <th className='px-4 py-2 text-left'>Email</th>
                    <th className='px-4 py-2 text-left'>Phone</th>
                    <th className='px-4 py-2 text-left'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className='border-b hover:bg-gray-50'>
                      <td className='px-4 py-2'>{customer.id}</td>
                      <td className='px-4 py-2 font-medium'>{customer.name}</td>
                      <td className='px-4 py-2'>{customer.email}</td>
                      <td className='px-4 py-2'>{customer.phone}</td>
                      <td className='px-4 py-2'>
                        <button 
                          onClick={() => handleEdit(customer)}
                          className='bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm mr-2'
                        >
                          Update
                        </button>
                        <button 
                          onClick={() => handleDelete(customer.id)}
                          className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm'
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {customers.length === 0 && (
                <div className='text-center py-8 text-gray-500'>
                  No customers found. Add your first customer!
                </div>
              )}
            </div>

            <div className='mt-6 text-sm text-gray-600'>
              Total Customers: {customers.length}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Customers
