import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Settings = () => {
  const [settings, setSettings] = useState({
    companyName: 'My Business',
    email: 'admin@mybusiness.com',
    phone: '+1-234-567-8900',
    address: '123 Business St, City, State 12345',
    currency: 'USD',
    taxRate: '10',
    notifications: true,
    darkMode: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSave = () => {
    alert('Settings saved successfully!')
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
            <Link to="/Orders" className='hover:bg-green-700 p-2 rounded-lg'>Orders</Link>
            <Link to="/Setting" className='hover:bg-green-700 p-2 rounded-lg bg-green-700'>Setting</Link>
        </nav>
      </div>

      <div className='flex-1 flex-col flex'>
        <header className='bg-white shadow p-4 flex relative justify-between'>
          <h1 className='text-xl font-semibold p-3'>Settings</h1>
          <button className='bg-blue-700 border boder-1 rounded-lg w-24 h-12 text-white'>Logout</button>
        </header> 

        <main className='p-6'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white rounded-lg shadow p-6 mb-6'>
              <h2 className='text-2xl font-bold mb-6'>General Settings</h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Company Name
                  </label>
                  <input
                    type='text'
                    name='companyName'
                    value={settings.companyName}
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={settings.email}
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Phone
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={settings.phone}
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Currency
                  </label>
                  <select
                    name='currency'
                    value={settings.currency}
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                  >
                    <option value='USD'>USD - US Dollar</option>
                    <option value='EUR'>EUR - Euro</option>
                    <option value='GBP'>GBP - British Pound</option>
                    <option value='PKR'>PKR - Pakistani Rupee</option>
                  </select>
                </div>

                <div className='md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Address
                  </label>
                  <textarea
                    name='address'
                    value={settings.address}
                    onChange={handleInputChange}
                    rows={2}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Tax Rate (%)
                  </label>
                  <input
                    type='number'
                    name='taxRate'
                    value={settings.taxRate}
                    onChange={handleInputChange}
                    min='0'
                    max='100'
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                  />
                </div>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow p-6 mb-6'>
              <h2 className='text-2xl font-bold mb-6'>Preferences</h2>
              
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='font-medium'>Email Notifications</h3>
                    <p className='text-sm text-gray-600'>Receive email notifications for new orders</p>
                  </div>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input
                      type='checkbox'
                      name='notifications'
                      checked={settings.notifications}
                      onChange={handleInputChange}
                      className='sr-only peer'
                    />
                    <div className='w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600'></div>
                  </label>
                </div>

                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='font-medium'>Dark Mode</h3>
                    <p className='text-sm text-gray-600'>Use dark theme for the dashboard</p>
                  </div>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input
                      type='checkbox'
                      name='darkMode'
                      checked={settings.darkMode}
                      onChange={handleInputChange}
                      className='sr-only peer'
                    />
                    <div className='w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600'></div>
                  </label>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow p-6'>
              <h2 className='text-2xl font-bold mb-6'>System Information</h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
                <div>
                  <span className='font-medium'>Version:</span> 1.0.0
                </div>
                <div>
                  <span className='font-medium'>Last Updated:</span> {new Date().toLocaleDateString()}
                </div>
                <div>
                  <span className='font-medium'>Database:</span> Connected
                </div>
                <div>
                  <span className='font-medium'>Storage:</span> 2.3 GB used
                </div>
              </div>
            </div>

            <div className='mt-6 flex justify-end gap-4'>
              <button className='px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50'>
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className='px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
              >
                Save Settings
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Settings
