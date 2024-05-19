const PropertyListings = () => {
  return (
    <section className="py-10 px-4">
      <h3 className="text-xl font-bold mb-4">Property listings</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 text-center">
        <div className="bg-white p-4 rounded shadow">
          <img src="image-url-1" alt="Rate your experience" className="w-full h-32 object-cover rounded" />
          <h4 className="mt-2 font-semibold">Rate your experience</h4>
          <p className="text-sm text-gray-600">Community feedback</p>
          <button className="bg-gray-500 text-white px-4 py-2 rounded mt-2">Submit</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img src="image-url-2" alt="Student Housing Hub" className="w-full h-32 object-cover rounded" />
          <h4 className="mt-2 font-semibold">Student Housing Hub</h4>
          <p className="text-sm text-gray-600">Verified listings</p>
          <button className="bg-gray-500 text-white px-4 py-2 rounded mt-2">Explore</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img src="image-url-3" alt="Join the conversation" className="w-full h-32 object-cover rounded" />
          <h4 className="mt-2 font-semibold">Join the conversation</h4>
          <p className="text-sm text-gray-600">Connect with peers</p>
          <button className="bg-gray-500 text-white px-4 py-2 rounded mt-2">Participate</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img src="image-url-4" alt="Landlord dashboard" className="w-full h-32 object-cover rounded" />
          <h4 className="mt-2 font-semibold">Landlord dashboard</h4>
          <p className="text-sm text-gray-600">Insights and data</p>
          <button className="bg-gray-500 text-white px-4 py-2 rounded mt-2">View analytics</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img src="image-url-5" alt="User authentication" className="w-full h-32 object-cover rounded" />
          <h4 className="mt-2 font-semibold">User authentication</h4>
          <p className="text-sm text-gray-600">Secure login process</p>
          <button className="bg-gray-500 text-white px-4 py-2 rounded mt-2">Sign in</button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
