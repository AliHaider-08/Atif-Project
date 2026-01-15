import React from "react"; 
 
const Contactus = () => { 
  return ( 
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4 py
12"> 
      {/*        Page Header */} 
      <div className="max-w-3xl text-center mb-10"> 
        <h1 className="text-4xl font-bold text-gray-800 mb-3"> 
          Get in Touch With Us 
        </h1> 
        <p className="text-gray-600 text-lg"> 
          Have questions about your order, products, or want to collaborate? 
          We’d love to hear from you. Reach out using the form or contact details below. 
        </p> 
      </div> 
 
      {/*      Main Content */} 
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded
2xl shadow-lg overflow-hidden"> 
        {/*           Left Section - Contact Info */} 
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-10 flex flex-col 
justify-center"> 
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2> 
 
          <div className="space-y-5 text-lg"> 
            <div> 
              <p className="font-semibold">    Address</p> 
              <p>Ali Digital Frontier — Lahore, Pakistan</p> 
            </div> 
 
            <div> 
              <p className="font-semibold">   Phone</p> 
              <p>+92 300 1234567</p> 
            </div> 
 
            <div> 
              <p className="font-semibold">        Email</p> 
              <p>support@alidigitalfrontier.com</p> 
            </div> 
          </div> 
 
          <div className="flex space-x-4 mt-8"> 
            <button className="bg-white text-blue-600 rounded-full p-3 hover:bg-blue-100 
transition"> 
              <i className="fab fa-facebook-f"></i> 
            </button> 
            <button className="bg-white text-blue-600 rounded-full p-3 hover:bg-blue-100 
transition"> 
              <i className="fab fa-twitter"></i> 
            </button> 
            <button className="bg-white text-blue-600 rounded-full p-3 hover:bg-blue-100 
transition"> 
              <i className="fab fa-instagram"></i> 
            </button> 
          </div> 
        </div> 
 
        {/*        Right Section - Contact Form */} 
        <div className="p-10"> 
          <h3 className="text-2xl font-bold text-gray-800 mb-6"> 
            Send Us a Message 
          </h3> 
 
          <form className="space-y-5"> 
            <div> 
              <label className="block text-gray-700 font-semibold mb-1"> 
                Full Name 
              </label> 
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none 
focus:ring-2 focus:ring-blue-500" 
              /> 
            </div> 
 
            <div> 
              <label className="block text-gray-700 font-semibold mb-1"> 
                Email Address 
              </label> 
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none 
focus:ring-2 focus:ring-blue-500" 
              /> 
            </div> 
 
            <div> 
              <label className="block text-gray-700 font-semibold mb-1"> 
                Message 
              </label> 
              <textarea 
                rows="4" 
                placeholder="Write your message..." 
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline
none focus:ring-2 focus:ring-blue-500" 
              ></textarea> 
            </div> 
 
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg 
hover:bg-blue-700 transition" 
            > 
              Send Message 
            </button> 
          </form> 
        </div> 
      </div> 
 
      {/*       Google Map Section */} 
      <div className="mt-12 w-full max-w-6xl rounded-2xl overflow-hidden shadow-lg"> 
        <iframe 
          title="Google Map" 
          
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.858996748323!2d
 74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMz
 HCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2s!4v1632211111111" 
          width="100%" 
          height="400" 
          allowFullScreen="" 
          loading="lazy" 
        ></iframe> 
      </div> 
    </div> 
  ); 
}; 
 
export default Contactus;