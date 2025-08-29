import React from 'react'
import "./App.css";

const App = () => {
  return (
    <div>
      <button className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300 active:bg-gray-400">1.Button</button>
      <div className="w-100 overflow-hidden rounded shadow-lg">
        <p>2. Image-</p>
        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" className="transition-transform duration-300 hover:scale-105" />
      </div>
    3.<h2 className='text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent'>Responsive Text</h2>
    4.<ul class="list-disc list-inside pl-5">
  <li className="hover:text-blue-600">Item 1</li>
  <li className="hover:text-blue-600">Item 2</li>
  <li className="hover:text-blue-600">Item 3</li>
</ul>
5.<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
  <img className="w-full rounded" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="Card Image"/>
  <h3 className="text-xl font-bold mt-4">Card Title</h3>
  <p className="text-gray-600 mt-2">Desc</p>
  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</button>
</div>
6.<table className="table-auto border-collapse border border-gray-300 w-full text-left">
  <thead>
    <tr className="bg-gray-200">
      <th className="border border-gray-300 px-4 py-2">Name</th>
      <th className="border border-gray-300 px-4 py-2">Age</th>
      <th className="border border-gray-300 px-4 py-2">City</th>
    </tr>
  </thead>
  <tbody>
    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
      <td className="border px-4 py-2">John</td>
      <td className="border px-4 py-2">25</td>
      <td className="border px-4 py-2">NYC</td>
    </tr>
    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
      <td className="border px-4 py-2">Alice</td>
      <td className="border px-4 py-2">28</td>
      <td className="border px-4 py-2">London</td>
    </tr>
    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
      <td className="border px-4 py-2">Sam</td>
      <td className="border px-4 py-2">30</td>
      <td className="border px-4 py-2">Paris</td>
    </tr>
    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
      <td className="border px-4 py-2">Emma</td>
      <td className="border px-4 py-2">22</td>
      <td className="border px-4 py-2">Tokyo</td>
    </tr>
  </tbody>
</table>
7.<form className="space-y-4 max-w-md mx-auto">
  <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
  <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
  <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
  <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
</form>
8.<nav className="bg-gray-100 p-4">
  <ul className="flex flex-col md:flex-row md:space-x-6">
    <li><a href="#" className="hover:text-blue-600">Home</a></li>
    <li><a href="#" className="hover:text-blue-600">About</a></li>
    <li><a href="#" className="hover:text-blue-600">Contact</a></li>
  </ul>
</nav>
9.<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  <div className="bg-white p-4 rounded shadow">Card 1</div>
  <div className="bg-white p-4 rounded shadow">Card 2</div>
  <div className="bg-white p-4 rounded shadow">Card 3</div>
  <div className="bg-white p-4 rounded shadow">Card 4</div>
  <div className="bg-white p-4 rounded shadow">Card 5</div>
  <div className="bg-white p-4 rounded shadow">Card 6</div>
</div>
10.
<div className="min-h-screen bg-gray-50">


  <nav className="bg-white shadow p-4">
    <ul className="flex flex-col md:flex-row md:space-x-6">
      <li><a href="#" className="hover:text-blue-600">Home</a></li>
      <li><a href="#" className="hover:text-blue-600">Features</a></li>
      <li><a href="#" className="hover:text-blue-600">Contact</a></li>
    </ul>
  </nav>


  <section className="text-center p-8">
    <h1 class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
      Welcome to Tailwind Exploration
    </h1>
    <img className="mx-auto mt-6 w-64 rounded shadow-lg transition-transform duration-300 hover:scale-105"
         src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="Hero Image"/>
  </section>


  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
    <div className="bg-white p-6 rounded shadow">Feature 1</div>
    <div className="bg-white p-6 rounded shadow">Feature 2</div>
    <div className="bg-white p-6 rounded shadow">Feature 3</div>
  </section>


  <section className="p-8">
    <h2 className="text-xl font-bold mb-4">Users Table</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
  <thead>
    <tr className="bg-gray-200">
      <th className="border border-gray-300 px-4 py-2">Name</th>
      <th className="border border-gray-300 px-4 py-2">Age</th>
      <th className="border border-gray-300 px-4 py-2">City</th>
    </tr>
  </thead>
  <tbody>
    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
      <td className="border px-4 py-2">John</td>
      <td className="border px-4 py-2">25</td>
      <td className="border px-4 py-2">NYC</td>
    </tr>
    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
      <td className="border px-4 py-2">Alice</td>
      <td className="border px-4 py-2">28</td>
      <td className="border px-4 py-2">London</td>
    </tr>
    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
      <td className="border px-4 py-2">Sam</td>
      <td className="border px-4 py-2">30</td>
      <td className="border px-4 py-2">Paris</td>
    </tr>
    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
      <td className="border px-4 py-2">Emma</td>
      <td className="border px-4 py-2">22</td>
      <td className="border px-4 py-2">Tokyo</td>
    </tr>
  </tbody>
</table>
  </section>


  <section className="p-8">
    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
    <form className="space-y-4 max-w-md mx-auto">
  <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
  <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
  <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
  <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
</form>
  </section>

</div>


    </div>
  )
}

export default App