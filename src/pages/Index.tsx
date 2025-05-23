import { Coffee, Clock, MapPin, Phone } from 'lucide-react'

const Index = () => {
  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich and aromatic single shot' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk foam' },
    { name: 'Avocado Toast', price: '$8.50', description: 'Sourdough with avocado, cherry tomatoes' },
    { name: 'Blueberry Muffin', price: '$3.75', description: 'Freshly baked daily' }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gray-900">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Brew & Bites</h1>
            <p className="text-xl text-gray-200 mb-8">Artisanal coffee and fresh pastries in the heart of the city</p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition">
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Founded in 2015, Brew & Bites is a cozy cafe dedicated to serving high-quality coffee and homemade food. 
            We source our beans from sustainable farms and bake everything fresh daily.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <span className="text-amber-600 font-medium">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center">
            <MapPin className="text-amber-600 mr-4" size={24} />
            <div>
              <h3 className="font-bold">Location</h3>
              <p className="text-gray-600">123 Coffee Street, Downtown</p>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="text-amber-600 mr-4" size={24} />
            <div>
              <h3 className="font-bold">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 7am - 7pm</p>
              <p className="text-gray-600">Weekends: 8am - 6pm</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="text-amber-600 mr-4" size={24} />
            <div>
              <h3 className="font-bold">Contact</h3>
              <p className="text-gray-600">(555) 123-4567</p>
              <p className="text-gray-600">hello@brewandbites.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;