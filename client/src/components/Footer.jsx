const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold mb-4">Housing Hub</h2>
            <p className="text-gray-600">Serving students since 2014</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            <div>
              <h3 className="text-lg font-bold mb-2">Get Involved</h3>
              <ul className="text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Join the Discussion</a></li>
                <li><a href="#" className="hover:text-blue-500">Social Media Tips</a></li>
                <li><a href="#" className="hover:text-blue-500">Find Housing Options</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Community Forum</h3>
              <ul className="text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Learn More</a></li>
                <li><a href="#" className="hover:text-blue-500">Opportunities</a></li>
                <li><a href="#" className="hover:text-blue-500">Get in Touch</a></li>
                <li><a href="#" className="hover:text-blue-500">Latest Updates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Support Center</h3>
              <ul className="text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Help &amp; Support</a></li>
                <li><a href="#" className="hover:text-blue-500">Upgrade Account</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Connect with Us</h3>
              <ul className="text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-500">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-500">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;