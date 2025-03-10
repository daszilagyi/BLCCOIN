import React from 'react';
import { Coins, Dog as DogBowl, LineChart as ChartLineUp, Milestone, Send } from 'lucide-react';
import Hero from './components/Hero';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About BLC Bullish Coin</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                BLC Bullish Coin is a revolutionary cryptocurrency that combines the potential of digital assets with a noble cause. We're building a community-driven ecosystem that supports dog shelters while creating value for investors.
              </p>
              <p className="text-lg leading-relaxed">
                Through our innovative tokenomics and charitable initiatives, we ensure that every transaction contributes to both investor growth and animal welfare.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80" 
                alt="Happy dog"
                className="rounded-lg shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Project Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard 
              icon={<Coins className="w-8 h-8" />}
              title="Tokenomics"
              description="Innovative reward system that benefits long-term holders"
            />
            <BenefitCard 
              icon={<DogBowl className="w-8 h-8" />}
              title="Charity"
              description="Direct support to verified dog shelters worldwide"
            />
            <BenefitCard 
              icon={<ChartLineUp className="w-8 h-8" />}
              title="Growth"
              description="Sustainable growth model with regular burns"
            />
            <BenefitCard 
              icon={<Milestone className="w-8 h-8" />}
              title="Community"
              description="Strong community governance and participation"
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <RoadmapCard 
              phase="Phase 1"
              title="Launch & Foundation"
              items={[
                "Token Launch",
                "Community Building",
                "Initial Exchange Listings",
                "First Shelter Partnerships"
              ]}
            />
            <RoadmapCard 
              phase="Phase 2"
              title="Growth & Development"
              items={[
                "Major Exchange Listings",
                "Shelter Network Expansion",
                "NFT Collection Launch",
                "Governance Implementation"
              ]}
            />
            <RoadmapCard 
              phase="Phase 3"
              title="Ecosystem Expansion"
              items={[
                "Global Shelter Network",
                "BLC DeFi Platform",
                "Mobile App Launch",
                "Cross-chain Integration"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-3 rounded bg-white/10 border border-white/20 focus:border-yellow-500 outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 rounded bg-white/10 border border-white/20 focus:border-yellow-500 outline-none"
                />
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full p-3 rounded bg-white/10 border border-white/20 focus:border-yellow-500 outline-none"
                ></textarea>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full transition-all w-full">
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
              <p className="mb-6">Stay updated with our latest news and developments.</p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full p-3 rounded bg-white/10 border border-white/20 focus:border-yellow-500 outline-none"
                />
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full transition-all w-full">
                  Subscribe
                </button>
              </form>
              <div className="mt-8">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-yellow-500 transition-colors">
                    <Send className="w-6 h-6" />
                  </a>
                  {/* Add more social icons as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
      <div className="text-yellow-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function RoadmapCard({ phase, title, items }) {
  return (
    <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
      <div className="text-yellow-500 font-bold mb-2">{phase}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;