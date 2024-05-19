
const Hero = () => {
  return (
    <main className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("background-image-url")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Discover your perfect student home.</h2>
        <div className="flex items-center w-3/4 md:w-1/2 lg:w-1/3">
          <input type="text" placeholder="Search for housing" className="w-full px-4 py-2 rounded-l-md" />
          <button className="bg-blue-500 px-4 py-2 rounded-r-md">Filter</button>
        </div>
        <p className="mt-4">View detailed property listings with ratings and reviews.</p>
      </div>
    </main>
  );
};

export default Hero;