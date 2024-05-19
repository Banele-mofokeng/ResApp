const Popular = () => {
  return (
    <section className="py-10 px-4">
      <h3 className="text-xl font-bold mb-4">Popular</h3>
      <div className="overflow-x-scroll">
        <div className="flex space-x-4">
          <div className="bg-white p-4 rounded shadow w-64">
            <img src="property-image-url" alt="property" className="w-full h-32 object-cover rounded" />
            <h4 className="mt-2 font-semibold">Cozy Studio near Campus</h4>
            <p className="text-sm">Spacious Room - Available Now</p>
            <button className="text-blue-500 mt-2">Contact landlord</button>
          </div>
          <div className="bg-white p-4 rounded shadow w-64">
            <img src="property-image-url" alt="property" className="w-full h-32 object-cover rounded" />
            <h4 className="mt-2 font-semibold">Modern Apartment</h4>
            <p className="text-sm">Shared House - Close to University</p>
            <button className="text-blue-500 mt-2">Contact landlord</button>
          </div>
          <div className="bg-white p-4 rounded shadow w-64">
            <img src="property-image-url" alt="property" className="w-full h-32 object-cover rounded" />
            <h4 className="mt-2 font-semibold">Private Room in Quiet</h4>
            <p className="text-sm">Cozy Dormitory - Ideal for Students</p>
            <button className="text-blue-500 mt-2">Contact landlord</button>
          </div>
          <div className="bg-white p-4 rounded shadow w-64">
            <img src="property-image-url" alt="property" className="w-full h-32 object-cover rounded" />
            <h4 className="mt-2 font-semibold">Lorem ipsum</h4>
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
            <button className="text-blue-500 mt-2">Button</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
