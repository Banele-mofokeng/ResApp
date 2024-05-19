
const Categories = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <button className="bg-white p-4 rounded shadow">Apartments</button>
        <button className="bg-white p-4 rounded shadow">Houses</button>
        <button className="bg-white p-4 rounded shadow">Shared</button>
        <button className="bg-white p-4 rounded shadow">Rooms for</button>
        <button className="bg-white p-4 rounded shadow">Nearby</button>
        <button className="bg-white p-4 rounded shadow">Kitchen</button>
        <button className="bg-white p-4 rounded shadow">Study Areas</button>
        <button className="bg-white p-4 rounded shadow">Quiet</button>
      </div>
    </section>
  );
};

export default Categories;