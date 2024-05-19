const WeeklyHighlights = () => {
  return (
    <section className="py-10 px-4">
      <h3 className="text-xl font-bold mb-4">This week in Student Housing</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <img src="highlight-image-url" alt="highlight" className="w-full h-32 object-cover rounded" />
          <h4 className="mt-2 font-semibold">Nearby housing options</h4>
          <button className="text-blue-500 mt-2">Search</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img src="highlight-image-url" alt="highlight" className="w-full h-32 object-cover rounded" />
          <h4 className="mt-2 font-semibold">Single room</h4>
          <button className="text-blue-500 mt-2">View details</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img src="highlight-image-url" alt="highlight" className="w-full h-32 object-cover rounded" />
          <h4 className="mt-2 font-semibold">Share your experience</h4>
          <button className="text-blue-500 mt-2">View reviews</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <img src="highlight-image-url" alt="highlight" className="w-full h-32 object-cover rounded" />
          <h4 className="mt-2 font-semibold">Property manager</h4>
          <button className="text-blue-500 mt-2">Manage properties</button>
        </div>
      </div>
    </section>
  );
};

export default WeeklyHighlights;
