// import React from 'react'

const Heading = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Student Housing Hub</h1>
      <div className="space-x-4">
        <button className="text-gray-600">Search for</button>
        <button className="text-gray-600">Help</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Log In</button>
      </div>
    </header>
  );
}

export default Heading